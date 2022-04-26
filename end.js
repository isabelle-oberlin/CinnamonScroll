/* animation loop with specified intervals between each part: a gsap timeline is perfect !
I put it on repeat for five iterations with a repeatRefresh, so the random values
change each time. */

let phrases = ["Congratulations", "You made it", "to the end...", "Keep looking", "for Wonderland"];
let congrats = document.querySelector(".congrats");
let animation = gsap.timeline({ repeat: 5, repeatDelay: 0.6, repeatRefresh: true });

//create a div and add your sentence to your innerHtml when needed
function createDivs() {
	phrases.forEach(value => {
		let layer = document.createElement("div");
		layer.innerHTML = value;
		congrats.appendChild(layer);
	})
}

function animateText() {
	let layers = document.querySelectorAll(".congrats div");
	layers.forEach(function (element, index) {
		animation.fromTo(element, { opacity: 0, scale: 0, x: "random(-800,800)" }, { scale: 0.7, opacity: 1, repeatDelay: 0.5, x: "random(-600,600)", y: "random(-300,400)" })
	})
	gsap.set(".congrats", { visibility: "visible" })
}

createDivs();
animateText();