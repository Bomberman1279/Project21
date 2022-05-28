
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic : false ,
		restitiution : 0.3,
		friction : 0,
		density : 1.2
	}
	ball = Matter.Bodies.circle(260,100,20,ball_options)
	World.add(world,ball)

	//Create the Bodies Here.
    groundObj= new Ground(width/2,670,width,20);
	leftside = new Ground(1100,600,20,120);
	rightside= new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  groundObj.display()
  leftside.display()
  rightside.display()
  drawSprites();
 
}



