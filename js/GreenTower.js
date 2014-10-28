var initFirstGreenTower = function(){
	var newTower = Object.create(Tower);
	newTower.color = "Green";
	newTower.radius = 70;
	newTower.impact = 280;
	newTower.cooldown = 50;
	newTower.simultaneousTargets = 1;
	newTower.price = 90;
	newTower.x = -1;
	newTower.y = -1;
	newTower.unlocked = true;
	// Setting image
	var greenTowerReady = false;
	var greenTowerImage = new Image();
	greenTowerImage.onload = function () { greenTowerReady = true;};
	greenTowerImage.src = "images/k9_verde.png";
	newTower.image = greenTowerImage;

	return newTower;
};

var createGreenTower = function(){
	cursorStyle = 1;	
	var newTower = Object.create(GreenTower);
	// Create reference to parent object
	newTower.parentObject = GreenTower; 

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
