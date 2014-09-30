function render () {


	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}


	// Attack
	towerList.forEach(function (t){
		function euclideanDistance (x1,y1,x2,y2){
			return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
		};
		var nKilling = 0;

		for (var i = 0; i < enemyList.length; i++){			
			if (enemyList[i] != undefined){

				if (nKilling >= t.simultaneousTargets)
					break;

				if (enemyList[i].health > 0)
				{
					if (euclideanDistance(t.x,t.y,enemyList[i].x,enemyList[i].y) < t.radius){
						enemyList[i].health -= t.impact;
						
						ctx.beginPath();
						ctx.moveTo(t.x,t.y);
						ctx.lineTo(enemyList[i].x,enemyList[i].y);
						ctx.strokeStyle="#CC0000";
						ctx.stroke();

						nKilling++;
					}
				} 
				else {
					enemyList.splice (i,1);
				}
			}	


		}

	});


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
		if (obj.health > 0){	
			ctx.drawImage(obj.image, obj.x-15, obj.y-15);
			ctx.fillRect(obj.x,obj.y,1,1); 
		}
	});

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
		createBlueTower();
	else if (82 in keysDown)
		createOrangeTower();
	else if (32 in keysDown)
		createEnemy(ENEMY);



	// Tower hit
	enemyList.forEach(function (obj,index){
			var hit = obj.move();
			if (obj.health > 0 && hit == 1)
			{
				castleHits++;
				enemyList.splice(index, 1);
			}
		}
	);


	hordeCooldown += modifier;
	if (hordeCooldown > 6) //
	{
		var wait = 0;
		for (var i = 0; i < hordeSize; i++)
		{

			setTimeout(function(){createEnemy(ENEMY);}, wait);
			wait += 200;
		}

		hordeCooldown = 0;
		hordeSize = hordeSize*1.5;
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


