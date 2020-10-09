var fixedRect, movingRect,gameObj1,gameObj2,gameObj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 gameObj1 = createSprite(800,600,60,40);
 gameObj1.shapeColor="blue";
 gameObj2 = createSprite(600,800,40,60);
 gameObj2.shapeColor="white";
 gameObj3 = createSprite(500,200,50,30);
 gameObj3.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,gameObj2)){
    movingRect.shapeColor = "red";
    gameObj2.shapeColor = "red";


  }
else{
  movingRect.shapeColor = "green";
  gameObj2.shapeColor = "white";
}

  drawSprites();
}




