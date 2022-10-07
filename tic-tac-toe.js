let main = function() {
	let divList = document.querySelectorAll("#board > div");
	let i = 0;
	while (i <= 8) {
		divList.item(i).classList.add("square");
		i = i + 1;
	}
}

window.addEventListener("load", main);