const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,b1,b2,b3;
var ground,groundSprite;
var Ball2;
var ball_IMG;
function preload()
{
  Dustbin_Img=loadImage("Dustbin_Img.png")
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
	 
	ground= new Ground(450, 380, 1200, 20)
  Ball=new Paper(100,100)

  b1 = Bodies.rectangle(550, 331, 20, 80 , {isStatic:true} );
  World.add(world, b1);

  b1Sprite=createSprite(600,331,20,60)
  b1Sprite.shapeColor=color("white");
  b2 = Bodies.rectangle(620,361,120,20, {isStatic:true} );
  World.add(world, b2);

  b2Sprite=createSprite(630,361,80,20)
  b2Sprite.shapeColor=color("white");

  b3 = Bodies.rectangle(680,331,20,60, {isStatic:true} );
  World.add(world, b3);

  b3Sprite=createSprite(680,331,20,80)
  b3Sprite.shapeColor=color("white");

  dustbin=createSprite(640,278,100,80)
  dustbin.addImage(Dustbin_Img)
  dustbin.scale=0.4
	Engine.run(engine);

}


function draw() {
	background("black");  
	
	Engine.update(engine);

	
	ground.display();
	Ball.display();
	drawSprites();
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(Ball.body,Ball.body.position,{x:10,y:-10});
}
}