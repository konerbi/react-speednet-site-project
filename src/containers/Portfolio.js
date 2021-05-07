import React from 'react';
import PortfolioComponent from "../components/PortfolioComponent";
import {useTranslation} from "react-i18next";

const Portfolio = () => {
	const [t, i18n] = useTranslation('common');

	return (
		<div>
			<header className="header-intro-optional portfolio-header">
				<div className="container">
					<h1>{t('businessCases.header')}</h1>
				</div>
			</header>
			<section className="section no-padd-top">
				<div className="container">
					<PortfolioComponent/>
				</div>
			</section>
		</div>
	);
};

export default Portfolio;
