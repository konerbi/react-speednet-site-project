import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PortfolioComponent from "../components/PortfolioComponent";
import CreateTextHtml from "../components/CreateTextHTML";
import ScrollToElement from "../components/ScrollToElement";

const Home = () => {
	const [isAboutUsOutsideViewport, setIsAboutUsOutsideViewport] = useState(true);
	const [isWhyUsOutsideViewport, setIsWhyUsOutsideViewport] = useState(true);
	const [isJobOutsideViewport, setIsJobOutsideViewport] = useState(true);
	const [currentBackground, setCurrentBackground] = useState('background-1');
	const [headerCurrentText, setHeaderCurrentText] = useState('');

	const aboutUsElements = [
		{
			title: 'Dedykowane aplikacje webowe',
			text: 'Tworzymy rozwiązania webowe, które pomagają zoptymalizować Twoją ofertę' +
				' i usprawnić funkcjonowanie Twojej organizacji.',
			imgSrc: 'src/assets/images/uploads/custom-web-apps.svg'
		},
		{
			title: 'Dedykowane aplikacje mobilne',
			text: 'Nowoczesna technologia działa na wielu urządzeniach. Wspieramy firmy, tak by ze swoją ofertą stały się' +
				' integralną częścią Internetu Rzeczy.',
			imgSrc: 'src/assets/images/uploads/custom-mobile-apps.svg'
		},
		{
			title: 'Team Leasing',
			text: 'Oferujemy dedykowane zespoły rozwojowe. Dopasowujemy skład<br>i liczebność zespołu' +
				'<br>w zależności od potrzeb klienta.',
			imgSrc: 'src/assets/images/uploads/team-leasing.svg'
		},
	];

	const whyUsElements = [
		{
			title: '20+',
			text: 'Lat na rynku',
			imgSrc: 'src/assets/images/uploads/calendar.svg'
		},
		{
			title: '91%',
			text: 'Projektów oddanych na czas<br>i w budżecie',
			imgSrc: 'src/assets/images/uploads/clock.svg'
		},
		{
			title: '130+',
			text: 'Programistów i specjalistów',
			imgSrc: 'src/assets/images/uploads/software-engineer.svg'
		},
		{
			title: '69%',
			text: 'Programistów z długoletnim doświadczeniem',
			imgSrc: 'src/assets/images/uploads/senior-developer.svg'
		},
		{
			title: '14',
			text: 'Klienci z 14 krajów',
			imgSrc: 'src/assets/images/uploads/globe.svg'
		}
	];

	const jobsElements = [
		{
			title: 'iOS Developer',
			link: '/praca/ios-developer-pl/',
			imgSrc: 'src/assets/images/uploads/job-ios.svg'
		},
		{
			title: 'Android Developer',
			link: '/praca/android-developer-pl/',
			imgSrc: 'src/assets/images/uploads/job-android.svg'
		},
		{
			title: 'PHP Developer',
			link: '/praca/php-developer-pl/',
			imgSrc: 'src/assets/images/uploads/job-php.svg'
		},
		{
			title: 'JAVA Developer',
			link: '/praca/java-developer-pl/',
			imgSrc: 'src/assets/images/uploads/job-java.svg'
		},
		{
			title: 'FrontEnd Developer',
			link: '/praca/frontend-developer-pl/',
			imgSrc: 'src/assets/images/uploads/job-frontend.png'
		}
	];

	let currentHeaderIndex = 0;
	let currentHeaderTextEndPosition = 0;
	const headerTexts = [
		'oprogramowanie',
		'aplikacje mobilne',
		'aplikacje webowe',
		'dedykowane zespoły'
	];
	const backgroundClassNames = [
		'background-1',
		'background-1',
		'background-2',
		'background-3'
	];

	const handleScroll = () => {
		const position = window.pageYOffset;
		console.log('position=' + position);
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

		return () => {
			clearTimeout();
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	function changeText(increaseText) {
		let text = headerCurrentText;
		currentHeaderTextEndPosition = increaseText ? currentHeaderTextEndPosition + 1 : currentHeaderTextEndPosition - 1;
		text = headerTexts[currentHeaderIndex].slice(0, currentHeaderTextEndPosition);

		setHeaderCurrentText(text);

		let timeoutIncrease = 2000 / headerTexts[currentHeaderIndex].length;
		let timeoutDecrease = 500 / headerTexts[currentHeaderIndex].length;

		if (increaseText && text.length === headerTexts[currentHeaderIndex].length) {
			setTimeout(wait, 4000, false);
		} else {
			if (!increaseText && text.length === 0) {
				currentHeaderIndex = currentHeaderIndex < headerTexts.length - 1 ? currentHeaderIndex + 1 : 0;
				currentHeaderTextEndPosition = 0;
				setCurrentBackground(backgroundClassNames[currentHeaderIndex]);
				setTimeout(wait, timeoutIncrease, true);
			} else {
				setTimeout(wait, increaseText ? timeoutIncrease : timeoutDecrease, increaseText);
			}
		}
	}
	function wait(increaseText) {
		clearTimeout();
		changeText(increaseText);
	}

	return (
    <div>
	    <header id="home-header-intro" className={`header-intro ${currentBackground}`}>
		    <div className="container">
			    <h1>
				    Tworzymy <span id="typed">{headerCurrentText}</span>
				    <span className="typed-cursor">|</span>
			    </h1>
			    <p>
				    Pracujemy w rytmie metodyk zwinnych (agile) i skupiamy się na
				    rozwiązaniach webowych oraz mobilnych
			    </p>
		    </div>
		    <img src="src/assets/images/bg/bg_section_top_home_teams.jpg" className="bg-3"/>
		    <img src="src/assets/images/bg/bg_section_top_home_web_apps.jpg" className="bg-2"/>
		    <img src="src/assets/images/bg/bg_section_top_home_0.jpg" className="bg-1"/>

		    <div
			    title="Poznaj nas"
			    className="btn-scroll-more" onClick={() => ScrollToElement('about-us')}
		    >
			    Poznaj nas
		    </div>
	    </header>

	    <section id="about-us" className="section">
		    <div className="container">
			    <div>
				    <h2>Tworzymy oprogramowanie</h2>
				    <p>To najlepszy moment, by skorzystać z pomocy doświadczonego i niezawodnego partnera. Kogoś takiego jak my,
					    kto przeanalizuje potrzeby, doradzi i przeprowadzi przez cały proces rozwoju zapewniając wysoką jakość
					    usług oraz respektując terminy i budżet.</p>
				    <div className="tile-project-row">
					    <div className="row">
						    {aboutUsElements.map((value, index) => {
							    return <div key={'tile-project' + index} className="col-md-4">
								    <div className={`tile-project ${isAboutUsOutsideViewport ? 'hide-onload' : ''}`}>
									    <h3>{value.title}</h3>
									    <figure>
										    <img src={value.imgSrc}
										         alt={value.title}/>
									    </figure>
									    <p dangerouslySetInnerHTML={CreateTextHtml(value.text)}></p>
								    </div>
							    </div>
						    })}
					    </div>
				    </div>
			    </div>
			    <div>
				    <h2>Dlaczego my</h2>
				    <div className="tile-number-row">
					    {whyUsElements.map((value, index) => {
						    return <div key={'tile-number' + index}
						                className={`tile-number ${isWhyUsOutsideViewport ? 'hide-onload' : ''}`}>
							    <figure>
								    <img src={value.imgSrc} alt={value.text}/>
							    </figure>
							    <h3>{value.title}</h3>
							    <p dangerouslySetInnerHTML={CreateTextHtml(value.text)}></p>
						    </div>
					    })}
				    </div>
				    <div className="button-wrapper">
					    <Link to="/o-nas" title="Zobacz więcej" className="btn-primary">Zobacz więcej</Link>
				    </div>
			    </div>
		    </div>
	    </section>

	    <section className="section option">
		    <div className="container">
			    <h2>Nasze realizacje</h2>
			    <PortfolioComponent/>
			    <div className="button-wrapper">
				    <a href="https://speednet.pl/portfolio/" title="Zobacz więcej" className="btn-primary">Zobacz więcej</a>
			    </div>
		    </div>
	    </section>

	    <section className="section">
		    <div className="container">
			    <h2>Praca</h2>
			    <p>Wierzymy, że tylko utalentowani ludzie pomogą nam realizować nasze projekty. Czekamy na nowe osoby, aby
				    dzieliły się z nami energią, entuzjazmem, doświadczeniem i pomysłami. Wpadnij do nas na rozmowę. Zobacz jak
				    zaufanie i swoboda tworzą u nas kreatywną i wydajną przestrzeń.</p>
			    <div className="tile-job-row">
				    {jobsElements.map((value, index) => {
					    return <div key={'tile-job' + index} className={`tile-job ${isJobOutsideViewport ? 'hide-onload' : ''}`}>
						    <Link to={value.link}>
							    <figure>
								    <img src={value.imgSrc} alt=""/>
							    </figure>
							    <p>{value.title}</p>
						    </Link>
					    </div>
				    })}
			    </div>
			    <div className="button-wrapper">
				    <Link to="/praca/" title="Zobacz więcej" className="btn-primary">Zobacz więcej</Link>
			    </div>
		    </div>
	    </section>
    </div>
  );
};

export default Home;
