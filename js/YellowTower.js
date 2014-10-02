/*	Creates first YellowTower since in prototypal inheritance
	objects inhert from other objects  */
var initFirstYellowTower = function(){
	var newTower = Object.create(Tower);
	newTower.color = "Yellow";
	newTower.radius = 100;
	newTower.impact = 500;
	newTower.cooldown = 200;
	newTower.simultaneousTargets = 2;
	newTower.price = 50;
	newTower.x = -1;
	newTower.y = -1;
	newTower.unlocked = true;

	// Setting image
	var yellowTowerReady = false;
	var yellowTowerImage = new Image();
	yellowTowerImage.onload = function () { yellowTowerReady = true;};
	yellowTowerImage.src = "images/t1.png";
	newTower.image = yellowTowerImage;

	return newTower;
};

var createYellowTower = function(){
	cursorStyle = 1;	
	
	var len = towerList.length;

	if (len == 0) 
		towerList.push(Object.create(YellowTower));
	else
	{
		var temp = towerList [len-1].getPosition();
		if (temp.x > -1)
			towerList.push(Object.create(YellowTower));
		else
			towerList [len-1] = (Object.create(YellowTower));
	}
};
