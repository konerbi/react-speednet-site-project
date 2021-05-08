import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PortfolioComponent from "../components/PortfolioComponent";
import CreateTextHtml from "../components/CreateTextHTML";
import ScrollToElement from "../components/ScrollToElement";
import {useTranslation} from "react-i18next";

const Home = () => {
	const [t, i18n] = useTranslation('common');
	const [isAboutUsOutsideViewport, setIsAboutUsOutsideViewport] = useState(true);
	const [isWhyUsOutsideViewport, setIsWhyUsOutsideViewport] = useState(true);
	const [isJobOutsideViewport, setIsJobOutsideViewport] = useState(true);
	const [currentBackground, setCurrentBackground] = useState('background-1');
	const [headerCurrentText, setHeaderCurrentText] = useState('');

	const aboutUsElements = [
		{
			title: 'home.aboutUs.elements.webApps.title',
			text: 'home.aboutUs.elements.webApps.text',
			imgSrc: 'src/assets/images/uploads/custom-web-apps.svg'
		},
		{
			title: 'home.aboutUs.elements.mobileApps.title',
			text: 'home.aboutUs.elements.mobileApps.text',
			imgSrc: 'src/assets/images/uploads/custom-mobile-apps.svg'
		},
		{
			title: 'home.aboutUs.elements.teams.title',
			text: 'home.aboutUs.elements.teams.text',
			imgSrc: 'src/assets/images/uploads/team-leasing.svg'
		},
	];

	const whyUsElements = [
		{
			title: 'home.whyUs.elements.years.title',
			text: 'home.whyUs.elements.years.text',
			imgSrc: 'src/assets/images/uploads/calendar.svg'
		},
		{
			title: 'home.whyUs.elements.projects.title',
			text: 'home.whyUs.elements.projects.text',
			imgSrc: 'src/assets/images/uploads/clock.svg'
		},
		{
			title: 'home.whyUs.elements.specialists.title',
			text: 'home.whyUs.elements.specialists.text',
			imgSrc: 'src/assets/images/uploads/software-engineer.svg'
		},
		{
			title: 'home.whyUs.elements.developers.title',
			text: 'home.whyUs.elements.developers.text',
			imgSrc: 'src/assets/images/uploads/senior-developer.svg'
		},
		{
			title: 'home.whyUs.elements.clients.title',
			text: 'home.whyUs.elements.clients.text',
			imgSrc: 'src/assets/images/uploads/globe.svg'
		}
	];

	const jobsElements = [
		{
			title: 'home.careers.elements.iOS',
			link: '/jobs/ios-developer-pl/',
			imgSrc: 'src/assets/images/uploads/job-ios.svg'
		},
		{
			title: 'home.careers.elements.android',
			link: '/jobs/android-developer-pl/',
			imgSrc: 'src/assets/images/uploads/job-android.svg'
		},
		{
			title: 'home.careers.elements.php',
			link: '/jobs/php-developer-pl/',
			imgSrc: 'src/assets/images/uploads/job-php.svg'
		},
		{
			title: 'home.careers.elements.java',
			link: '/jobs/java-developer-pl/',
			imgSrc: 'src/assets/images/uploads/job-java.svg'
		},
		{
			title: 'home.careers.elements.frontend',
			link: '/jobs/frontend-developer-pl/',
			imgSrc: 'src/assets/images/uploads/job-frontend.png'
		}
	];

	let currentHeaderIndex = 0;
	let currentHeaderTextEndPosition = 0;
	let headerTextTimer;
	const headerTexts = [
		'home.headerTexts.software',
		'home.headerTexts.mobiles',
		'home.headerTexts.webs',
		'home.headerTexts.teams'
	];
	const backgroundClassNames = [
		'background-1',
		'background-1',
		'background-2',
		'background-3'
	];

	const handleScroll = () => {
		const position = window.pageYOffset;
		if (position > 500) {
			setIsAboutUsOutsideViewport(false);
		}
		if (position > 1200) {
			setIsWhyUsOutsideViewport(false);
		}
		if (position > 3000) {
			setIsJobOutsideViewport(false);
		}
	};

	useEffect( () => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		changeText(true);
		i18n.on('languageChanged', () => {
			window.clearTimeout(headerTextTimer);
			currentHeaderIndex = 0;
			currentHeaderTextEndPosition = 0;
			setCurrentBackground(backgroundClassNames[currentHeaderIndex]);
			changeText(true);
		});

		return () => {
			window.clearTimeout(headerTextTimer);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	function changeText(increaseText) {
		let text = headerCurrentText;
		currentHeaderTextEndPosition = increaseText ? currentHeaderTextEndPosition + 1 : currentHeaderTextEndPosition - 1;
		text = t(headerTexts[currentHeaderIndex]).slice(0, currentHeaderTextEndPosition);

		setHeaderCurrentText(text);

		let timeoutIncrease = 2000 / t(headerTexts[currentHeaderIndex]).length;
		let timeoutDecrease = 500 / t(headerTexts[currentHeaderIndex]).length;

		if (increaseText && text.length === t(headerTexts[currentHeaderIndex]).length) {
			window.clearTimeout(headerTextTimer);
			headerTextTimer = window.setTimeout(wait, 4000, false);
		} else {
			if (!increaseText && text.length === 0) {
				currentHeaderIndex = currentHeaderIndex < headerTexts.length - 1 ? currentHeaderIndex + 1 : 0;
				currentHeaderTextEndPosition = 0;
				setCurrentBackground(backgroundClassNames[currentHeaderIndex]);
				window.clearTimeout(headerTextTimer);
				headerTextTimer = window.setTimeout(wait, timeoutIncrease, true);
			} else {
				window.clearTimeout(headerTextTimer);
				headerTextTimer = window.setTimeout(wait, increaseText ? timeoutIncrease : timeoutDecrease, increaseText);
			}
		}
	}
	function wait(increaseText) {
		window.clearTimeout(headerTextTimer);
		changeText(increaseText);
	}

	return (
    <div>
	    <header id="home-header-intro" className={`header-intro ${currentBackground}`}>
		    <div className="container">
			    <h1>
				    {t('home.headerTextPrefix')} <span id="typed">{headerCurrentText}</span>
				    <span className="typed-cursor">|</span>
			    </h1>
			    <p>
				    {t('home.headerText')}
			    </p>
		    </div>
		    <img src="src/assets/images/bg/bg_section_top_home_teams.jpg" className="bg-3"/>
		    <img src="src/assets/images/bg/bg_section_top_home_web_apps.jpg" className="bg-2"/>
		    <img src="src/assets/images/bg/bg_section_top_home_0.jpg" className="bg-1"/>

		    <div
			    title={t('home.meetUsButton')}
			    className="btn-scroll-more" onClick={() => ScrollToElement('about-us')}
		    >
			    {t('home.meetUsButton')}
		    </div>
	    </header>

	    <section id="about-us" className="section">
		    <div className="container">
			    <div>
				    <h2>{t('home.aboutUs.header')}</h2>
				    <p>{t('home.aboutUs.subheader')}</p>
				    <div className="tile-project-row">
					    <div className="row">
						    {aboutUsElements.map((value, index) => {
							    return <div key={'tile-project' + index} className="col-md-4">
								    <div className={`tile-project ${isAboutUsOutsideViewport ? 'hide-onload' : ''}`}>
									    <h3>{t(value.title)}</h3>
									    <figure>
										    <img src={value.imgSrc}
										         alt={t(value.title)}/>
									    </figure>
									    <p dangerouslySetInnerHTML={CreateTextHtml(t(value.text))}></p>
								    </div>
							    </div>
						    })}
					    </div>
				    </div>
			    </div>
			    <div>
				    <h2>{t('home.whyUs.header')}</h2>
				    <div className="tile-number-row">
					    {whyUsElements.map((value, index) => {
						    return <div key={'tile-number' + index}
						                className={`tile-number ${isWhyUsOutsideViewport ? 'hide-onload' : ''}`}>
							    <figure>
								    <img src={value.imgSrc} alt={t(value.text)}/>
							    </figure>
							    <h3>{t(value.title)}</h3>
							    <p dangerouslySetInnerHTML={CreateTextHtml(t(value.text))}></p>
						    </div>
					    })}
				    </div>
				    <div className="button-wrapper">
					    <Link to="/about-us" title={t('buttons.seeMoreButton')} className="btn-primary">{t('buttons.seeMoreButton')}</Link>
				    </div>
			    </div>
		    </div>
	    </section>

	    <section className="section option">
		    <div className="container">
			    <h2>{t('businessCases.header')}</h2>
			    <PortfolioComponent/>
			    <div className="button-wrapper">
				    <a href="https://speednet.pl/portfolio/" title={t('buttons.seeMoreButton')} className="btn-primary">{t('buttons.seeMoreButton')}</a>
			    </div>
		    </div>
	    </section>

	    <section className="section">
		    <div className="container">
			    <h2>{t('home.careers.header')}</h2>
			    <p>{t('home.careers.subheader')}</p>
			    <div className="tile-job-row">
				    {jobsElements.map((value, index) => {
					    return <div key={'tile-job' + index} className={`tile-job ${isJobOutsideViewport ? 'hide-onload' : ''}`}>
						    <Link to={value.link}>
							    <figure>
								    <img src={value.imgSrc} alt=""/>
							    </figure>
							    <p>{t(value.title)}</p>
						    </Link>
					    </div>
				    })}
			    </div>
			    <div className="button-wrapper">
				    <Link to="/jobs/" title={t('buttons.seeMoreButton')} className="btn-primary">{t('buttons.seeMoreButton')}</Link>
			    </div>
		    </div>
	    </section>
    </div>
  );
};

export default Home;
