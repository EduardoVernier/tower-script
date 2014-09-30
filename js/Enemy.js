
function Enemy (_enemy){
	this.health = _enemy.health;
	this.speed = _enemy.speed;
	this.image = _enemy.image;
	this.x = -1;
	this.y = CANVAS_HEIGHT/2 + TILE_SIDE/2;
	this.direction =  (Math.random()>0.5)? 0 : 1;

}

Enemy.prototype.move = function (){
	// HERE COMES THE SPAGHETTI
	if (this.x < 5*TILE_SIDE + TILE_SIDE/2)
		this.x += this.speed;
	else if (this.direction == 0){
			if(this.y > 3*TILE_SIDE+TILE_SIDE/2 && this.x < 17*TILE_SIDE+TILE_SIDE/2)
				this.y -= this.speed;
			else if (this.x < 18*TILE_SIDE+TILE_SIDE/2)
				this.x += this.speed;
			else if (this.y < 6*TILE_SIDE + TILE_SIDE/2)
				this.y += this.speed; 
			else if (this.x < CANVAS_WIDTH) 
				this.x += this.speed;
			else return 1;
		}
		else //direction 1
		{
			if(this.y < (12-3)*TILE_SIDE+TILE_SIDE/2 && this.x < 17*TILE_SIDE+TILE_SIDE/2)
				this.y += this.speed;
			else if (this.x < 18*TILE_SIDE+TILE_SIDE/2)
				this.x += this.speed;
			else if (this.y > 6*TILE_SIDE + TILE_SIDE/2)
				this.y -= this.speed; 
			else if (this.x < CANVAS_WIDTH) 
				this.x += this.speed;
			else if (this.x == CANVAS_WIDTH)
				return 1;
		}

		return 0;
};