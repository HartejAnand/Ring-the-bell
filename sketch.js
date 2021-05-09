var red1,red2,yellow1,yellow2,green;
var hit;
var wall1,wall2;
var bell,base;
var gravity=0;
var scored=false;
var ring;

function setup() {
  createCanvas(400,600);
  red1=createSprite(100,525,60,50);
  red1.shapeColor=rgb(255,0,0);
  red2=createSprite(300,525,60,50);
  red2.shapeColor=rgb(255,0,0);
  yellow1=createSprite(242,525,60,50);
  yellow1.shapeColor=rgb(255,255,0);
  yellow2=createSprite(158,525,60,50);
  yellow2.shapeColor=rgb(255,255,0);
  green=createSprite(200,525,25,50);
  green.shapeColor=rgb(0,255,0);

  wall1=createSprite(0,525,150,50);
  wall1.shapeColor=rgb(0,0,255);
  wall2=createSprite(400,525,150,50);
  wall2.shapeColor=rgb(0,0,255);

  hit=createSprite(200,525,10,50);
  hit.shapeColor=rgb(155,0,255);
  hit.velocityX=15;

  base=createSprite(200,425,40,10);

  bell=createSprite(200,350,30,30);
  bell.visible=false;


}

function draw() {
  background(0,0,255);

  bell.velocityY=gravity;

  if(gravity<=10){
    gravity++;
  }

  hit.bounceOff(wall1);
  hit.bounceOff(wall2);

  base.y=425;
  bell.bounce(base);

  noStroke();
  fill(255,0,0);
  rect(150,50,100,400);
  rect(100,425,200,50);

  fill(255,255,255);
  rect(180,50,40,375);

  fill(0,0,0);
  text("100\n\n90\n\n80\n\n70\n\n60\n\n50\n\n40\n\n30\n\n20\n\n10\n\n0",155,115);

  drawSprites();

  

  noStroke();
  fill(150,150,150);
  ellipse(bell.x,bell.y,30,30);

  fill(200,200,200);
  ellipse(200,50,100,100);
  stroke(100,100,100);
  ellipse(200,50,25,25);
  strokeWeight(3);
  point(200,50);


  if(bell.y<115){
    background(255,0,0);
    textSize(90);
    fill(0,0,255);
    noStroke();
    text("  YOU\n  WIN\n    ...\n  Wait\n for it...",50,100);
  }


}

function mouseClicked(){
    if((hit.isTouching(red1) || hit.isTouching(red2)) && bell.y>=405){
      gravity=random(-10,-5);
    }

    if((hit.isTouching(yellow1) || hit.isTouching(yellow2)) && bell.y>=405){
      gravity=random(-13,-18);
    }

    if(hit.isTouching(green) && bell.y>=405){
      gravity=-28;
    }
};