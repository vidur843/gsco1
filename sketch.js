var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2)
  car.velocityX= speed;
  deformation:0.5*weight*speed*speed/22500

  if(deformation<100)     {
    car(0,255,0);
  }

  if(deformation>100&&deformation<180)    {
    car(230,230,0);
  }


  if(deformation>180)    {
     car(255,0,0);
  }

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}