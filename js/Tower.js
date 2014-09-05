function Tower (radius, impact, velocity){
	this.radius = radius;
	this.impactForce = impact;
	this.velocity = velocity;
	this.image;
	this.x = -1;
	this.y = -1;
}

Tower.prototype.setPosition = function(x,y){
	this.x = x;
	this.y = y;
};