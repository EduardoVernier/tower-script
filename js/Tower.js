// This pattern is introduced in Doug Crackford’s legendary book, JavaScript: The Good Parts.
var Tower = function (){
	// Public Variables
	this.radius;
	this.impactForce;
	this.cooldown;
	this.color;
	this.image;
	this.simultaneousTargets;	
	this.price;	
	// Private Variables
	var x = -1; 
	var y = -1;

	return {
		initialize: function (_tower){
			this.radius = _tower.radius;
			this.impactForce = _tower.impact;
			this.cooldown = _tower.cooldown;
			this.color = _tower.color;
			this.image = _tower.image;
			this.simultaneousTargets = _tower.simultaneousTargets;	
			this.price = _tower.price;
			x = -1; // Private Variables
			y = -1;
		},

		setPosition: setPosition,
		getPosition: getPosition
	}

//	function setPosition (_x,_y){
//		x = _x; y = _y; 
//	}



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

			if (insideNeighborFlag === false){
				x = _x; y = _y;
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
		else if ((_x > 19*TILE_SIDE)&&(y > 0 && _y < 6*TILE_SIDE))
		{
			checkNeighborhood(_x,_y);	
		}
		else if ((_x > 19*TILE_SIDE)&&(_y > 7*TILE_SIDE ))
		{
			checkNeighborhood(_x,_y);
		}
	};

	function getPosition(){
		return {x:x,y:y}
	};

};



