"use client";

import Image from "next/image";
import r from "../newsroom.module.css";
import { MorphPart } from "../../news/_c/Morph";
import type { Release } from "../../../_lib/news";

/*
 * What sits in a release's frame: the photo (default), the IO mark on a colour field, or a typographic
 * card. Shared by the feed cards and the release page, so both frames hold the same content. `vt` names
 * the title and mark for the card → page morph; `lg` is the release page's large frame.
 */
export function Face({ it, sizes, vt, lg, drift = true }: { it: Release; sizes: string; vt?: string; lg?: boolean; drift?: boolean }) {
  if (it.card?.style === "mark")
    return (
      <div className={r.face} data-face data-tone={it.card.tone} data-lg={lg ? "" : undefined}>
        {/* official mark, single-colour white */}
        <MorphPart name={vt && `${vt}-m`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/io-mark.svg" alt="" className={r.faceMark} />
        </MorphPart>
      </div>
    );
  if (it.card?.style === "type")
    return (
      <div className={r.face} data-face data-tone={it.card.tone} data-lg={lg ? "" : undefined}>
        <MorphPart name={vt && `${vt}-t`}>
          <p className={r.faceText}>
            <small>{it.category}</small>
            {it.card.text}
          </p>
        </MorphPart>
        {/* the small corner mark rides with the frame (on the release page it can sit below the fold, where
             it would not pair); the title flies on its own */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/io-mark.svg" alt="" className={r.faceMarkSm} />
      </div>
    );
  return (
    <div className={r.photo} data-drift={drift ? "" : undefined}>
      <Image src={it.src} alt={it.alt} fill sizes={sizes} />
    </div>
  );
}
