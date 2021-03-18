import React from 'react';

function Cookie(props) {
	return (
		<div id="cookies" className="cookies show">
			<div className="cookies-inner">
				<h3>W celu poprawy jakości naszych usług używamy ciasteczek.</h3>
				<p className="title">Możesz je zablokować poprzez zmianę ustawień przeglądarki.</p>
				<button id="cookies-close" className="close"><i className="speednet-icons-cross"></i></button>
			</div>
		</div>
	);
}

export default Cookie;
