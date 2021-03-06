import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Jobs from "./Jobs";
import Blog from "./Blog";
import NotFound from "./NotFound";
import Footer from "../components/Footer";
import Cookie from "../components/Cookie";

const AppRouter = () => (
	<BrowserRouter>
		<>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about-us" exact component={About} />
				<Route path="/portfolio" exact component={Portfolio} />
				<Route path="/jobs" exact component={Jobs} />
				<Route path="/blog" exact component={Blog} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
			<Cookie />
		</>
	</BrowserRouter>
);

export default AppRouter;
