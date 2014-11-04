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
 		var newPrice = towerList[len-1].parentObject.price * 1.20; // Price increase
 		towerList[len-1].parentObject.price = parseFloat(Math.round(newPrice * 100) / 100).toFixed(2);
 		// Enemies start to spawn after first tower is placed 
		releaseTheDaleks = true;

 		if (releaseTheDaleks && timeStart === 0)
	 		timeStart = Date.now();

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
	if (totalMoney > 400){
		YellowTower.cooldown = YellowTower.cooldown*0.80; 
		GreenTower.cooldown = GreenTower.cooldown*0.80; 
		BlueTower.cooldown = BlueTower.cooldown*0.80; 
		OrangeTower.cooldown = OrangeTower.cooldown*0.80; 
		totalMoney-=400;
		var elem = document.getElementById('fezBlock');
		elem.parentNode.removeChild(elem);
		powerUps.fez = true;
		updateK9Images();
	}
});

document.getElementById('g3d').addEventListener('click', function (e) {
	if (totalMoney > 500){
		YellowTower.radius = YellowTower.radius*13; 
		GreenTower.radius = GreenTower.radius*1.3; 
		BlueTower.radius = BlueTower.radius*1.3; 
		OrangeTower.radius = OrangeTower.radius*1.3; 
		totalMoney-=400;
		var elem = document.getElementById('g3dBlock');
		elem.parentNode.removeChild(elem);
		powerUps.goggles = true;
		updateK9Images();
	}
});

document.getElementById('bowTie').addEventListener('click', function (e) {
	if (totalMoney > 600){
		YellowTower.impact = YellowTower.impact*1.3; 
		GreenTower.impact = GreenTower.impact*1.3; 
		BlueTower.impact = BlueTower.impact*1.3; 
		OrangeTower.impact = OrangeTower.impact*1.3; 
		totalMoney-=400;
		var elem = document.getElementById('bowTieBlock');
		elem.parentNode.removeChild(elem);
		powerUps.bowTie = true;
		updateK9Images();
	}
});


function updateK9Images(){
	// TODO - waiting for kris
	var a='hi';
};