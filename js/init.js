var CANVAS_WIDTH = 960;
var CANVAS_HEIGHT = 480;
var TILE_SIDE = 40;
var towerList = [];
var enemyList = [];
var cursorStyle = 0;

var mouseX;
var mouseY;
var hordeCooldown = 0;
var castleHits = 0;
var YELLOW_TOWER = {
	color:"Yellow",
	image: '', 
	radius: 100,
	impact: 20,
	cooldown: 0.5,
	simultaneousTargets: 1,
	price: 50
};
var GREEN_TOWER = {
	color:"Green",
	image: '', 
	radius: 100,
	impact: 5,
	cooldown: 0.1,
	simultaneousTargets: 1,
	price: 60
};
var BLUE_TOWER = {
	color:"Blue",
	image: '', 
	radius: 65,
	impact: 10,
	cooldown: 0.5,
	simultaneousTargets: 10,
	price: 80
};
var ORANGE_TOWER = {
	color:"Orage",
	image: '', 
	radius: 170,
	impact: 200,
	cooldown: 2,
	simultaneousTargets: 3,
	price: 100
};
var ENEMY = {
	health: 100,
	speed: 3,
	image:''
}


var totalMoney = 100;

var canvas;
var ctx;

setCanvas();



// Setting buttons and Images
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () { bgReady = true;};
bgImage.src = "images/map.png";
document.body.appendChild(document.createElement("br"));

var yellowTowerReady = false;
var yellowTowerImage = new Image();
yellowTowerImage.onload = function () { yellowTowerReady = true;};
yellowTowerImage.src = "images/t1.png";
//var yellowTowerButton = createTowerButton("Yellow", yellowTowerImage, 100, 20, 0.5);
//document.body.appendChild(yellowTowerButton);
YELLOW_TOWER.image = yellowTowerImage;

var greenTowerReady = false;
var greenTowerImage = new Image();
greenTowerImage.onload = function () { greenTowerReady = true;};
greenTowerImage.src = "images/t2.png";
GREEN_TOWER.image = greenTowerImage;


var blueTowerReady = false;
var blueTowerImage = new Image();
blueTowerImage.onload = function () { blueTowerReady = true;};
blueTowerImage.src = "images/t3.png";
BLUE_TOWER.image = blueTowerImage;

var orangeTowerReady = false;
var orangeTowerImage = new Image();
orangeTowerImage.onload = function () { orangeTowerReady = true;};
orangeTowerImage.src = "images/t4.png";
ORANGE_TOWER.image = orangeTowerImage;

var enemyReady = false;
var enemyImage = new Image();
enemyImage.onload = function () { enemyReady = true;};
enemyImage.src = "images/enemy.png";
ENEMY.image = enemyImage;

// Handle keyboard controls
var keysDown = {};
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);



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
