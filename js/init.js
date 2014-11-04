var CANVAS_WIDTH = 1000;
var CANVAS_HEIGHT = 480;
var TILE_SIDE = 40;

var towerList = [];
var enemyList = [];

var cursorStyle = 0;
var mouseX;
var mouseY;
var castleHits = 0;
var totalMoney = 100;
var hordeSize = 1;
var hordeCount = 1;
var releaseEnemy = 1;

var tardisAlpha = 1;
var timeStart;
var score;
var releaseTheDaleks;

var powerUps = {fez: false, goggles: false, bowTie:false};


// Crockford's suggestion on implementing inheritance
if (typeof Object.create !== 'function'){
	Object.create = function (o){
		var F = function(){};
		F.prototype = o;
		return new F();
	};
}

Tower = initFirstTower();
YellowTower = initFirstYellowTower();
GreenTower = initFirstGreenTower();
BlueTower = initFirstBlueTower();
OrangeTower = initFirstOrangeTower();


var ENEMY = {
	health: 1000,
	speed: 3,
	image:'',
	bounty: 100
}


var canvas;
var ctx;

setCanvas();


// Handle keyboard controls
var keysDown = {};
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


// Setting and images
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () { bgReady = true;};
//bgImage.src = "images/map.png";
bgImage.src = "images/mapDW.png";
document.body.appendChild(document.createElement("br"));


var enemyReady = false;
var enemyImage = new Image();
enemyImage.onload = function () { enemyReady = true;};
//enemyImage.src = "images/enemy.png";
enemyImage.src = "images/dalek.png";
ENEMY.image = enemyImage;

var tardisReady = false;
var tardisImage = new Image();
tardisImage.onload = function () { tardisReady = true;};
//enemyImage.src = "images/enemy.png";
tardisImage.src = "images/tardis.png";
tardis = tardisImage;



// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	render();
	update(delta / 1000);

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
var timeStart = 0;
releaseTheDaleks = false;
reset();
// alert('Welcome to TardisDefense.\nThe game will begin as soon as you place your first K-9.\n\nYour K-9 options are:\n	\tYellow (Q) - Average speed, average impact, average range, two simultaneous targets;\n\tGreen (W) - Fast, low impact, low range, one target;\n\tBlue (E) - Slow, high impact, high range, four simultaneous targets;\n\tSiver (R) - Super Fast, low impact, average range, unlimited number of targets.\n\nPrices are displayed on the top right corner.\nYour TARDIS can take up to 8 hits.\nGood Luck!	');

main();

