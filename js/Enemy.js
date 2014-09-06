function Enemy (_enemy){
	this.health = _enemy.health;
	this.speed = _enemy.speed;
	this.image = _enemy.image;
	this.x = -1;
	this.y = CANVAS_HEIGHT/2 + 20;
	this.direction =  (Math.random()>0.5)? 0 : 1;

}

Enemy.prototype.move = function (){
	// HERE COMES THE SPAGHETTI
	if (this.x < 5*40 + 20)
		this.x += this.speed;
	else
		if (this.direction == 0)
		{
			if(this.y > 3*40+20 && this.x < 17*40+20)
				this.y -= this.speed;
			else
				if (this.x < 18*40+20)
					this.x += this.speed;
				else 
					if (this.y < 6*40 + 20)
						this.y += this.speed; 
					else
						if (this.x < 960) 
							this.x += this.speed;
						else
							return 1;
		}
		else //direction 1
		{
			if(this.y < (12-3)*40+20 && this.x < 17*40+20)
				this.y += this.speed;
			else
				if (this.x < 18*40+20)
					this.x += this.speed;
				else 
					if (this.y > 6*40 + 20)
						this.y -= this.speed; 
					else
						if (this.x < 960) 
							this.x += this.speed;
						else
							if (this.x == 960)
								return 1;
		}

		return 0;

};