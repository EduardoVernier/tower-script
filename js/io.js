function setCanvas (){
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;

	canvas.addEventListener("mousedown", canvasClick, false);
	canvas.addEventListener('mousemove', mouseMonitor);
	document.body.appendChild(canvas);
	canvas.setAttribute("id", "canvas");

};


function canvasClick(event) // Place tower! Very important
{
	var cX = event.x;
	var cY = event.y;

	var canvas = document.getElementById("canvas");
	var len = towerList.length; 

	var temp =  towerList [len-1].getPosition();

	// Position tower
	if (len > 0 && temp.x == -1 
	 && totalMoney - towerList[len-1].price >=0) {
		towerList [len-1].setPosition (cX-9, cY-9);
		cursorStyle = 0;
	}
};

function mouseMonitor(event){
	mouseX = event.x ;
	mouseY = event.y ;
}

function float2int (value) {
	return value | 0;
};

document.getElementById('fez').addEventListener('click', function (e) {
	Manager.PowerUps.buyFez();
});

document.getElementById('g3d').addEventListener('click', function (e) {
	Manager.PowerUps.buyGoggles();
});

document.getElementById('bowTie').addEventListener('click', function (e) {
	Manager.PowerUps.buyBowTie();
});

function updateK9Images(){
	// Loads k-9s with powerups
	if (Manager.PowerUps.getFez() == true 
		&& Manager.PowerUps.getGoggles() == true 
		&& Manager.PowerUps.getBowTie() == true){
		
		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_golden_super.png";
		YellowTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_verde_super.png";
		GreenTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_blue_super.png";
		BlueTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_silver_super.png";
		OrangeTower.image = towerImage;

	} else if (Manager.PowerUps.getFez() == true 
		&& Manager.PowerUps.getGoggles() == true){

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_golden_Fez_3d.png";
		YellowTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_verde_Fez_3d.png";
		GreenTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_blue_Fez_3d.png";
		BlueTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_silver_Fez_3d.png";
		OrangeTower.image = towerImage;

	} else if (Manager.PowerUps.getFez() == true 
		&& Manager.PowerUps.getBowTie() == true){

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_golden_BowTie_Fez.png";
		YellowTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_verde_BowTie_Fez.png";
		GreenTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_blue_BowTie_Fez.png";
		BlueTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_silver_BowTie_Fez.png";
		OrangeTower.image = towerImage;

	} else if (Manager.PowerUps.getGoggles() == true 
		&& Manager.PowerUps.getBowTie() == true){

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_golden_3d_BowTie.png";
		YellowTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_verde_3d_BowTie.png";
		GreenTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_blue_3d_BowTie.png";
		BlueTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_silver_3d_BowTie.png";
		OrangeTower.image = towerImage;


	} else if (Manager.PowerUps.getFez() == true){
		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_golden_Fez.png";
		YellowTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_verde_Fez.png";
		GreenTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_blue_Fez.png";
		BlueTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_silver_Fez.png";
		OrangeTower.image = towerImage;

	} else if (Manager.PowerUps.getGoggles() == true){
		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_golden_3d.png";
		YellowTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_verde_3d.png";
		GreenTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_blue_3d.png";
		BlueTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_silver_3d.png";
		OrangeTower.image = towerImage;

	} else if (Manager.PowerUps.getBowTie() == true){
		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_golden_BowTie.png";
		YellowTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_verde_BowTie.png";
		GreenTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_blue_BowTie.png";
		BlueTower.image = towerImage;

		var towerReady = false;
		var towerImage = new Image();
		towerImage.onload = function () { towerReady = true;};
		towerImage.src = "images/k9/k9_silver_BowTie.png";
		OrangeTower.image = towerImage;

	}




};

document.getElementById('pauseButton').addEventListener('click', function (e) {
	if (pause === false)
	{
		pause = true;
		document.getElementById('pauseButton').src = "images/play_button.png"
	}

	else if (pause === true){
		document.getElementById('pauseButton').src = "images/pause_button.png"
		pause = false;
	}
});