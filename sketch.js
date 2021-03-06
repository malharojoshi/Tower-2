const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var platform;

function preload() {}

function setup() {
  var canvas = createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, width, 50);
  polygon = new Polygon(270, 400, 70, 40);
  //row 1
  box1 = new Box(450, 560, 70, 40, "red");
  box2 = new Box(525, 560, 70, 40, "blue");
  box3 = new Box(600, 560, 70, 40, "orange");
  box4 = new Box(675, 560, 70, 40, "red");
  box5 = new Box(750, 560, 70, 40, "blue");
  //row 2
  box6 = new Box(490, 520, 70, 40, "orange");
  box7 = new Box(565, 520, 70, 40, "red");
  box8 = new Box(635, 520, 70, 40, "blue");
  box9 = new Box(710, 520, 70, 40, "orange");
  //row 3
  box10 = new Box(525, 480, 70, 40, "red");
  box11 = new Box(600, 480, 70, 40, "blue");
  box12 = new Box(675, 480, 70, 40, "orange");
  //row 4
  box13 = new Box(565, 440, 70, 40, "red");
  box14 = new Box(635, 440, 70, 40, "blue");
  // row 5
  box15 = new Box(600, 400, 70, 40, "orange");
  chain = new Chain(polygon.body, { x: 200, y: 350 });
}

function draw() {
  background(180);
  Engine.update(engine);
  polygon.display();

  //row 1
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  //row 2
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  //row 3
  box10.display();
  box11.display();
  box12.display();
  //row 4
  box13.display();
  box14.display();
  // row 5
  box15.display();
  ground.display();
  chain.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  chain.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    chain.attach(polygon.body);
  }
}
