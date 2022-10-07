let load = function() {
	let gameState = ["","","","","","","","",""]
	let turnCounter = 0
	
	function clicker(clicky, boxIndex) {
		if (turnCounter % 2 == 0 && clicky.innerHTML == "") {
			clicky.classList.add("X");
			clicky.innerHTML = "X";
			gameState[boxIndex] = "X";
			turnCounter += 1;
			console.log(gameState + "\n" + turnCounter);
		}
		else if (turnCounter % 2 == 1 && clicky.innerHTML == "") {
			clicky.classList.add("O");
			clicky.innerHTML = "O";
			gameState[boxIndex] = "O";
			turnCounter += 1;
			console.log(gameState + "\n" + turnCounter);
		}
	}
	
	function hoverer(hovery) {
		hovery.classList.add("hover")
		console.log("HOVERED OVER SQUARE")
	}
	
	function outer(outy) {
		outy.classList.remove("hover")
		console.log("LEFT THE SQUARE")
	}
	
	let divList = document.getElementById("board").getElementsByTagName("div");
	console.log(divList);
	
	for (let i = 0; i < 9; i++) {
		let each = divList[i]
		each.classList.add("square");
		each.onmouseover = function() {hoverer(each)}
		each.onmouseout = function() {outer(each)}
		each.onclick = function() {clicker(each, i)}
	}
}

window.addEventListener("load", load);
