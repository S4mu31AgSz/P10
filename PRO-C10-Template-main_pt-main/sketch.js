var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("seaa.png");
  shipImg1 = loadAnimation("000.png","001.png","002.png","003.png","004.png","005.png","006.png","007.png","008.png","008.png","008.png",
  "007.png","006.png","005.png","004.png","003.png","002.png","001.png","000.png","000.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Movendo o fundo
  sea=createSprite(-300,200);
  sea.addImage(seaImg);
  sea.velocityX = 5;
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = 3;
  ship.x=250;

 // código para redefinir o fundo
  if(sea.x > 1095-400){
    sea.x = -300;
  }
    
  drawSprites();
}