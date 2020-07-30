
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5,ground,rope1,rope2,roof,rope3,rope4,rope5;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var  ground_option={
		isStatic:true
	  }
	  ground = createSprite(400, 690,800, 50 ,ground_option );
	   World.add(world, ground);
	 
	  bobObject1=new Bob(300,500,20)
	  bobObject2=new Bob(340,500,20)
	  bobObject3=new Bob(380,500,20)
	  bobObject4=new Bob(420,500,20)
	  bobObject5=new Bob(460,500,20)

	roof=new Roof(380,300,10,30)


	 rope1=new rope(bobObject3.body,roof.body,bobObject1*2,0)
	 rope2=new rope(bobObject4.body,roof.body,bobObject1*2,0)
	 rope3=new rope(bobObject5.body,roof.body,bobObject1*2,0) 
	 rope4=new rope(bobObject1.body,roof.body,bobObject1*2,0)
	 rope5=new rope(bobObject2.body,roof.body,bobObject1*2,0)
	 
	 
  Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(201,82,17);
  Engine.update(engine);
 
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  text(mouseX+ ":" +mouseY,10,15);
}





