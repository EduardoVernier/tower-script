/*	Creates first YellowTower since in prototypal inheritance
	objects inhert from other objects  */
var initFirstYellowTower = function(){
	var newTower = Object.create(Tower);
	newTower.color = "Yellow";
	newTower.radius = 100;
	newTower.impact = 20;
	newTower.cooldown = 0.5;
	newTower.simultaneousTargets = 1;
	newTower.price = 50;
	newTower.x = -1;
	newTower.y = -1;
	return newTower;
};

var createYellowTower = function(){
	cursorStyle = 1;	
	// Now changing the YellowTower object will change
	// all its children
	
	var len = towerList.length;


	if (len == 0) 
		towerList.push(Object.create(YellowTower));
	else
	{
		var temp = towerList [len-1].getPosition();
		if (temp.x > -1)

			towerList.push(Object.create(YellowTower));
	}
};

