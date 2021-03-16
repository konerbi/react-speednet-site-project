import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const [isSticky, setCondition] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    position > 100 ? setCondition(true) : setCondition(false);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navigation ${isSticky ? "sticky" : ""}`}>
      <div className="navbar">
        <Link to="/" className="logo" title="Speednet Sp z o.o.">
          <svg
            viewBox="0 0 1067 115"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <path
                d="M0.748,6.4409 C0.748,3.3103 3.2867,0.7716 6.4173,0.7716 L17.7559,0.7716 C20.8865,0.7716 23.4252,3.3103 23.4252,6.4409 L23.4252,29.1181 C23.4252,32.2487 20.8865,34.7874 17.7559,34.7874 L6.4173,34.7874 C3.2867,34.7874 0.748,32.2487 0.748,29.1181 L0.748,6.4409 Z M0.748,85.811 C0.748,82.6804 3.2867,80.1417 6.4173,80.1417 L17.7559,80.1417 C20.8865,80.1417 23.4252,82.6804 23.4252,85.811 L23.4252,108.4882 C23.4252,111.6187 20.8865,114.1574 17.7559,114.1574 L6.4173,114.1574 C3.2867,114.1574 0.748,111.6187 0.748,108.4882 L0.748,85.811 Z M153.8192,80.142 C153.8192,98.9252 138.5866,114.1577 119.8034,114.1577 L51.7719,114.1577 C48.6414,114.1577 46.1026,111.619 46.1026,108.4884 L46.1026,97.1499 C46.1026,94.0193 48.6414,91.4806 51.7719,91.4806 L119.8034,91.4806 C126.0646,91.4806 131.142,86.4031 131.142,80.142 C131.142,73.8808 126.0646,68.8034 119.8034,68.8034 L74.4491,68.8034 C55.6659,68.8034 40.4334,53.5709 40.4334,34.7877 C40.4334,16.0044 55.6659,0.7719 74.4491,0.7719 L142.4806,0.7719 C145.6112,0.7719 148.1499,3.3106 148.1499,6.4412 L148.1499,17.7798 C148.1499,20.9104 145.6112,23.4491 142.4806,23.4491 L74.4491,23.4491 C68.1879,23.4491 63.1105,28.5265 63.1105,34.7877 C63.1105,41.0488 68.1879,46.1262 74.4491,46.1262 L119.8034,46.1262 C138.5866,46.1262 153.8192,61.3588 153.8192,80.142 Z M193.5039,91.4803 L193.5039,108.4882 C193.5039,111.6187 190.9652,114.1574 187.8346,114.1574 L176.4961,114.1574 C173.3655,114.1574 170.8268,111.6187 170.8268,108.4882 L170.8268,6.4409 C170.8268,3.3103 173.3655,0.7716 176.4961,0.7716 L250.1971,0.7719 C268.9803,0.7719 284.2129,16.0044 284.2129,34.7877 L284.2129,57.4648 C284.2129,76.248 268.9803,91.4806 250.1971,91.4806 L193.5039,91.4803 Z M193.5042,68.8034 L250.1971,68.8034 C256.4583,68.8034 261.5357,63.726 261.5357,57.4648 L261.5357,34.7877 C261.5357,28.5265 256.4583,23.4491 250.1971,23.4491 L193.5042,23.4491 L193.5042,68.8034 Z M323.8976,68.8031 L323.8979,80.142 C323.8979,86.4031 328.9753,91.4806 335.2365,91.4806 L408.9373,91.4806 C412.0679,91.4806 414.6066,94.0193 414.6066,97.1499 L414.6066,108.4884 C414.6066,111.619 412.0679,114.1577 408.9373,114.1577 L335.2365,114.1577 C316.4533,114.1577 301.2208,98.9252 301.2208,80.142 L301.2208,34.7877 C301.2208,16.0044 316.4533,0.7719 335.2365,0.7719 L408.9373,0.7719 C412.0679,0.7719 414.6066,3.3106 414.6066,6.4412 L414.6066,17.7798 C414.6066,20.9104 412.0679,23.4491 408.9373,23.4491 L335.2365,23.4491 C328.9753,23.4491 323.8979,28.5265 323.8979,34.7877 L323.8976,46.126 L386.2598,46.126 C389.3904,46.126 391.9291,48.6647 391.9291,51.7952 L391.9291,63.1338 C391.9291,66.2644 389.3904,68.8031 386.2598,68.8031 L323.8976,68.8031 Z M454.2913,68.8031 L454.2916,80.142 C454.2916,86.4031 459.369,91.4806 465.6302,91.4806 L539.331,91.4806 C542.4616,91.4806 545.0003,94.0193 545.0003,97.1499 L545.0003,108.4884 C545.0003,111.619 542.4616,114.1577 539.331,114.1577 L465.6302,114.1577 C446.847,114.1577 431.6145,98.9252 431.6145,80.142 L431.6145,34.7877 C431.6145,16.0044 446.847,0.7719 465.6302,0.7719 L539.331,0.7719 C542.4616,0.7719 545.0003,3.3106 545.0003,6.4412 L545.0003,17.7798 C545.0003,20.9104 542.4616,23.4491 539.331,23.4491 L465.6302,23.4491 C459.369,23.4491 454.2916,28.5265 454.2916,34.7877 L454.2913,46.126 L516.6535,46.126 C519.7841,46.126 522.3228,48.6647 522.3228,51.7952 L522.3228,63.1338 C522.3228,66.2644 519.7841,68.8031 516.6535,68.8031 L454.2913,68.8031 Z M562.0082,6.4412 C562.0082,3.3106 564.5469,0.7719 567.6774,0.7719 L641.3782,0.7719 C660.1614,0.7719 675.394,16.0044 675.394,34.7877 L675.394,80.142 C675.394,98.9252 660.1614,114.1577 641.3782,114.1577 L567.6774,114.1577 C564.5469,114.1577 562.0082,111.619 562.0082,108.4884 L562.0082,6.4412 Z M584.685,91.4806 L641.3782,91.4806 C647.6394,91.4806 652.7168,86.4031 652.7168,80.142 L652.7168,34.7877 C652.7168,28.5265 647.6394,23.4491 641.3782,23.4491 L584.685,23.4488 L584.685,91.4806 Z M1060.9055,0.7716 C1064.0361,0.7716 1066.5748,3.3103 1066.5748,6.4409 L1066.5748,17.7795 C1066.5748,20.9101 1064.0361,23.4488 1060.9055,23.4488 L1021.2205,23.4488 L1021.2205,108.4882 C1021.2205,111.6187 1018.6818,114.1574 1015.5512,114.1574 L1004.2126,114.1574 C1001.082,114.1574 998.5433,111.6187 998.5433,108.4882 L998.5433,23.4488 L958.8583,23.4488 C955.7277,23.4488 953.189,20.9101 953.189,17.7795 L953.189,6.4409 C953.189,3.3103 955.7277,0.7716 958.8583,0.7716 L1060.9055,0.7716 Z M784.7702,112.4972 L715.0787,37.516 L715.0787,108.4882 C715.0787,111.6187 712.54,114.1574 709.4094,114.1574 L698.0709,114.1574 C694.9403,114.1574 692.4016,111.6187 692.4016,108.4882 L692.4016,6.4409 C692.4016,3.3103 694.9403,0.7716 698.0709,0.7716 L709.4094,0.7716 C710.9127,0.7716 712.3558,1.3694 713.4182,2.4319 L783.11,77.4128 L783.1102,6.4409 C783.1102,3.3103 785.6489,0.7716 788.7795,0.7716 L800.1181,0.7716 C803.2487,0.7716 805.7874,3.3103 805.7874,6.4409 L805.7874,108.4882 C805.7874,111.6187 803.2487,114.1574 800.1181,114.1574 L788.7795,114.1574 C787.276,114.1574 785.8326,113.5596 784.7702,112.4972 Z M845.4724,68.8031 L845.4727,80.142 C845.4727,86.4031 850.5501,91.4806 856.8113,91.4806 L930.5121,91.4806 C933.6427,91.4806 936.1814,94.0193 936.1814,97.1499 L936.1814,108.4884 C936.1814,111.619 933.6427,114.1577 930.5121,114.1577 L856.8113,114.1577 C838.0281,114.1577 822.7956,98.9252 822.7956,80.142 L822.7956,34.7877 C822.7956,16.0044 838.0281,0.7719 856.8113,0.7719 L930.5121,0.7719 C933.6427,0.7719 936.1814,3.3106 936.1814,6.4412 L936.1814,17.7798 C936.1814,20.9104 933.6427,23.4491 930.5121,23.4491 L856.8113,23.4491 C850.5501,23.4491 845.4727,28.5265 845.4727,34.7877 L845.4724,46.126 L907.8346,46.126 C910.9652,46.126 913.5039,48.6647 913.5039,51.7952 L913.5039,63.1338 C913.5039,66.2644 910.9652,68.8031 907.8346,68.8031 L845.4724,68.8031 Z"
                id="SN-Logo-Black"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </Link>

        <div id="main-menu" className="main-menu">
          <ul className="menu ">
            <li className="item">
              <NavLink
                to="/o-nas"
                activeClassName="navbar-element-active"
                title="O nas"
                className="link"
              >
                O nas
              </NavLink>
            </li>
            <li className="item">
              <NavLink
                to="/portfolio"
                activeClassName="navbar-element-active"
                title="Portfolio"
                className="link"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="item">
              <NavLink
                to="/praca"
                activeClassName="navbar-element-active"
                title="Praca"
                className="link"
              >
                Praca
              </NavLink>
            </li>
            <li className="item">
              <div
                id="contact-us-button"
                title="Kontakt"
                className="link link-special-2"
              >
                Kontakt
              </div>
            </li>
            <li className="item">
              <NavLink
                to="/blog"
                activeClassName="navbar-element-active"
                title="Blog"
                className="link"
              >
                Blog
              </NavLink>
            </li>
            <li className="item language">
              <LanguageToggle></LanguageToggle>
              {/*<a href="javascript:void(0);" title="" className="link">*/}
              {/*  Pl <i className="ico-chevron-down"></i>*/}
              {/*</a>*/}
              {/*<ul className="languages-list">*/}
              {/*  <li>*/}
              {/*    <a href="javascript:void(0);" title="" className="active">*/}
              {/*      Pl <i className="ico-chevron-down"></i>*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <a rel="alternate" hrefLang="x-default" href="/en" title="">*/}
              {/*      En*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
