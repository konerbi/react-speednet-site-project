import React from 'react';
import {useCookies} from "react-cookie";

function Cookie(props) {
	const [cookies, setCookie] = useCookies(['hideCookieInfo']);

	function handleCookie() {
		setCookie('hideCookieInfo', '1');
	}

	return (
		<div id="cookies" className={`cookies ${cookies['hideCookieInfo'] !== '1' ? 'show' : ''}`}>
			<div className="cookies-inner">
				<h3>W celu poprawy jakości naszych usług używamy ciasteczek.</h3>
				<p className="title">Możesz je zablokować poprzez zmianę ustawień przeglądarki.</p>
				<button id="cookies-close" className="close" onClick={handleCookie}><i className="speednet-icons-cross"></i></button>
			</div>
		</div>
	);
}

export default Cookie;
