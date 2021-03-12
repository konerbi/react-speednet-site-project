import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
	function goToByScroll(elementId, shouldBeExecuted) {
		const scrollDiv = document.getElementById(elementId).offsetTop;
		window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
	}

	return (
    <div>
      <header id="home-header-intro" className="header-intro header-background">
        <div className="container">
          <h1>
            Tworzymy <span id="typed">aplikacje web</span>
            <span className="typed-cursor">|</span>
          </h1>
          <p>
            Pracujemy w rytmie metodyk zwinnych (agile) i skupiamy się na
            rozwiązaniach webowych oraz mobilnych
          </p>
        </div>
        <a
          title="Poznaj nas"
          className="btn-scroll-more" onClick={() => goToByScroll('about-us', true)}
        >
          Poznaj nas
        </a>
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
						    <div className="col-md-4">
							    <div className="tile-project">
								    <h3>Dedykowane aplikacje webowe</h3>
								    <figure>
									    <img src="../assets/images/uploads/custom-web-apps.svg"
									         alt="Dedykowane aplikacje webowe" />
								    </figure>
								    <p>Tworzymy rozwiązania webowe, które pomagają zoptymalizować Twoją ofertę i usprawnić
									    funkcjonowanie Twojej organizacji.</p>
							    </div>
						    </div>
						    <div className="col-md-4">
							    <div className="tile-project">
								    <h3>Dedykowane aplikacje mobilne</h3>
								    <figure>
									    <img src="../assets/images/uploads/custom-mobile-apps.svg"
									         alt="Dedykowane aplikacje mobilne" />
								    </figure>
								    <p>Nowoczesna technologia działa na wielu urządzeniach. Wspieramy firmy, tak by ze swoją ofertą
									    stały się integralną częścią Internetu Rzeczy.</p>
							    </div>
						    </div>
						    <div className="col-md-4">
							    <div className="tile-project">
								    <h3>Team Leasing</h3>
								    <figure>
									    <img src="../assets/images/uploads/team-leasing.svg" alt="Team Leasing" />
								    </figure>
								    <p>Oferujemy dedykowane zespoły rozwojowe. Dopasowujemy skład i&nbsp;liczebność zespołu
									    w&nbsp;zależności od potrzeb klienta.</p>
							    </div>
						    </div>
					    </div>
				    </div>
			    </div>
			    <div>
				    <h2>Dlaczego my</h2>
				    <div className="tile-number-row">
					    <div className="tile-number hide-onload">
						    <figure>
							    <img src="../assets/images/uploads/calendar.svg" alt="Kalendarz" />
						    </figure>
						    <h3>20+</h3>
						    <p>Lat na rynku</p>
					    </div>
					    <div className="tile-number hide-onload">
						    <figure>
							    <img src="../assets/images/uploads/clock.svg" alt="Czas" />
						    </figure>
						    <h3>91%</h3>
						    <p>Projektów oddanych na czas i w budżecie</p>
					    </div>
					    <div className="tile-number hide-onload">
						    <figure>
							    <img src="../assets/images/uploads/software-engineer.svg"
							         alt="Software developer" />
						    </figure>
						    <h3>130+</h3>
						    <p>Programistów i specjalistów</p>
					    </div>
					    <div className="tile-number hide-onload">
						    <figure>
							    <img src="../assets/images/uploads/senior-developer.svg" alt="Senior developer" />
						    </figure>
						    <h3>69%</h3>
						    <p>Programistów z długoletnim doświadczeniem</p>
					    </div>
					    <div className="tile-number hide-onload">
						    <figure>
							    <img src="../assets/images/uploads/globe.svg" alt="Globus" />
						    </figure>
						    <h3>14</h3>
						    <p>Klienci z 14 krajów</p>
					    </div>
				    </div>
				    <div className="button-wrapper">
					    <Link to="/o-nas" title="Zobacz więcej" className="btn-primary">Zobacz więcej</Link>
				    </div>
			    </div>
		    </div>
	    </section>
    </div>
  );
};

export default Home;
