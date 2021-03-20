import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Footer = () => {
	const location = useLocation();
	const menuItems = [
		{
			title: 'Home',
			pathname: '/'
		},
		{
			title: 'O Nas',
			pathname: '/about-us/'
		},
		{
			title: 'Portfolio',
			pathname: '/portfolio/'
		},
		{
			title: 'Praca',
			pathname: '/jobs/'
		},
		{
			title: 'Blog',
			pathname: '/blog/'
		}
	];
	const socialItems = [
		{
			title: 'Clutch - B2B Ratings &amp; Reviews',
			href: 'https://clutch.co/profile/speednet',
			icon: 'speednet-icons-clutch'
		},
		{
			title: 'Facebook',
			href: 'https://www.facebook.com/speednetpl',
			icon: 'speednet-icons-facebook'
		},
		{
			title: 'LinkedIn',
			href: 'https://www.linkedin.com/company/speednetpl',
			icon: 'speednet-icons-linkedin'
		},
		{
			title: 'Instagram',
			href: 'https://www.instagram.com/speednet.pl/',
			icon: 'speednet-icons-instagram'
		},
		{
			title: 'Twitter',
			href: 'https://twitter.com/speednetpl',
			icon: 'speednet-icons-twitter'
		}
	];
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
								{menuItems.map(((value, index) => {
									return <li key={'menuItem-' + index}><Link to={value.pathname} title={value.title}
									                 className={location.pathname === value.pathname ? 'active' : 'alternate'}>
										{value.title}</Link></li>
								}))}
							</ul>
						</nav>
						<div className="contact-data">
							<a name="contact" href="mailto:info@speednet.pl" title="E-mail">info@speednet.pl</a>
							<a href="tel:+48586008383" title="+48 58 600 83 83">+48 58 600 83 83</a><br/><br/>
							<p className="copyrights">al. Zwycięstwa 96/98, 81-451 Gdynia, Poland<br/>NIP: 5862208698 | REGON: 22054053
								| KRS: 0000295602</p>
						</div>
						<ul className="social-box">
							{socialItems.map(((value, index) => {
								return <li key={'socialItem-' + index}><a href={value.href} title={value.title}
								              target="_blank"><i className={value.icon}></i></a></li>
							}))}
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
