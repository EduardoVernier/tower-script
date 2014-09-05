var CANVAS_WIDTH = 1200;
var CANVAS_HEIGHT = 600;
var TOWERS = [];
var ENEMIES = [];


// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
canvas.addEventListener("mousedown", getPosition, false);
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/grid.png";

// Monster image
var towerAReady = false;
var towerAImage = new Image();
towerAImage.onload = function () {
	towerAReady = true;
};
towerAImage.src = "images/tA.png";


var lineBreak = document.createElement("br");
document.body.appendChild(lineBreak);

var towerAButton = document.createElement("button");
towerAButton.innerHTML = "Tower A";
towerAButton.onclick = function(){ 
	var newTower = new Tower (1,2,3); //fix values later

	var len = TOWERS.length;

	if (len == 0)
		TOWERS.push(newTower);
	else
		if (TOWERS [len-1].x != -1)
			TOWERS.push(newTower);
 };

document.body.appendChild(towerAButton);

var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (towerAReady){
		TOWERS.forEach(function (obj){
			if (obj.x != -1)
				ctx.drawImage(towerAImage, obj.x, obj.y);
		});
	}

	// Score
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.font = "30px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Money: " + "for nothing", 10, 0);
};

var update = function (modifier) {
//	totalMoney = totalMoney + modifier*MONEY_MULTIPLIER;
};

var reset = function () {
	var i = "hi";
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();


// Functions
