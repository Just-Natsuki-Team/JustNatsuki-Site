import "@babel/polyfill";
import 'whatwg-fetch';
import "./closest";

window.javascriptLocales = {
	copyMessage: "Just wanted to let you know that Satania is always with you! Even inside your clipboard! We are everywhere and you should really join us!\n" +
		"Also yes, any website can access your clipboard however they want, isn't that creepy?\n" +
		"Regardless, Satania is the BEST WAIFU, and you should agree! http://satania.moe/",
	searchByVoice: "lmao, no one uses this button",
	searchButton: "but the results are already there =]",
	searchBar: "this isn't a real search bar",
	snedHelp: "pls send helppp",
	perfection: "perfection",
	searchBarName: "satania",
	newTab: "Link opens in a new tab."
}

/*
	SLIDESHOW
*/

for (const slideshow of document.getElementsByClassName("slideshow")) {
	const slides = slideshow.querySelectorAll("picture");
	let currentSlide = 0;
	setInterval(() => {
		slides[currentSlide].classList.remove("shown");
		currentSlide = (currentSlide + 1) % slides.length;
		slides[currentSlide].classList.add("shown");
	}, 2500);
}

document.getElementById('close-language-protip').addEventListener("click", () => {
	document.getElementById('language-protip').style.display = 'none';
});
