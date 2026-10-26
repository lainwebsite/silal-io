"use client";

import { useState } from "react";
import n from "../../../pages.module.css";
import a from "../academy.module.css";
import s from "../../../shell.module.css";

/*
 * Request information (sitemap: Enquiry Form → Form Confirmation). No back end yet: submitting shows the
 * confirmation state in place. Wire to the shared enquiry service when it exists.
 */
export function RequestForm({ course }: { course: string }) {
  const [sent, setSent] = useState(false);

  if (sent)
    return (
      <div className={a.thanks} role="status">
        <h3>Thank you.</h3>
        <p className={n.body}>The IO Academy team will reply with dates, fees and the next intake for “{course}”.</p>
      </div>
    );

  return (
    <form
      className={a.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className={a.field}>
        <span>First name</span>
        <input name="first" required autoComplete="given-name" />
      </label>
      <label className={a.field}>
        <span>Last name</span>
        <input name="last" required autoComplete="family-name" />
      </label>
      <label className={a.field}>
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label className={a.field}>
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label className={a.field}>
        <span>Organisation</span>
        <input name="org" autoComplete="organization" />
      </label>
      <label className={a.field}>
        <span>Current role</span>
        <input name="role" />
      </label>
      <label className={`${a.field} ${a.wide}`}>
        <span>How can we help?</span>
        <textarea name="note" placeholder="Your experience, your crop or system, and what you want to learn." />
      </label>
      <label className={a.consent}>
        <input type="checkbox" required />
        <span>I agree that Innovation Oasis may contact me about this course.</span>
      </label>
      <div className={a.formEnd}>
        <button type="submit" className={`${s.btn} ${s.btnPrimary}`}>
          Request information
        </button>
      </div>
    </form>
  );
}
