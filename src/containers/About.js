import React from 'react';
import PortfolioComponent from "../components/PortfolioComponent";
import {useTranslation} from "react-i18next";

const About = () => {
	const [t, i18n] = useTranslation('common');

	return (
		<div>
			<header className="header-intro-secondary">
				<div className="container">
					<h1>{t('aboutUs.header')}</h1>
					<p>{t('aboutUs.subHeader')}</p>
				</div>
				<img src="src/assets/images/bg/bg_section_top_about.jpg" className="header-background"/>
			</header>
			<section className="section section-intro">
				<div className="container">
					<div className="row">
						<div className="col-sm-10 col-sm-offset-1">
							<div className="row">
								<div className="col-md-5">
									<h3>{t('aboutUs.descriptionTitle')}</h3>
								</div>
								<div className="col-md-5 col-md-offset-1">
									<p>{t('aboutUs.description')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
