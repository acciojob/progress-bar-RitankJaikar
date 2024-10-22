//your JS code here. If required.
const prev= document.querySelector("#prev");
const next= document.querySelector("#next");

const circles= document.querySelectorAll(".circle");

let i=1;

next.addEventListener("click", event => {
	circles[i++].classList.add("active");
	//i++;
	//console.log(i);
	if (i>1) {
		prev.disabled = false;
	}
	if(i===circles.length) {
		next.disabled= true;
	}
})

prev.addEventListener("click", event => {
	circles[--i].classList.remove("active");
	//i--;
	//console.log(i);
	if (i<=1) {
		prev.disabled = true;
	}
	if(i<circles.length) {
		next.disabled= false;
	}
})














