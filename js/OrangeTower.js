var initFirstOrangeTower = function(){
	var newTower = Object.create(Tower);
	newTower.color = "Orange";
	newTower.radius = 100;
	newTower.impact = 20;
	newTower.cooldown = 5;
	newTower.simultaneousTargets = 20;
	newTower.price = 180;
	newTower.x = -1;
	newTower.y = -1;
	newTower.unlocked = true;

	// Setting image
	var orangeTowerReady = false;
	var orangeTowerImage = new Image();
	orangeTowerImage.onload = function () { orangeTowerReady = true;};
	orangeTowerImage.src = "images/k9/k9_silver.png";
	newTower.image = orangeTowerImage;

	return newTower;
};

var createOrangeTower = function(){
	cursorStyle = 1;	
	var newTower = Object.create(OrangeTower);
	// Create reference to parent object
	newTower.parentObject = OrangeTower; 

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
