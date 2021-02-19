var fixedRect, movingRect
var rect1,rect2 
function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="white";

 fixedRect.debug=true;
 
 movingRect= createSprite(400, 200, 50, 50);
 movingRect.shapeColor="white";

 movingRect.debug=true;
 rect1=createSprite(300,100,25,25);
 rect1.shapeColor="yellow";
 
 rect2=createSprite(150,50,25,25);
 rect2.shapeColor="green";
}

function draw() {
 
  background("red");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2);
  
  if (isTouching(movingRect,rect1)) {
    rect1.shapeColor="black";
    movingRect.shapeColor="black";
  } else {
    rect1.shapeColor="white";
    movingRect.shapeColor="white";
  }
    drawSprites();
}
function isTouching(object1,object2) { 
  if (object1.x-object2.x < object1.width/2+object2.width/2 && 
    object2.x -object1.x < object2.width/2 +object1.width/2 && 
    object1.y-object2.y < object1.height/2+object2.height/2 && 
    object2.y - object1.y < object2.height/2 + object1.height/2) {
   return true;
  } else {
   
return false;
  }
}
