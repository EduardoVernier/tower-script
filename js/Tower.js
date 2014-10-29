// This pattern is introduced in Doug Crockford’s book, JavaScript: The Good Parts.
 
var initFirstTower = function(){
	// Public Variables
	this.radius;
	this.impactForce;
	this.cooldown;
	this.color;
	this.image;
	this.simultaneousTargets;
	this.price;
	this.x;
	this.y;


	return {
		setPosition: setPosition,
		getPosition: getPosition,
		updatePrice: updatePrice
	};

	function setPosition (_x,_y){
		function checkNeighborhood (_x,_y){
			function euclideanDistance (x1,y1,x2,y2){
				return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
			};

			var insideNeighborFlag = false;

			towerList.forEach(function (obj){
				var temp = obj.getPosition();

				if (euclideanDistance(temp.x,temp.y,_x,_y) < 30 ) // Set 30 as constant
					insideNeighborFlag = true;
			});

			if (insideNeighborFlag == false){
			    // Tower placed
			    var len = towerList.length; 
    			towerList [len-1].x = _x; 
    			towerList [len-1].y = _y;
				totalMoney -= towerList[len-1].price
				var newPrice = towerList[len-1].parentObject.price * 1.20; // Price increase
 				towerList[len-1].parentObject.price = parseFloat(Math.round(newPrice * 100) / 100).toFixed(2);

				// this.x = _x; bug wtf 
				// this.y = _y; perdi 3 horas nisso
			}
		};

		// Check if inside one of the valid "blocks"
		if ((_x > 0 && _x < 5*TILE_SIDE)&&(_y > 0 && _y < 6*TILE_SIDE))
		{
			checkNeighborhood(_x,_y);
		}
		else if ((_x > 0 && _x < 5*TILE_SIDE)&&(_y > 7*TILE_SIDE ))
		{
			checkNeighborhood(_x,_y);
		}
		else if ((_x > 5*TILE_SIDE && _x < 19*TILE_SIDE)&&(_y > 0 && _y < 3*TILE_SIDE))
		{
			checkNeighborhood(_x,_y);
		}
		else if ((_x > 6*TILE_SIDE && _x < 18*TILE_SIDE)&&(_y > 4*TILE_SIDE && _y < 9*TILE_SIDE))
		{
			checkNeighborhood(_x,_y);
		}
		else if ((_x > 5*TILE_SIDE && _x < 19*TILE_SIDE)&&(_y > 10*TILE_SIDE))
		{
			checkNeighborhood(_x,_y);
		}
		else if ((_x > 19*TILE_SIDE)&&(_y > 0 && _y < 6*TILE_SIDE))
		{
			checkNeighborhood(_x,_y);
		}
		else if ((_x > 19*TILE_SIDE)&&(_y > 7*TILE_SIDE ))
		{
			checkNeighborhood(_x,_y);
		}
	};

	function getPosition(){
		return {x:this.x,y:this.y}
	};	

	function updatePrice(){
		this.price *= 1.15;
	}

};