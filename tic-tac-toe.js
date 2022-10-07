let load = function() {
	let gameState = ["","","","","","","","",""]
	
	function clicker(clicky, boxIndex) {
		if (clicky.innerHTML == "") {
			clicky.classList.remove("O")
			clicky.classList.add("X");
			clicky.innerHTML = "X";
			gameState[boxIndex] = "X";
			console.log(gameState);
		}
		else if (clicky.innerHTML == "X") {
			clicky.classList.remove("X")
			clicky.classList.add("O");
			clicky.innerHTML = "O";
			gameState[boxIndex] = "O";
			console.log(gameState);
		}
		else {
			clicky.innerHTML = "";
			gameState[boxIndex] = "";
			console.log(gameState);
		}
	}
	
	let divList = document.querySelectorAll("#board > div");
	let i = 0;
	while (i <= 8) {
		divList.item(i).classList.add("square");
		i = i + 1;
	}
	let box1 = divList.item(0);
	let box2 = divList.item(1);
	let box3 = divList.item(2);
	let box4 = divList.item(3);
	let box5 = divList.item(4);
	let box6 = divList.item(5);
	let box7 = divList.item(6);
	let box8 = divList.item(7);
	let box9 = divList.item(8);
	
	box1.onclick = function() {clicker(box1, 0)};
	box2.onclick = function() {clicker(box2, 1)};
	box3.onclick = function() {clicker(box3, 2)};
	box4.onclick = function() {clicker(box4, 3)};
	box5.onclick = function() {clicker(box5, 4)};
	box6.onclick = function() {clicker(box6, 5)};
	box7.onclick = function() {clicker(box7, 6)};
	box8.onclick = function() {clicker(box8, 7)};
	box9.onclick = function() {clicker(box9, 8)};
}

window.addEventListener("load", load);
