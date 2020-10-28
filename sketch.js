const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbin1, bob1, groundObject, sling1;
var world, bob2, bob3, bob4, rope1, rope2, rope3, rope4, line1;

function preload() {}

function setup() {
  createCanvas(700, 500);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  //garbage1=new Garbage(900,375,20,170);
  //garbage2=new Garbage(700,375,20,170);
  //garbage3=new Garbage(800,450,218,20);

  groundObject = new Ground(width / 2, 60, 300, 25);

  bob1 = new Bob(220, 300, 65);
  bob2 = new Bob(380, 300, 65);
  bob3 = new Bob(300, 300, 65);
  bob4 = new Bob(460, 300, 65);
  //groundObject2 = new Ground(width / 2, 400, width, 17);
  /*var render = Render.create({s
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	}); */

  //Create a Ground
  // rope4 = new Rope(bob4.body, box4.body, -50 * 2, 0);
  rope1 = new Rope(bob1.body, groundObject.body, -130, 0);
  rope2 = new Rope(bob2.body, groundObject.body, 30, 0);
  rope3 = new Rope(bob3.body, groundObject.body, -50, 0);
  rope4 = new Rope(bob4.body, groundObject.body, 110, 0);
  // var chain4 = new Chain(groundObject.body, bob1.body);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("gray");

  bob1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  bob4.display();
  bob2.display();
  bob3.display();

  //groundObject2.display();

  groundObject.display();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -220, y: -200 });
  }
}
