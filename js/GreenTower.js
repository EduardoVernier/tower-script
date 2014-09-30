var initFirstGreenTower = function(){
	var newTower = Object.create(Tower);
	newTower.color = "Green";
	newTower.radius = 100;
	newTower.impact = 5;
	newTower.cooldown = 0.1;
	newTower.simultaneousTargets = 1;
	newTower.price = 60;
	newTower.x = -1;
	newTower.y = -1;

	// Setting image
	var greenTowerReady = false;
	var greenTowerImage = new Image();
	greenTowerImage.onload = function () { greenTowerReady = true;};
	greenTowerImage.src = "images/t2.png";
	newTower.image = greenTowerImage;

	return newTower;
};

var createGreenTower = function(){
	cursorStyle = 1;	
	var newTower = Object.create(GreenTower);

	var len = towerList.length;

	if (len == 0) 
		towerList.push(newTower);
	else
	{
		var temp = towerList [len-1].getPosition();
		if (temp.x != -1)
			towerList.push(newTower);
	}
};
