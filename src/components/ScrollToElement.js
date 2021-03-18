import React from 'react';

function ScrollToElement(elementId, shouldBeExecuted= true) {
	const scrollDiv = document.getElementById(elementId).offsetTop - 60;
	window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}

export default ScrollToElement;
