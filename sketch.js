var target;
var arrow;
var arrowImg;
var finalPoint;
var finalPointImg;
var man;
var manImg;
var arrowGroup;
var score = 0 ;
var instructionText

function preload(){
arrowImg = loadImage("arrow.png");
finalPointImg = loadImage("circle.png");
manImg = loadImage("boy_and_bow.png")
}
function setup() {
  createCanvas(800,300);

  finalPoint = createSprite(770,150,20,20);
  finalPoint.addImage(finalPointImg);
  finalPoint.scale =0.2
  finalPoint.velocityY = 3;

  target = createSprite(780, height/2, 20, 200);
  target.velocityY = 3;
  target.shapeColor = "black"

  man = createSprite(100,150,10,10);
  man.addImage(manImg)
  man.scale = 0.8;

  arrow = createSprite(100,100,10,10);
  arrow.addImage(arrowImg)
  arrow.scale = 0.3;

  arrowGroup= new Group();
}

function draw() {
  background(rgb(0,255,255)); 

  edges = createEdgeSprites();
  finalPoint.bounceOff(edges);
  
  target.bounceOff(edges);

  fill(0)
  textFont('Loopiejuice Regular');
  textSize(20)
  instructionText = text("Note-Press Space To  Aim the blue target",50,30);

  finalPoint.y = target.y


  if(keyDown("space")){
    createArrow();
    instructionText.visibility = false;
  }

  if(arrowGroup.isTouching(finalPoint)){
    score = score + 10
    arrowGroup.destroyEach()
  }
  if(arrowGroup.isTouching(target)){
    score = score + 5
    arrowGroup.destroyEach()
  }
  fill(0)
  textSize(20)
  textFont('Loopiejuice Regular');
  text("Score : " + score , width/2 , 50)
  drawSprites();
}

function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImg);
  arrow.x = 100;
  arrow.y = 100;
  arrow.velocityX = 15;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}
