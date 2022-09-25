

function preload(){

   seaImg = loadImage("sea.png");

   shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

   spriteName.addImage(seaImg);

}


function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background(seaImg);
    

 if(shipImg1.x < 0) {
  shipImg1.x = shipImg1.widht/2;
 }

 drawSprites();
}
