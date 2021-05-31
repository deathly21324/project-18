var ship,shipImg,sea,seaImg
function preload(){
shipImg=loadAnimation("ship1.png","ship2.png")
seaImg=loadImage("sea.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  sea=createSprite(windowWidth/2,windowHeight/2,40,40)
  sea.addImage(seaImg)
  sea.scale=0.5
  ship=createSprite(windowWidth/4,windowHeight-70,40,40)
  ship.addAnimation("sailing",shipImg)
 ship.scale=0.09
   
  
  
}

function draw() {
  background("blue");
  sea.velocityX=-10
  if(sea.x<0){
    sea.x=width/2
 }
  
 drawSprites()
}