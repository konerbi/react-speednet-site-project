import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Footer = () => {
	const location = useLocation();
	console.log(location.pathname);

	return (
		<footer className="footer" id="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<figure className="footer-logo">
							<img src="src/assets/images/SN_logo_white.svg"
							     alt="Speednet Sp. z o.o."/>
						</figure>
						<nav className="footer-menu">

							<ul className="menu">
								<li><Link rel="alternate" hrefLang="pl-PL" to="/" title="Home"
								       className={location.pathname === '/' ? 'active' : 'alternate'}>Home</Link></li>
								<li><Link rel="alternate" hrefLang="pl-PL" to="/o-nas/" title="O Nas"
								          className={location.pathname === '/o-nas/' ? 'active' : 'alternate'}>O Nas</Link></li>
								<li><Link rel="alternate" hrefLang="pl-PL" to="/portfolio/" title="Portfolio"
								          className={location.pathname === '/portfolio/' ? 'active' : 'alternate'}>Portfolio</Link></li>
								<li><Link rel="alternate" hrefLang="pl-PL" to="/praca/" title="Praca"
								          className={location.pathname === '/praca/' ? 'active' : 'alternate'}>Praca</Link></li>
								<li><Link rel="alternate" hrefLang="pl-PL" to="/blog/" title="Blog"
								          className={location.pathname === '/blog/' ? 'active' : 'alternate'}>Blog</Link>
								</li>
							</ul>


						</nav>
						<div className="contact-data">
							<a name="contact" href="mailto:info@speednet.pl" title="E-mail">info@speednet.pl</a>
							<a href="tel:+48586008383" title="+48 58 600 83 83">+48 58 600 83 83</a><br/><br/>
							<p className="copyrights">al. Zwycięstwa 96/98, 81-451 Gdynia, Poland<br/>NIP: 5862208698 | REGON: 22054053
								| KRS: 0000295602</p>
						</div>
						<ul className="social-box">
							<li><a href="https://clutch.co/profile/speednet" title="Clutch - B2B Ratings &amp; Reviews"
							       target="_blank"><i className="speednet-icons speednet-icons-clutch"></i></a></li>
							<li><a href="https://www.facebook.com/speednetpl" title="Facebook" data-title="Facebook"
							       target="_blank"><i className="speednet-icons speednet-icons-facebook"></i></a></li>
							<li><a href="https://www.linkedin.com/company/speednetpl" title="LinkedIn" data-title="LinkedIn"
							       target="_blank"><i className="speednet-icons speednet-icons-linkedin"></i></a></li>
							<li><a href="https://www.instagram.com/speednet.pl/" title="Instagram" data-title="Instagram"
							       target="_blank"><i className="speednet-icons speednet-icons-instagram"></i></a></li>
							<li><a href="https://twitter.com/speednetpl" title="Twitter" data-title="Twitter" target="_blank"><i
								className="speednet-icons speednet-icons-twitter"></i></a></li>
						</ul>
						<div className="copyrights">Speednet sp. z o.o. <span id="fYear">2021</span>. Wszelkie prawa zastrzeżone.
						</div>
					</div>
					<div className="col-md-5">
						<div className="contact-form-background">
							<img src="src/assets/images/footer_mobile_bg.svg"/>
						</div>
						<form id="contact-form" className="contact-form" data-parsley-validate="" noValidate="">
							<a href="mailto:sales@speednet.pl"><p className="email_adress">sales@speednet.pl</p></a>
							<p>Zostaw nam swój adres email, skontaktujemy się z Tobą w ciągu najbliższych 24h</p>
							<div className="form-field-box">
								<input id="footer-email" type="email" autoComplete="off" placeholder="twój@email.com"
								       className="form-field" data-parsley-required="" data-parsley-type="email"/>
									<button type="submit" title="Wyślij" className="btn-submit"><i className="speednet-icons-arrow-right"></i>
									</button>
									<p id="footer-form-notifications" className="m-0" data-gtm-vis-polling-id-33155468_17="127"></p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
