const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy,boyImg;
var tree;
var stone;
//var mango1,mango2,mango3,mango4,mango5,mango6;




function preload()
{
	boyImg=loadImage("boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   boy=createSprite(200,550,30,10)
   boy.addImage(boyImg)
   boy.scale=0.1

   ground = new Ground(600,height,1200,20);

   tree=new Tree(400,300,400,400)
   tree.scale=7000;

   stone= new Stone(180,300,80,80)

   mango1 = new Mango(740,450,30);
   mango2 = new Mango(470,430,30);
	mango3 = new Mango(640,330,30);
	mango4 = new Mango(630,470,30);
	mango5 = new Mango(580,400,30);

	sling = new SlingShot(stone.body,{x:150, y:500});

 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  boy.display();
  ground.display();
  tree.display();
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display()
  mango5.display();


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);
	}
}



