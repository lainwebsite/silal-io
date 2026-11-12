---
name: figma-page-import
description: Move a web page (a Claude artifact, an HTML file, or a URL) into a frame in a Figma file, using the design system that already exists in that file. Use when the user gives a Figma frame URL and a page to move into it, or asks to "move/convert/port this page to Figma".
argument-hint: "[page name] [source: artifact path | URL | file] [target Figma frame URL]"
---

# Move a web page into Figma

You move one web page into a Figma frame, using the design system that already exists in the file. Follow the rules literally. Ask only for inputs you cannot check yourself, and ask once, briefly.

## 0. Intake (always do this first)

Read the inputs from the arguments and the user's message. The user fills this form. Any field marked (optional) may stay empty.

```
PAGE:                  name of the page to move
SOURCE:                artifact + file path (e.g. team-ali.html), a URL, or a local HTML file
SOURCE VERSION:        which version to render when there is more than one (main / working copy)
TARGET FRAME:          Figma URL of the frame to build into (contains fileKey and node-id)
REFERENCE FRAME:       (optional) Figma URL of a finished page to copy structure, naming, header, footer from
DESIGN SYSTEM:         (optional) Figma URL of the documentation frame, and/or names of the
                       color / spacing / radius variable collections
PROJECT RULES:         (optional) overrides: spacing scale, gutter, stroke weights, pill size,
                       frame naming rule, line-height limit, fixed type scale
RESTRICTIONS:          (optional) collections, styles, frames, or sections that must not be used or changed
```

Several pages in one run: the user may give several PAGE / SOURCE / TARGET FRAME rows. Process them one after another, one target frame at a time, and write one report per page.

Parsing the Figma URL: `figma.com/design/:fileKey/:name?node-id=A-B` gives fileKey `:fileKey` and nodeId `A:B` (replace "-" with ":"). A `/branch/:branchKey/` URL uses the branchKey as the fileKey.

Checks before building (do them yourself, do not ask):
- `create_session` with the fileKey, then pass the sessionId to every Figma tool. If the MCP connection drops and returns, check the sessionId and create a new one if needed.
- Read the TARGET FRAME: what it contains, whether Main Content is empty, which Header variant and Footer it has. If Main Content is not empty, or something that is not yours changed in the target, stop and ask.
- Find the design system: the documentation frame, the local variable collections (color, spacing, radius), the local text styles, and existing components (header, footer, pill, badge, button).
- Ask once only if TARGET FRAME, SOURCE, or SOURCE VERSION (when it is ambiguous) is missing.

## 1. Principle: use what already exists in the file
- Read the design system documentation first. Use what exists. Do not recreate it, and do not type raw values for colors, spacing, or radii (no hex, no loose numbers).
- Colors: bind fill, stroke, and text colors to semantic color variables (`setBoundVariableForPaint`). Gaps and padding: bind to spacing variables (`setBoundVariable`). Radius: bind all four corners to the radius variable.
- Typography: consistency comes first (section 8). Do not create Text Styles and do not edit existing ones. Apply an existing Text Style only when it matches the text exactly. Otherwise set the font properties directly from the type scale.
- Primitive collections are only a source of values. Do not use them directly. Do not use collections or styles that belong to other projects.
- Use instances of existing components (header, footer, pill, badge, button). Do not rebuild them.
- A one-off large spacing value (above the top of the scale) may stay unbound. Mention it in the report.
- If you need a color, spacing, or radius token that does not exist: do not create it silently. Add it to the matching collection (with scope and code syntax), update the documentation frame, and report it. If the nearest existing token is good enough, use it and report it as a deviation, or ask first.
- Check for name collisions before creating a new variable.

## 2. General rules
- No backups unless the owner asks.
- One frame is worked on by one session. If a change that is not yours appears in the target frame, stop and ask.
- Do not change other frames or pages. Do not overwrite styles or variables that belong to other sessions.
- Do not push to a repository, deploy, or edit the source unless asked. A Claude artifact is read with the Artifact tool (action: read), never WebFetch.
- One `use_figma` call = one section or one fix. Never run two `use_figma` calls at the same time, and never take a screenshot in parallel with an edit.
- Do not store state on Figma nodes. Record every ID from the return values and pass them as literals to the next call.

## 3. Workflow per page
1. **Render the source** at 1728px (or the project's design width) with Playwright, as a static render:
   - block animation and scroll scripts (for example gsap, ScrollTrigger, lenis, or similar libraries the page uses);
   - force reveal elements visible: `[data-reveal]`, `[data-fade]`, `[data-up]`, `.reveal`, `[class*=reveal]` and their children with `opacity:1; transform:none; visibility:visible`;
   - header `position: relative`; `html { scroll-behavior: auto }`;
   - scroll down in steps (about 400px each) and back to the top before the screenshot;
   - serve the page through a local static server. If relative assets return 404, symlink or copy them into the served folder.
2. **Measure the structure** of each section from the DOM: boxes, text (family, size, weight, line height, letter spacing, case, color), padding, gaps, radii, `object-fit`, positioning (sticky, absolute).
3. **Write the type scale and the color mapping tables** (section 8) before the first section.
4. **Build each section** in Figma following sections 4 to 8, using the existing variables directly.
5. **Photos and logos:**
   - First create a frame named `Image` in its place. Then call `upload_assets` with `nodeIds`, then `curl -F "file=@x.jpg;type=image/jpeg" <submitUrl>`.
   - Then change the fill to `scaleMode: CROP` with an `imageTransform` equal to the web's `object-fit: cover`. Formula: `s = max(fw/iw, fh/ih)`, `sw = iw·s`, `sh = ih·s`, `x0 = (bw−sw)/2`, `y0 = (bh−sh)/2`, matrix `[[fw/sw, 0, (ox−x0)/sw], [0, fh/sh, (oy−y0)/sh]]`. Here (fw, fh) is the Figma frame, (bw, bh) is the photo box on the web (including any parallax overscan), and (ox, oy) is the frame's offset inside that box.
   - Convert WebP to JPG (WebP shows white in Figma). Render logos as transparent PNG at 3x. Small icons may use `createNodeFromSvg`.
6. **Verify** each section (section 9), then move on.
7. After all sections: audit the whole page, name the frames, write the report.

## 4. Structure and auto layout
- Reduce nested frames. Remove wrappers with no fill, stroke, effect, clip, or layout job. A new container is only for grouping items in one column/row, or items with the same gap.
- Every section, column, card, list, button, and tag uses auto layout. Image, Icon, overlay, decoration, illustration, and freely positioned diagram frames are not forced into auto layout. Their contents may use auto layout one by one.
- Direction comes from an XY cut: a column if the distance between items is ≥56px, otherwise a row. Two columns far apart use SPACE_BETWEEN.
- Setting order: layoutMode → padding → sizing mode → HUG/FILL. `resize()` resets sizing to FIXED, so set sizing again afterwards.
- A frame with fill/stroke/clip ends up FIXED. A plain frame is HUG. A child is FILL only if its parent is not HUG.
- Overlays and sticky columns are ABSOLUTE at their static-render position, with no negative scale.
- The main structural frames keep fixed names: Body, Header, Main Content, Footer.
- Content narrower than the page width is centered: the section has the standard side padding, and its child has a FIXED width with `counterAxisAlignItems = CENTER`. Do not use large padding to shift content.

## 5. Spacing (defaults, override through PROJECT RULES)
- Space between children uses the parent's `itemSpacing`. Forbidden: padding on the second child, padded wrappers used to push, spacers, fake margins.
- Unequal gaps are grouped into sub-containers.
- Allowed values: 0, 5, 10, 20, 30… (multiples of 10, smallest 5). Rounding: 1–2 → 0, 3–7 → 5, anything else to the nearest multiple of 10, with the midpoint rounding up (15 → 20). Exception: a section's left/right padding uses the project's gutter value (default 64).

## 6. Strokes (defaults)
- Hairlines, dividers, table lines, pill outlines: 0.5.
- Weight 1 only for lines that must stand out: the brand accent, the active indicator, and the underline of a text link. 2–3px accents and icon strokes stay unchanged.

## 7. Pills and small components (defaults)
- Pill (button, tag, chip, status): HUG size, full radius, stroke counted inside the layout, vertical padding 10 and horizontal padding 20 (horizontal must be larger). Text inside a pill follows the same type scale as other text. Do not apply trim settings that would change an existing Text Style.
- Number badge of 1–2 characters: fixed 30×30 circle with the content centered. A wide CTA bar with content on the left and right: FILL width following the column.

## 8. Typography and colors

### Typography
Priority: consistent font family, font size, font weight, and line height across the whole page and across all pages of the same project. Text Styles are optional.

1. **Build a type scale first (before the first section).**
   - Measure every text on the source render (family, size, weight, line height, letter spacing, text case, color).
   - Group the values into a small set of roles (for example: display, page title, section title, card title, lead, body, small, label, button). Round untidy web sizes to the nearest value in the set. Keep the number of distinct combinations small.
   - Write the result as a table: role → family, size, weight, line height, letter spacing, case. Use this table for every text on the page, and reuse it for every other page of the same project. If PROJECT RULES gives a fixed type scale, use that instead.
2. **Font family.** Use the family from the source. Use only the weights that the source uses. If a family or weight is not available in Figma, stop and ask for a substitute. Do not guess one silently.
3. **Size, weight, line height.**
   - Size and weight come from the type scale table. Two texts with the same role must have identical values.
   - Line height is set in percent (or in px, but never mixed across the page). Default maximum 140%. One role has one line height.
   - Headings are decided by role, not by web size. A page has one page title.
4. **Existing Text Styles (use only if they already exist).**
   - Before building, list the Text Styles in the file (family, size, weight, line height, letter spacing, case).
   - If a style matches a role in the type scale on every one of those values, apply it (`setTextStyleIdAsync`) to all texts of that role.
   - If a style is only close (for example the size differs), do not apply it and do not edit it. Set the values directly from the type scale and mention the near match in the report.
   - Never create, rename, or modify a Text Style, because other texts that use it would change too.
5. **Directly set properties** (when no matching style exists): `fontName`, `fontSize`, `lineHeight` (`{unit:'PERCENT', value}`), `letterSpacing`, `textCase`. Load every font weight before changing text.

### Colors
- Match each web color to the nearest semantic token by role (primary, secondary, tertiary, brand, on-brand text; page, subtle, brand, accent backgrounds; default, strong, brand, on-photo borders; icons). Transparent tokens already carry their alpha: set the paint opacity back to 1 after `setBoundVariableForPaint`. No hex. Logos and photos get no token.
- If no token fits (for example white at 12% over a photo, or a gray that is not in the palette), do not use hex. Pick the nearest match and report it, or ask.
- Make a color mapping table at the start of the task (web color → token) and use it consistently across all pages of the same project.

## 9. Text and verification
- No manual line breaks. Paragraphs: `textAutoResize = HEIGHT`, with the width set until the line count equals the web's. If lines increase, widen gradually, at most about 8%. If the type scale makes the text smaller than the web and the line count drops, narrow the width until it matches.
- One sentence is one node. Different colors or bold use ranges. Short single-line text uses `WIDTH_AND_HEIGHT`.
- Load the fonts (every family and weight in the type scale) before creating or editing text, changing `fontName`, `fontSize`, `lineHeight`, `textAutoResize`, or `resize`.
- For each section: compare the Figma screenshot with the source render. Report the pixel difference, but it is not a pass condition. Check: nothing overlaps or is clipped, no flipped nodes, photos and icons show, text line counts match the web, no gap/padding violations.
- Final audit, all must be 0:
  - text whose family, size, weight, or line height is not in the page's type scale table;
  - two texts with the same role but different values;
  - text that exactly matches an existing Text Style but does not use it;
  - text with manual breaks;
  - line height above the limit (default 140%);
  - spacing values outside the scale;
  - fill/stroke/text without a token (except logos and photos);
  - gaps/padding not bound to the spacing variables;
  - radii not bound.
  Exceptions you may report: gradient scrims (see section 11) and logo vectors.

## 10. Naming (defaults, override through PROJECT RULES)
- Name every frame "Frame <9 digits>", +1 in depth-first order (child index order), starting from a random number. Except Body, Header, Main Content, Footer, Image, Icon, and imported logo frames.
- Skip the contents of instances. Do this last. If frames are added or deleted afterwards, renumber the whole page, then verify there are no gaps and no duplicates.

## 11. Technical notes (common pitfalls)
- Main Content must be FILL horizontally and HUG vertically before sections are built. Otherwise a FILL section is only as wide as its content.
- A transparent header over a hero: use the overlay variant instance, `layoutPositioning = ABSOLUTE` at (0,0), and move it to the last child position in Body so it draws above the hero.
- A gradient scrim over a photo: gradient stops bound to a variable lose their alpha and become solid. Use plain RGBA stops and report it as an exception.
- Paints inside a component or instance cannot be recolored without removing the variable binding. Build variants by cloning elements that are already bound.
- Icons from `createNodeFromSvg`: name them `Icon`, clear the fill, bind the stroke to an icon or text token, and do not change the stroke weight.
- Do not look up frames by name after renumbering. Find them by structure (child order) or by stored IDs.
- A photo used on several pages: upload it again for each `Image` frame. Do not pull it from another frame.
- Take screenshots with `get_screenshot` (`maxDimension` equal to the frame height for a 1:1 scale), download them with curl, then compare section by section with the source render (crop and scale to the same size).

## 12. Final report (short, per page)
- Frame count: how many use auto layout, how many do not, and why.
- Number of wrappers and deepest nesting.
- Typography: the type scale table (role → family, size, weight, line height), which Text Styles were applied (if any), which near matches were not applied, and any font or weight that was not available in Figma.
- Audit results (section 9).
- Numbering: start number, end number, count, in order or not.
- Height and difference per section against the web, plus the pixel difference.
- What is unfinished, token deviations, and decisions that need an answer.
