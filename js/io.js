function getPosition(event)
{
	var cX = event.x;
  	var cY = event.y;

  	var canvas = document.getElementById("canvas");
  	var len = TOWERS.length; 

  	if (TOWERS [len-1].x == -1) {
  		// Put image on center of mouse click
		TOWERS [len-1].x = cX - 30; 
  		TOWERS [len-1].y = cY - 30;
  	}
}
