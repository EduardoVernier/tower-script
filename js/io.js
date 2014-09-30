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
    var len = towerList.length; 

    var temp =  towerList [len-1].getPosition();

    if (len > 0 && temp.x == -1) {
    //towerList [len-1].x = cX -9; 
    //towerList [len-1].y = cY -9;
      towerList [len-1].setPosition (cX-9, cY-9);
      cursorStyle = 0;
    }
};

function mouseMonitor(event){
  mouseX = event.x ;
  mouseY = event.y ;
}

function float2int (value) {
    return value | 0;
};
