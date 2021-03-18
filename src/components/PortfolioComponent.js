import React from "react";
import {Link} from "react-router-dom";
import CreateTextHtml from "./CreateTextHTML";

const PortfolioComponent = () => {
	const portfolioElements = [
		{
			title: 'Pop Pankki',
			text: 'Aplikacja mobilna integrująca usługi bankowe i ubezpieczeniowe 26 banków w Finlandii.',
			imgSrc: 'src/assets/images/uploads/logo-pop-pankki-darkbg.png',
			link: '/projekty/pop-pankki-pl/'
		},
		{
			title: 'PZU Cash',
			text: 'System internetowy do przydzielania pracownikom pożyczek gotówkowych. Potrafi generować pożyczki w czasie rzeczywistym.',
			imgSrc: 'src/assets/images/uploads/logo-pzu-cash-dark-bg.png',
			link: '/projekty/pzu-cash-pl/'
		},
		{
			title: 'Telia Company',
			text: 'Platforma biznesowa do zarządzania kontami e-mail, udostępniania kontaktów, notatek i powiadomień wszystkim członkom firmy.',
			imgSrc: 'src/assets/images/uploads/logo-telia-company-dark-bg.png',
			link: '/projekty/telia-company-pl/'
		},
		{
			title: 'SAAR Landesbank',
			text: 'Całościowy proces digital transformation dla francusko-niemieckiego banku regionalnego.',
			imgSrc: 'src/assets/images/uploads/logo-saar-lb-dark-bg.png',
			link: '/projekty/saar-landesbank-pl/'
		}
	];

	return <ul className="portfolio-list">
		{portfolioElements.map((value, index) => {
			return <li key={'portfolio-item' + index} className="portfolio-item">
				<Link to={value.link} title={value.title} className="portfolio">
					<figure>
						<img src={value.imgSrc} alt=""/>
						<span className="badge-secondary">Zobacz</span>
					</figure>
					<div className="description">
						<h4>{value.title}</h4>
						<p dangerouslySetInnerHTML={CreateTextHtml(value.text)}></p>
					</div>
				</Link>
			</li>
		})}
	</ul>;
}

export default PortfolioComponent;
