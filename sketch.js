
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  paper = new Paper(100,660,20);
  box1 = new Box(400,660,30,100);
  box2 = new Box(550,660,30,100);
  box3 = new Box(470,675,150,30);
	ground = new Ground(600,height,1200,20);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  box3.display();
  box1.display();
  box2.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
    if(keyCode===UP_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-40});
        
    }
}



