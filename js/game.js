function render () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	towerList.forEach(function (obj){
		var temp = obj.getPosition();
		var x = temp.x;
		var y = temp.y;
		if (x != -1)
		{
			// Put image on center of mouse click
			ctx.drawImage(obj.image, x-20, y-20);
			
			ctx.fillRect(x,y,1,1); 
			// Draw radius circle
			ctx.beginPath();
			ctx.arc(x,y,obj.radius,0,2*Math.PI);
			ctx.strokeStyle="#CCCCCC";
			ctx.stroke();
		}
	});
	

	enemyList.forEach(function (obj){
		// Put image on center of mouse click
		ctx.drawImage(obj.image, obj.x-15, obj.y-15);
		ctx.fillRect(obj.x,obj.y,1,1); 

		}
	);

	if (cursorStyle == 1)
	{
		document.body.style.cursor = 'crosshair';
		//console.log(mouseX);
		var r = towerList[towerList.length-1].radius;
		ctx.beginPath();
		ctx.arc(mouseX,mouseY,r,0,2*Math.PI);
		ctx.strokeStyle="#AAA";
		ctx.stroke();
	}
	else
		document.body.style.cursor = 'default';

	// Score
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.font = "30px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Money: " + float2int(totalMoney) + "   Castle Hits: " + castleHits, 10, 0);
};

function update (modifier) {
	totalMoney = totalMoney + modifier*10;
	//console.log(keysDown);

	if (81 in keysDown) 
		createYellowTower();
	else if (87 in keysDown)
		createGreenTower();
	else if (69 in keysDown)
		createTower(BLUE_TOWER);
	else if (82 in keysDown)
		createTower(ORANGE_TOWER);
	else if (32 in keysDown)
		createEnemy(ENEMY);

	enemyList.forEach(function (obj,index){
			var hit = obj.move();
			if (hit == 1)
			{
				castleHits++;
				enemyList.splice(index, 1);
			}
		}
	);


	hordeCooldown += modifier;
	if (hordeCooldown > 10) //
	{

		createEnemy(ENEMY);
		hordeCooldown = 0;
	}
	
};

function reset () {
	var i = "hi";
};


var createTower = function (_tower){
		cursorStyle = 1;

		var newTower = Tower(); 
		newTower.initialize(_tower);
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


function createTowerButton(color, image, range, impact, cooldown) {
	var newButton = document.createElement("button");
	newButton.innerHTML = color;

	newButton.onclick = createTower(color, image, range, impact, cooldown);
	return newButton;
};

function createEnemy(_enemy){
	var newEnemy = new Enemy (_enemy);

	enemyList.push(newEnemy);
}


