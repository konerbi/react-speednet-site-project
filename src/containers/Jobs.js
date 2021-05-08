import React from 'react';
import {useTranslation} from "react-i18next";

const Jobs = () => {
	const [t, i18n] = useTranslation('common');

	return (
		<div>
			<header className="header-intro-secondary">
				<div className="container">
					<h1>{t('jobs.header')}</h1>
					<p>{t('jobs.subHeader')}</p>
				</div>
				<img src="src/assets/images/bg/bg_section_top_career.jpg" className="header-background"/>
			</header>
			<section className="section section-intro no-padd-bottom">
				<div className="container">
					<div className="col-sm-10 col-sm-offset-1">
						<h3></h3>
						<h3>{t('jobs.description_1')}</h3>
						<p>&nbsp;</p>
						<h3>{t('jobs.description_2')}</h3>
						<p>&nbsp;</p>
						<h3>{t('jobs.description_3')}
							<a title="" href="mailto:praca@speednet.pl">praca@speednet.pl</a>.
						</h3>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Jobs;
