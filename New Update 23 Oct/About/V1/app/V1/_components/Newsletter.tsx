"use client";

import s from "../v1.module.css";
import { Arrow } from "./Brand";

// Same markup as before; submitting (Enter in the field) no longer reloads the page.
// Sign-up isn't wired to a list yet.
export function Newsletter() {
  return (
    <form className={s.newsletter} action="#" aria-label="Newsletter" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="Email address" aria-label="Email address" />
      <button type="button" className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`} aria-label="Subscribe">
        <Arrow />
      </button>
    </form>
  );
}
