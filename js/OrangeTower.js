var initFirstOrangeTower = function(){
	var newTower = Object.create(Tower);
	newTower.color = "Orange";
	newTower.radius = 170;
	newTower.impact = 120;
	newTower.cooldown = 2;
	newTower.simultaneousTargets = 1;
	newTower.price = 100;
	newTower.x = -1;
	newTower.y = -1;

	// Setting image
	var orangeTowerReady = false;
	var orangeTowerImage = new Image();
	orangeTowerImage.onload = function () { orangeTowerReady = true;};
	orangeTowerImage.src = "images/t4.png";
	newTower.image = orangeTowerImage;

	return newTower;
};

var createOrangeTower = function(){
	cursorStyle = 1;	
	var newTower = Object.create(OrangeTower);

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
