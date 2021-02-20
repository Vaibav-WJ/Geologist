
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  

	ground = new Ground(600,height,1200,20)
  hammer = new Hammer(200,200,40,40)
	stone = new Stone(200,500,40,40)
  rubber = new Rubber(400,300,40)

	Engine.run(engine);
  
}


function draw() {
  
  background("cyan");
  Engine.update(engine);
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  
  drawSprites();
 
  
}



