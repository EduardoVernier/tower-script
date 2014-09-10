function Tower (_tower){
	this.radius = _tower.radius;
	this.impactForce = _tower.impact;
	this.cooldown = _tower.cooldown;
	this.color = _tower.color;
	this.image = _tower.image;
	this.simultaneousTargets = _tower.simultaneousTargets;	
	this.price = _tower.price;
	this.x = -1;
	this.y = -1;
}

Tower.prototype.checkNeighborhood = function(x,y){
	function euclideanDistance (x1,y1,x2,y2){
		return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
	};

	var insideNeighborFlag = false;

	towerList.forEach(function (obj){			
		if (euclideanDistance(obj.x,obj.y,x,y) < 30 ) // Set 30 as constant
			insideNeighborFlag = true;		
	});

	if (insideNeighborFlag === false){
		this.x = x;
		this.y = y;		
	}

};

Tower.prototype.setPosition = function(x,y){
	// Check if inside one of the valid "blocks"
	if ((x > 0 && x < 5*TILE_SIDE)&&(y > 0 && y < 6*TILE_SIDE))
	{
		this.checkNeighborhood(x,y);	
	}
	else if ((x > 0 && x < 5*TILE_SIDE)&&(y > 7*TILE_SIDE ))
	{
		this.checkNeighborhood(x,y);
	}
	else if ((x > 5*TILE_SIDE && x < 19*TILE_SIDE)&&(y > 0 && y < 3*TILE_SIDE))
	{
		this.checkNeighborhood(x,y);	
	}
	else if ((x > 6*TILE_SIDE && x < 18*TILE_SIDE)&&(y > 4*TILE_SIDE && y < 9*TILE_SIDE))
	{
		this.checkNeighborhood(x,y);	
	}
	else if ((x > 5*TILE_SIDE && x < 19*TILE_SIDE)&&(y > 10*TILE_SIDE))
	{
		this.checkNeighborhood(x,y);	
	}
	else if ((x > 19*TILE_SIDE)&&(y > 0 && y < 6*TILE_SIDE))
	{
		this.checkNeighborhood(x,y);	
	}
	else if ((x > 19*TILE_SIDE)&&(y > 7*TILE_SIDE ))
	{
		this.checkNeighborhood(x,y);
	}
};



