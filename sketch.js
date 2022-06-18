
function setup() {
 var box = createSprite(200,200,30,30); 
  createCanvas(400,400);
}

function draw() 
{
  background("green");
  if(keyIsDown(RIGHT_ARROW)){
    box.position.X = box.position.X +5
  } 
  if(keyIsDown(LEFT_ARROW)){
    box.position.X = box.position.X -5
  }
  if(keyIsDown(UP_ARROW)){
    box.position.Y = box.position.Y +5
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.Y = box.position.Y -5
  }
drawSprites()
}




