import React from 'react';
import {useTranslation} from "react-i18next";

const NotFound = () => {
	const [t, i18n] = useTranslation('common');

	return (
		<div>
			<header className="header-intro-secondary">
				<div className="container">
					<h1>{t('notFound.header')}</h1>
					<p>{t('notFound.subHeader')}</p>
				</div>
			</header>
		</div>
	);
};

export default NotFound;
