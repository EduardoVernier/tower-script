var initFirstBlueTower = function(){
	var newTower = Object.create(Tower);
	newTower.color = "Blue";
	newTower.radius = 60;
	newTower.impact = 10;
	newTower.cooldown = 0.5;
	newTower.simultaneousTargets = 10;
	newTower.price = 80;
	newTower.x = -1;
	newTower.y = -1;

	// Setting image
	var blueTowerReady = false;
	var blueTowerImage = new Image();
	blueTowerImage.onload = function () { blueTowerReady = true;};
	blueTowerImage.src = "images/t3.png";
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
	}
};
