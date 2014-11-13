function render () {
	// Clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	// Render Background (path)
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	// Render towers
	towerList.map(function (obj){
		var temp = obj.getPosition();
		var x = temp.x;
		var y = temp.y;
		if (x != -1){
			// Put image on center of mouse click
			ctx.drawImage(obj.image, x-20, y-20);
		}
	});
	
	// Recursively rendering enemies
	function renderEnemies (n){
		if (n <= 0){ 
			return 0;
		}
		else {
			var obj = enemyList[n-1];
			if (obj.health > 0){	
				ctx.drawImage(obj.image, obj.x-15, obj.y-15);
				ctx.fillRect(obj.x,obj.y,1,1);
				renderEnemies(n-1);
			}
		}
	};

	renderEnemies (enemyList.length);

	// Render TARDIS
	if (tardisReady) {
		ctx.globalAlpha = tardisAlpha;
		ctx.drawImage(tardis, 900, 200);
		ctx.globalAlpha = 1;
	}

	// Renders current cursor
	if (cursorStyle == 1)
	{
		document.body.style.cursor = 'crosshair';
		//console.log(mouseX);
		var r = towerList[towerList.length-1].radius;
		ctx.beginPath();
		ctx.arc(mouseX-8,mouseY-8,r,0,2*Math.PI);
		// Makes circle green when you have enough money and red otherwise 
		if (towerList[towerList.length-1].price <= totalMoney)
			ctx.strokeStyle="#8DD67F";
		else
			ctx.strokeStyle="#E44242";
			
		ctx.stroke();
	}
	else
		document.body.style.cursor = 'default';

	// Render score	
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.font = "30px Calibri";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	if (releaseTheDaleks == true)
		score = Math.floor((Date.now() - timeStart)/1000);
	else
		score = 0;
	ctx.fillText("$" + float2int(totalMoney) + "   Score: " + score, 10, 440);

	
	// Render prices of towers
	var s= document.getElementById("yellow");
   	s.innerHTML = '$'+float2int(YellowTower.price);
  	var s= document.getElementById("green");
   	s.innerHTML = '$'+float2int(GreenTower.price);
   	var s= document.getElementById("blue");
   	s.innerHTML = '$'+float2int(BlueTower.price);
    var s= document.getElementById("orange");
  	s.innerHTML = '$'+float2int(OrangeTower.price);
	
	Manager.PowerUps.renderPowerUps();
};

function update (modifier) {
	// Update money based on time passed
	if (releaseTheDaleks)
		totalMoney = totalMoney + modifier*10;	
	else
		totalMoney = 100;
	// Attack
	towerList.map(function (t){
		if (t.unlocked){
			function euclideanDistance (x1,y1,x2,y2){
				return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
			};
			var nKilling = 0;

			for (var i = 0; i < enemyList.length; i++){			
				if (enemyList[i] != undefined){
					if (nKilling >= t.simultaneousTargets)
						break;

					if (enemyList[i].health > 0){
						if (euclideanDistance(t.x,t.y,enemyList[i].x,enemyList[i].y) < t.radius){
							// Shooting enemy
							enemyList[i].health -= t.impact;
							ctx.beginPath();
							ctx.moveTo(t.x-18,t.y-5);
							ctx.lineTo(enemyList[i].x,enemyList[i].y);
							
							switch(t.color){
								case "Yellow":
									ctx.strokeStyle="#FFFF00";
									break;
								case "Blue":
									ctx.strokeStyle="#0000FF";
									break;
								case "Green":
									ctx.strokeStyle="#00FF00";
									break;
								case "Orange":
									ctx.strokeStyle="#D69303";
									break;
							}
							ctx.stroke();
							nKilling++;
						}
					} 
					else {
						// Enemy ded
						//totalMoney += 100;
						enemyList.splice (i,1);
					}
				}	
			}

			if (nKilling > 0){
				t.unlocked = false;
				setTimeout(function(){ t.unlocked = true;}, t.cooldown);
			}			
		}
	});

	// Check keyboard
	if (81 in keysDown) 
		createYellowTower();
	else if (87 in keysDown)
		createGreenTower();
	else if (69 in keysDown)
		createBlueTower();
	else if (82 in keysDown)
		createOrangeTower();
	else if (27 in keysDown){
		cursorStyle = 0;
		if (towerList[towerList.length-1].x == -1)
			// Remove last element if esc pressed
			towerList.splice(towerList.length-1,1); 
	}

	// Tower hit
	enemyList.map(function (obj,index){
			var hit = obj.move();
			if (obj.health > 0 && hit == 1)
			{
				castleHits++;
				tardisAlpha -= 0.12;
				enemyList.splice(index, 1);			
			}
		}
	);


	// Generate enemies
	if (releaseTheDaleks == true){		
		releaseEnemy -= modifier; // ReleaseEnemy is a countdown to release an enemy  
		if (releaseEnemy < 0){		
			hordeSize--;	
			createEnemy(ENEMY);
			releaseEnemy += 0.2; // Release next after 0.2 seconds
			
			if (hordeSize <= 0){
				releaseEnemy += 5;
				hordeCount++;
				hordeSize = hordeCount*hordeCount;
				ENEMY.health = ENEMY.health*(1.2+hordeCount/1000);
				if (hordeCount % 5 == 0)
					ENEMY.speed++;
			}
		}
	}		

	// Checks if game is over
	ctx.fillText(8-castleHits, 944, 280);
	if(castleHits === 8 )
	{
		alert('Game Over!\nScore: '+ score);
		pause = true;
		castleHits++;
		var w = window.open("db.html"+"?"+score);
		
	}		
};

function createEnemy(_enemy){
	var newEnemy = new Enemy (_enemy);
	enemyList.push(newEnemy);
};




