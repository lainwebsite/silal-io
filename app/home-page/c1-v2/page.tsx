import type { CSSProperties } from "react";
import { Inter } from "next/font/google";
import s from "./c1.module.css";
import { Symbols } from "./Symbols";
import { Story } from "./Story";
import { CHAPTERS } from "./chapters";

// Figma Concept 1 is set in Inter only (docs/home-page/c1-design-spec.md). Brand type (29LT Bukra / Readex Pro stand-in)
// is not used on this concept; swap the font here only.
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-c1", display: "swap" });

// Design-space coordinates from Figma (1440 x 870 frame); the stylesheet multiplies them by the stage scale.
const at = (v: Record<string, number>) => v as unknown as CSSProperties;
const glassVar = (gf: number, gb: number) => ({ "--gf": gf, "--gb": gb }) as unknown as CSSProperties;

const IMG = (k: string, crop?: string) => <div className="im" data-img={k} data-crop={crop} />;

export default function HomePageC1() {
  return (
    <div className={`${s.root} ${inter.variable}`} id="c1">
      <Symbols />

      <main className="story" id="story">
        <div className="stage" id="stage">
          <div className="base" id="base" />

          {/* scene backgrounds: each is a Figma fill stack (image crop + black / gradient scrims) */}
          <div className="bg" id="bgE1">{IMG("2c9732cc", ".9,.05,.97,0")}<div className="ov" style={{ background: "rgba(0,0,0,.2)" }} /></div>
          <div className="bg" id="bgE2">{IMG("f502e814")}<div className="ov" style={{ background: "rgba(0,0,0,.2)" }} /></div>
          <div className="bg" id="bgAer">{IMG("e95e0b67")}<div className="ov" style={{ background: "rgba(0,0,0,.2)" }} /></div>
          <div className="bg" id="bgDes">{IMG("0ba94745")}<div className="ov" style={{ background: "rgba(0,0,0,.2)" }} /></div>
          <div className="bg" id="bgFarm">{IMG("b1788c81", ".73,0,.79,.21")}<div className="ov" style={{ background: "rgba(0,0,0,.4)" }} /><div className="ov" style={{ background: "linear-gradient(90deg,rgba(15,15,15,0),rgba(15,15,15,.6))" }} /></div>
          <div className="bg glow" id="glowA">{IMG("b1788c81", ".73,0,.79,.21")}<div className="ov" style={{ background: "rgba(15,15,15,.72)" }} /></div>
          <div className="bg" id="bgLab">{IMG("0c5a04bd", ".57,0,.52,.31")}<div className="ov" style={{ background: "rgba(0,0,0,.4)" }} /><div className="ov" style={{ background: "linear-gradient(180deg,rgba(15,15,15,.65),#0f0f0f)" }} /><div className="ov" style={{ background: "linear-gradient(180deg,rgba(15,15,15,0),#0f0f0f)" }} /></div>
          <div className="bg glow" id="glowB">{IMG("c67af94c", "1,0,.42,.34")}<div className="ov" style={{ background: "rgba(15,15,15,.4)" }} /></div>
          <div className="bg glow" id="glowC">{IMG("132f755b")}<div className="ov" style={{ background: "rgba(15,15,15,.4)" }} /></div>
          <div className="bg glow" id="glowD">{IMG("977c9001")}<div className="ov" style={{ background: "rgba(15,15,15,.4)" }} /></div>
          <div className="bg" id="bgField">{IMG("bf471039", ".83,.11,.67,.33")}<div className="ov" style={{ background: "rgba(0,0,0,.6)" }} /><div className="ov" style={{ background: "linear-gradient(90deg,rgba(15,15,15,0),rgba(15,15,15,.6))" }} /></div>
          <div className="bg" id="bgB1">{IMG("90abeb8f", ".49,.44,.44,.25")}<div className="ov" style={{ background: "rgba(0,0,0,.5)" }} /></div>
          <div className="bg" id="bgB2">{IMG("90abeb8f", ".9,.03,.81,.06")}<div className="ov" style={{ background: "rgba(0,0,0,.6)" }} /></div>
          <div className="bg" id="bgR70">{IMG("70840e80", "1,0,.45,.37")}<div className="ov" style={{ background: "rgba(0,0,0,.4)" }} /></div>
          <div className="bg" id="bgR06">{IMG("06f2951c", ".88,.06,.95,0")}<div className="ov" style={{ background: "rgba(0,0,0,.4)" }} /></div>
          <div className="bg glow" id="glowE">{IMG("0ba94745")}<div className="ov" style={{ background: "rgba(15,15,15,.4)" }} /></div>

          {/* shared element: centre card to drone frame to full bleed */}
          <div className="drone" id="drone">{IMG("bf471039", "1,0,.83,.14")}<div className="ov" /></div>

          {/* design frame */}
          <div className="frame" id="frame">
            <h1 className="a full t-hero" id="hero" style={at({ "--y": 399 })}>Step into the Oasis</h1>

            <div className="a w copy" id="intro" style={at({ "--x": 285, "--y": 610, "--w": 593 })}>
              <h2 className="t-lead">Why Al Foah?</h2>
              <p className="t-body">A living research ground in the heart of the desert. Explore the farms, laboratories and people turning Al Foah&apos;s harshest conditions into the UAE&apos;s food future – the same way you would if you walked in.</p>
            </div>

            <div className="a" id="stats" style={at({ "--x": 285, "--y": 522 })}>
              <div className="stat">
                <p className="lab t-lab"><b>Site</b>Al Foah Farms&nbsp; ⋅ &nbsp;Al Ain</p>
                <i className="hr" />
                <p className="num t-stat" id="num1">34 ha</p>
              </div>
              <div className="stat">
                <p className="lab t-lab"><b>Environmental fronts</b>Heat&nbsp; ⋅ &nbsp;Water&nbsp; ⋅ &nbsp;Soil&nbsp; ⋅ &nbsp;Energy</p>
                <i className="hr" />
                <p className="num t-stat" id="num2">04</p>
              </div>
            </div>

            <p className="a full t-state" id="statement" style={at({ "--y": 417 })}>Every structure here answers a question the desert asked.</p>
            <p className="a full t-s12" id="capLab" style={at({ "--y": 28 })}>Every structure here answers a question the desert asked.</p>

            <div className="vc">
              <div className={`labcard glass`} id="labcard" style={glassVar(0.04, 30)}>
                <div className="row" data-r="0"><div className="media"><div className="im thumb" data-img="8e44e3b2" /></div><div className="txt"><span className="t-eye">heat</span><span className="t-18">Growth Chambers</span></div></div>
                <i className="hair sep" />
                <div className="row" data-r="1"><div className="media"><div className="im thumb" data-img="0c5a04bd" data-crop=".35,0,.52,.3" /><div className="im big" data-img="0c5a04bd" data-crop=".5,.01,.46,.32" /></div><div className="txt"><span className="t-eye">water</span><span className="t-18">Soil &amp; Water Lab</span></div></div>
                <i className="hair sep" />
                <div className="row" data-r="2"><div className="media"><div className="im thumb" data-img="3e723371" data-crop=".67,.3,1,0" /></div><div className="txt"><span className="t-eye">soil</span><span className="t-18">Crop Health Lab</span></div></div>
                <i className="hair sep" />
                <div className="row" data-r="3"><div className="media"><div className="im thumb" data-img="bed5d79a" data-crop=".51,.04,.76,.12" /></div><div className="txt"><span className="t-eye">energy</span><span className="t-18">Mobile Crop-Health Lab</span></div></div>
              </div>
            </div>

            <h2 className="a full t-title" id="rootTitle" style={at({ "--y": 410 })}>Where innovation takes root.</h2>
            <div className="a full hdr" id="hdrRoot" style={at({ "--y": 28 })}><h3 className="t-h12">Where innovation takes root.</h3></div>
            <p className="a sub w t-s12" id="rootSub" style={at({ "--x": 577, "--y": 57, "--w": 285 })}>Specialised centres developing practical solutions for the future of agriculture.</p>

            <div className="trio" id="trio">
              <div className="tcard" data-c="0"><div className="face">{IMG("c67af94c", "1,0,.42,.34")}</div>
                <div className="cap"><p className="t-14 m">Agri Robotics &amp; AI</p><p className="t-14">Smarter automation for more efficient farming.</p></div></div>
              <div className="tcard" data-c="1"><div className="face">{IMG("132f755b")}</div>
                <div className="cap"><p className="t-14 m">Smart Growing Systems</p><p className="t-14">Optimising greenhouse production in harsh climates.</p></div></div>
              <div className="tcard" data-c="2"><div className="face">{IMG("80510502")}</div>
                <div className="cap"><p className="t-14 m">Crop Resilience</p><p className="t-14">Developing crops resilient to heat and drought.</p></div></div>
              <i className="ring" id="ring" />
            </div>

            <div className="a w copy" id="fieldCopy" style={at({ "--x": 285, "--y": 529, "--w": 669 })}>
              <h2 className="t-lead">Technology that starts in the field.</h2>
              <p className="t-body">From smart sensing to advanced analytics, our technologies help growers monitor conditions, improve efficiency and make better decisions in real time.</p>
              <a className="btn cta" href="#technology">Explore Technology &amp; Services</a>
            </div>

            <h2 className="a full t-title" id="venTitle" style={at({ "--y": 410 })}>Innovation &amp; Venture Platforms</h2>
            <div className="a full hdr" id="hdrVen" style={at({ "--y": 28 })}><h3 className="t-h12">Innovation &amp; Venture Platforms</h3></div>
            <p className="a sub w t-s12" id="venSub" style={at({ "--x": 490, "--y": 57, "--w": 459 })}>Supporting the next generation of agricultural innovation through funding, incubation, acceleration and challenge-driven programs.</p>
            <div className="tiles" id="tiles">
              <div className="tile on"><div className="box glass">{IMG("050b0100")}</div><p className="l">Farm Innovation Fund</p></div>
              <div className="tile"><div className="box glass">{IMG("e5f0025f")}</div><p className="l">Incubation</p></div>
              <div className="tile"><div className="box glass">{IMG("1c4d7b58")}</div><p className="l">Accelerator</p></div>
              <div className="tile"><div className="box glass">{IMG("e66cc018")}</div><p className="l">Agricultural Challenges</p></div>
            </div>
            <p className="a full" id="venBtn" style={at({ "--y": 701 })}><a className="btn" href="#team">Meet the team</a></p>

            <h2 className="a full t-title" id="engTitle" style={at({ "--y": 410 })}>One Oasis. Three ways in.</h2>
            <div className="a full hdr" id="hdrEng" style={at({ "--y": 28 })}><h3 className="t-h12">One Oasis. Three ways in.</h3></div>
            <div className="eng" id="eng">
              <a className="ecard glass" href="#farmers"><span className="t-eye">For farmers</span><span className="t-21">Grow with us</span><i className="hair" /><span className="go">Apply for funding</span></a>
              <a className="ecard glass" href="#government"><span className="t-eye">For government</span><span className="t-21">Built by the desert</span><i className="hair" /><span className="go">Explore the research</span></a>
              <a className="ecard glass" href="#robotics"><span className="t-eye">For robotics</span><span className="t-21">The future is built here</span><i className="hair" /><span className="go">Apply for funding</span></a>
            </div>

            <div className="a full hdr" id="hdrTal" style={at({ "--y": 28 })}><h3 className="t-h12">Building agricultural talent.</h3></div>
            <p className="a sub w t-s12" id="talSub" style={at({ "--x": 495, "--y": 57, "--w": 449 })}>Supporting future researchers, entrepreneurs and industry leaders through practical learning and development opportunities.</p>
            <div className="list glass" id="list" style={glassVar(0.04, 30)}>
              <div className="li" data-i="0"><span className="n">01</span><span className="t-18">Advanced Agritech Academy</span></div><i className="hair sep" />
              <div className="li" data-i="1"><span className="n">02</span><span className="t-18">Student Sponsorship</span></div><i className="hair sep" />
              <div className="li" data-i="2"><span className="n">03</span><span className="t-18">School Programs</span></div><i className="hair sep" />
              <div className="li" data-i="3"><span className="n">04</span><span className="t-18">IO Academy Training</span></div>
            </div>

            <div className="a full hdr" id="hdrTour" style={at({ "--y": 28 })}><h3 className="t-h12">Walk through the Oasis, wherever you are.</h3></div>
            <p className="a sub w t-s12" id="tourSub" style={at({ "--x": 518, "--y": 57, "--w": 403 })}>Take the interactive virtual tour of our farms, laboratories, greenhouses and meeting spaces – no visit required.</p>
            <div className="tour" id="tour"><i className="ringb" /><div className="face">{IMG("4bf8fa0b", ".82,.17,.84,.08")}</div></div>
            <p className="a full" id="tourBtn" style={at({ "--y": 589 })}><a className="btn" href="#tour-launch">Launch Virtual Tour</a></p>

            <svg className="cursor" id="cursor" viewBox="0 0 24 27" aria-hidden="true"><use href="#cur" /></svg>
          </div>

          {/* persistent chrome */}
          <div className="chrome">
            <i className="rail" /><i className="mark" id="mark" />
            <ul className="nav" id="nav" aria-label="Story chapters">
              {CHAPTERS.map((c, i) => <li key={c}><a href="#" data-i={i}>{c}</a></li>)}
            </ul>
            <div className="topbar">
              <a className="pill glass" href="#" aria-label="Innovation Oasis, back to top" id="home"><svg><use href="#logo" /></svg></a>
              <button className="menuBtn glass" id="menuBtn" aria-label="Menu" aria-expanded="false" aria-controls="menu"><i /><i /><i /></button>
            </div>
            <p className="hint" id="hint">Scroll</p>
            <div className="ladder" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
        </div>
      </main>

      <footer className="foot" id="footer">
        <div className="bigs">
          <a className="big" href="#research">Research</a>
          <a className="big" href="#programmes">Programmes</a>
          <a className="big" href="#community">Community</a>
          <a className="big" href="#contact">Contact</a>
        </div>
        <div className="row2">
          <p className="blurb">A strategic enabler of the UAE&apos;s vision – transforming national priorities into tangible innovation outcomes across agriculture and food systems.</p>
          <nav className="col" id="colA" aria-label="Footer: programmes"><a href="#research">Research</a><a href="#talent">Talent &amp; Training</a><a href="#centres">Centres of Excellence</a></nav>
          <nav className="col" id="colB" aria-label="Footer: community"><a href="#entrepreneurs">Entrepreneurs</a><a href="#companies">Companies</a><a href="#investors">Investors</a></nav>
        </div>
        <div className="bar"><span>Innovation Oasis — Silal, Al Ain, UAE</span><span>Part of Silal</span></div>
      </footer>

      <div className="menu" id="menu" aria-hidden="true">
        <ul id="menuList">
          {CHAPTERS.map((c, i) => <li key={c}><a href="#" data-i={i}>{c}</a></li>)}
        </ul>
      </div>

      <Story />
    </div>
  );
}
