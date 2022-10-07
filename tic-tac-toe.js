let load = function() {
	let gameState = ["","","","","","","","",""]
	let turnCounter = 0
	
	function clicker(clicky, boxIndex) {
		if (turnCounter % 2 == 0 && clicky.innerHTML == "") {
			clicky.classList.add("X");
			clicky.innerHTML = "X";
			gameState[boxIndex] = "X";
			turnCounter += 1;
			console.log(gameState.toString() + turnCounter.toString());
		}
		else if (turnCounter % 2 == 1 && clicky.innerHTML == "") {
			clicky.classList.add("O");
			clicky.innerHTML = "O";
			gameState[boxIndex] = "O";
			turnCounter += 1;
			console.log(gameState.toString() + turnCounter.toString());
		}
	}
	
	let divList = document.querySelectorAll("#board > div");
	let i = 0;
	while (i <= 8) {
		divList.item(i).classList.add("square");
		i = i + 1;
	}
	divList.forEach((elem, index) => {
		elem.onclick = function() {clicker(elem, index)};
	});
}

window.addEventListener("load", load);
