let load = function() {
	let currentGameState = ["","","","","","","","",""];
	let turnCounter = 0;
	
	function clicker(clicky, boxIndex) {
		if (turnCounter % 2 == 0 && clicky.innerHTML == "") {
			clicky.classList.add("X");
			clicky.innerHTML = "X";
			currentGameState[boxIndex] = "X";
			turnCounter += 1;
			console.log(currentGameState + "\n" + turnCounter);
		}
		else if (turnCounter % 2 == 1 && clicky.innerHTML == "") {
			clicky.classList.add("O");
			clicky.innerHTML = "O";
			currentGameState[boxIndex] = "O";
			turnCounter += 1;
			console.log(currentGameState + "\n" + turnCounter);
		}
		
		if (winCondition(currentGameState) == "X") {
			document.getElementById("status").classList.add("you-won");
			document.getElementById("status").innerHTML = "Congratulations! X is the Winner";
		}
		if (winCondition(currentGameState) == "O") {
			document.getElementById("status").classList.add("you-won");
			document.getElementById("status").innerHTML = "Congratulations! O is the Winner";
		}
	}
	
	function winCondition(gameState) {
		if (gameState[0] == gameState[1] && gameState[0] == gameState[2]){
			return gameState[0];
		}
		else if (gameState[3] == gameState[4] && gameState[3] == gameState[5]){
			return gameState[3];
		}
		else if (gameState[6] == gameState[7] && gameState[6] == gameState[8]){
			return gameState[6];
		}
		else if (gameState[0] == gameState[3] && gameState[0] == gameState[6]){
			return gameState[0];
		}
		else if (gameState[1] == gameState[4] && gameState[1] == gameState[7]){
			return gameState[1];
		}
		else if (gameState[2] == gameState[5] && gameState[2] == gameState[8]){
			return gameState[2];
		}
		else if (gameState[0] == gameState[4] && gameState[0] == gameState[8]){
			return gameState[0];
		}
		else if (gameState[2] == gameState[4] && gameState[2] == gameState[6]){
			return gameState[2];
		}
		else {
			return "";
		}
	}
	
	function hoverer(hovery) {
		hovery.classList.add("hover");
	}
	
	function outer(outy) {
		outy.classList.remove("hover");
	}
	
	let divList = document.getElementById("board").getElementsByTagName("div");
	console.log(divList);
	
	for (let i = 0; i < 9; i++) {
		let each = divList[i]
		each.classList.add("square");
		each.onmouseover = function() {hoverer(each)};
		each.onmouseout = function() {outer(each)};
		each.onclick = function() {clicker(each, i)};
	}
	
	
}

window.addEventListener("load", load);
