
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3


function setup() {
	createCanvas(800, 700);
    
	log1=createSprite(670,670,20,140);
	log1.shapeColor="red"
	log2=createSprite(530,670,20,140)
	log2.shapeColor="red"
	log3=createSprite(600,690,140,20)
	log3.shapeColor="red"
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



