var numSquares = 6;
var colors = genRandColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("button");
var stripe = document.querySelector("#stripe");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");


easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3
	colors = genRandColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares = 6
	colors = genRandColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		};
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = genRandColors(numSquares);
	//resets the "try again"/ "nicu message"
	messageDisplay.textContent = "";
	//pick a new random goal color from array
	pickedColor = pickColor();
	//change display color to match picked color
	colorDisplay.textContent = pickedColor;
	//change the colors of the squares on the page
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";


});

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again"
		}
			else{
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again"
		}
	});
	
	

}

function changeColors(color){
	// loop through all squares, change each color to match goal color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	 var random = Math.floor(Math.random() * colors.length);
	 return colors[random];
}

function genRandColors(num){
	// make an array
	var arr = [];
	// Repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push into array
		arr.push(randomColor());
		
	}
	// return array at the end
	return arr;
}

function randomColor(){
	// pick a red from 0-255
	var red=Math.floor(Math.random()*256)
	// pick a green from 0-255
	var green=Math.floor(Math.random()*256)
	// pick a blue from 0-255
	var blue=Math.floor(Math.random()*256)
	 return "rgb(" + red + ", " + green + ", " + blue + ")"
}