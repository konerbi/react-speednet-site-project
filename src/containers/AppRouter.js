import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import JobOffers from "./JobOffers";
import Blog from "./Blog";
import NotFound from "./NotFound";
import Footer from "../components/Footer";

const AppRouter = () => (
	<BrowserRouter>
		<>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/o-nas" exact component={About} />
				<Route path="/portfolio" exact component={Portfolio} />
				<Route path="/praca" exact component={JobOffers} />
				<Route path="/blog" exact component={Blog} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</>
	</BrowserRouter>
);

export default AppRouter;
