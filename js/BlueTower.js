var initFirstBlueTower = function(){
	var newTower = Object.create(Tower);
	newTower.color = "Blue";
	newTower.radius = 200;
	newTower.impact = 1000;
	newTower.cooldown = 600;
	newTower.simultaneousTargets = 2;
	newTower.price = 50;
	newTower.x = -1;
	newTower.y = -1;
	newTower.unlocked = true;
	// Setting image
	var blueTowerReady = false;
	var blueTowerImage = new Image();
	blueTowerImage.onload = function () { blueTowerReady = true;};
	blueTowerImage.src = "images/k9_blue.png";
	newTower.image = blueTowerImage;

	return newTower;
};

var createBlueTower = function(){
	cursorStyle = 1;	
	var newTower = Object.create(BlueTower);

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
