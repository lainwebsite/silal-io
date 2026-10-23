// Shape of the sitemap data each route group passes to the shared shell (its own `_lib/site.ts` `nav`).
export type ShellSub = { label: string; href: string; external?: boolean };
export type ShellCategory = {
  key: string;
  n: string;
  label: string;
  href: string;
  img: string;
  blurb: string;
  subs: ShellSub[];
};
