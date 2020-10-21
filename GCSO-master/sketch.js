

var car,wall;
var car1 ,wall1;


var speed, weight; 


function setup() {
  createCanvas(1600, 1600);

//createCanvas(1600, 500);
	speed=random(55,90)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);   
car1=createSprite(50, 300, 50,50); 
	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(1200,200, 60, 150)
  	wall1=createSprite(1200,400, 60, 150)
  	wall.shapeColor=color(80,80,80)
  	wall1.shapeColor="red"
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}


