import React from 'react';
import {useCookies} from "react-cookie";
import {useTranslation} from "react-i18next";

function Cookie(props) {
	const [t, i18n] = useTranslation('common');
	const [cookies, setCookie] = useCookies(['hideCookieInfo']);

	function handleCookie() {
		setCookie('hideCookieInfo', '1');
	}

	return (
		<div id="cookies" className={`cookies ${cookies['hideCookieInfo'] !== '1' ? 'show' : ''}`}>
			<div className="cookies-inner">
				<h3>{t('cookies.header')}</h3>
				<p className="title">{t('cookies.description')}</p>
				<button id="cookies-close" className="close" onClick={handleCookie}><i className="speednet-icons-cross"></i></button>
			</div>
		</div>
	);
}

export default Cookie;
