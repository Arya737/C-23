const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundSprite, ground;
var side1, side2, bottom, side1Sprite, side2Sprite, bottomSprite;


function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	side1Sprite = createSprite(270, 610, 20, 100, {isStatic: true});
	side1Sprite.shapeColor = color(254, 0, 0);

	side2Sprite = createSprite(490, 610, 20, 100, {isStatic: true});
	side2Sprite.shapeColor = color(254, 0, 0);

	bottomSprite = createSprite(380, 650, 200, 20, {isStatic: true});
	bottomSprite.shapeColor = color(254, 0, 0);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.55, isStatic:true});
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	side1 = Bodies.rectangle(270, 610, 20, 100 , {isStatic:true} );
 	World.add(world, side1);

	

	side2 = Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
 	World.add(world, side2);

	
	bottom = Bodies.rectangle(380, 650, 200, 20 , {isStatic:true} );
 	World.add(world, bottom);

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
    
  }
}



