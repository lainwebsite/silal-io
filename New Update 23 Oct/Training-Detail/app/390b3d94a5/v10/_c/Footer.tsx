import s from "../shell.module.css";
import { nav } from "../_lib/site";

/* The new homepage's footer (branch 23-oct/new-homepage): newsletter, Explore, Resources (Content Library, FAQs),
   Connect, the cropped mark with its blue rule, wordmark, io-silal.ae and the bilingual address. */
const WM = "/new-homepage/brand/io-wordmark-endorsed.svg";
const MARK = "/new-homepage/brand/io-mark.svg";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`${s.wrap} ${s.footerGrid}`}>
        <div className={s.footerCols}>
          <div className={s.footerNews}>
            <h4>Stay close to the work</h4>
            <p>Research, programmes and calls for innovators, a few times a year.</p>
            <form className={s.newsletter} aria-label="Newsletter" action="#">
              <input type="email" id="nlEmail" placeholder="Email address" aria-label="Email address" />
              <button type="button" className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`} aria-label="Subscribe">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {nav.map((g) => (
                <li key={g.label}>
                  <a href="#">{g.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Content Library</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
            <h4 style={{ marginTop: 32 }}>Connect</h4>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Enquire</a>
              </li>
              <li>
                <a href="#">
                  LinkedIn
                  <svg className={s.extIcon} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <rect width="16" height="16" rx="2" fill="#7f8284" />
                    <path d="M5 11l6-6M6.5 5H11v4.5" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.footerBrand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.footerMark} src={MARK} alt="" height={150} width={203} />
          <div className={s.footerRule} aria-hidden="true" />
          <div className={s.footerId}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={WM} alt="Innovation Oasis — Part of Silal" width={240} height={109} />
            <a href="#" className={s.footerUrl}>
              io-silal.ae
            </a>
            <address>
              <span lang="ar">واحة الابتكار – سلال، العين، الإمارات العربية المتحدة</span>
              <br />
              Innovation Oasis – Silal, Al Ain, UAE
            </address>
          </div>
        </div>
      </div>
      <div className={`${s.wrap} ${s.footerBottom}`}>
        <span>© 2026 Silal. All rights reserved.</span>
        <nav aria-label="Legal">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
