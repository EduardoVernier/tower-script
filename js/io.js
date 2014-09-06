function setCanvas (){
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;
	canvas.addEventListener("mousedown", canvasClick, false);
	canvas.addEventListener('mousemove', mouseMonitor);
	document.body.appendChild(canvas);
};


function canvasClick(event)
{
	var cX = event.x;
  	var cY = event.y;

  	var canvas = document.getElementById("canvas");
  	var len = TOWERS.length; 

  	if (len > 0 && TOWERS [len-1].x == -1) {
		TOWERS [len-1].x = cX -9; 
  		TOWERS [len-1].y = cY -9;
  		CURSOR_STYLE = 0;
  	}
};

function mouseMonitor(event){
	mouseX = event.x ;
  	mouseY = event.y ;
}

function float2int (value) {
    return value | 0;
};

