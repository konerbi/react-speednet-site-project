import React, {useEffect, useState} from 'react';

const LanguageToggle = () => {
	const [currentLanguage, setCurrentLanguage] = useState('pl');
	const [alternateLanguage, setAlternateLanguage] = useState('en');
	const [showList, setShowList] = useState(false);

	useEffect( () => {
		setCurrentLanguage('pl');
	}, [])

	function handleToggle(value = true) {
		setShowList(value);
	}

	function handleLanguage(value) {
		setAlternateLanguage(currentLanguage);
		setCurrentLanguage(value);
		setShowList(false);
	}

	return (
		<div className="language">
			<a title="" className="link link-language" onMouseEnter={handleToggle} >
				{currentLanguage} <i className="speednet-icons-caret-down"></i>
			</a>
			<ul className={`languages-list ${showList ? 'show' : ''}`} onMouseLeave={() => handleToggle(false)}>
			  <li>
			    <a title="" className="active">
				    {currentLanguage} <i className="speednet-icons-caret-down"></i>
			    </a>
			  </li>
			  <li onClick={() => handleLanguage(alternateLanguage)}>
			    <a rel="alternate" title="">
				    {alternateLanguage}
			    </a>
			  </li>
			</ul>
		</div>
	);
};

export default LanguageToggle;
