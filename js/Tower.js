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

Tower.prototype.setPosition = function(x,y){
	this.x = x;
	this.y = y;
};