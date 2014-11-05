/*	Creates first YellowTower since in prototypal inheritance
	objects inhert from other objects  */
var initFirstYellowTower = function(){
	var newTower = Object.create(Tower);
	newTower.color = "Yellow";
	newTower.radius = 100;
	newTower.impact = 500;
	newTower.cooldown = 200;
	newTower.simultaneousTargets = 2;
	newTower.price = 80;
	newTower.x = -1;
	newTower.y = -1;
	newTower.unlocked = true;

	// Setting image
	var yellowTowerReady = false;
	var yellowTowerImage = new Image();
	yellowTowerImage.onload = function () { yellowTowerReady = true;};
	yellowTowerImage.src = "images/k9/k9_golden.png";
	newTower.image = yellowTowerImage;

	return newTower;
};

var createYellowTower = function(){
	cursorStyle = 1;	
	var newTower = Object.create(YellowTower);

	// Create reference to parent object
	newTower.parentObject = YellowTower; 
	
	var len = towerList.length;

	if (len == 0) 
		towerList.push(newTower);
	else
	{
		var temp = towerList [len-1].getPosition();
		if (temp.x != -1)
			towerList.push(newTower);
		else
			towerList [len-1] = (newTower);
	}
};

