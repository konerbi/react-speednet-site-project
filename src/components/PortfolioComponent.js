import React from "react";
import {Link} from "react-router-dom";
import CreateTextHtml from "./CreateTextHTML";
import {useTranslation} from "react-i18next";

const PortfolioComponent = () => {
	const [t, i18n] = useTranslation('common');
	const portfolioElements = [
		{
			title: 'businessCases.elements.popPankki.title',
			text: 'businessCases.elements.popPankki.text',
			imgSrc: 'src/assets/images/uploads/logo-pop-pankki-darkbg.png',
			link: '/projects/pop-pankki-pl/'
		},
		{
			title: 'businessCases.elements.pzu.title',
			text: 'businessCases.elements.pzu.text',
			imgSrc: 'src/assets/images/uploads/logo-pzu-cash-dark-bg.png',
			link: '/projects/pzu-cash-pl/'
		},
		{
			title: 'businessCases.elements.telia.title',
			text: 'businessCases.elements.telia.text',
			imgSrc: 'src/assets/images/uploads/logo-telia-company-dark-bg.png',
			link: '/projects/telia-company-pl/'
		},
		{
			title: 'businessCases.elements.saar.title',
			text: 'businessCases.elements.saar.text',
			imgSrc: 'src/assets/images/uploads/logo-saar-lb-dark-bg.png',
			link: '/projects/saar-landesbank-pl/'
		}
	];

	return <ul className="portfolio-list">
		{portfolioElements.map((value, index) => {
			return <li key={'portfolio-item' + index} className="portfolio-item">
				<Link to={value.link} title={t(value.title)} className="portfolio">
					<figure>
						<img src={value.imgSrc} alt=""/>
						<span className="badge-secondary">{t('buttons.seeButton')}</span>
					</figure>
					<div className="description">
						<h4>{t(value.title)}</h4>
						<p dangerouslySetInnerHTML={CreateTextHtml(t(value.text))}></p>
					</div>
				</Link>
			</li>
		})}
	</ul>;
}

export default PortfolioComponent;
