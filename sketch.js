const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine , world

var ball;

var rope;

var ground1  ,ground2 , ground3;

var block1 , block2 , block3 , block4 , block5 , block6 , block7, block8  , block9 , block10,
  block11 , block12 , block13 , block14 , block15 , block16 , block17 , block18 , block19,
  block20 , block21 , block22 , block23 , block24 , block25 , block26 , block27 , block28,
  block29 , block30;

var score = 0


function setup() {
  createCanvas(1200,700);
 
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(200 , 350 , 40);

  rope = new Rope(ball.body , {x: 150 , y: 350});

  ground1 = new Ground(600 , 400 , 300 , 10);
  ground2 = new Ground(1000,  200 ,300 , 10);
  ground3 = new Ground(600 , 690 , 2400 , 50);

  block1 = new Block(500 , 380);
  block2 = new Block(550 , 380);
  block3 = new Block(600 , 380);
  block4 = new Block(650, 380);
  block5 = new Block(700 , 380);
  block6 = new Block(525 , 360);
  block7 = new Block(575 , 360);
  block8 = new Block(625 , 360);
  block9 = new Block(675 , 360);
  block10 = new Block(550 , 340);
  block11 = new Block(600 , 340);
  block12 = new Block(650 , 340);
  block13 = new Block(575 , 320);
  block14 = new Block(625 , 320);
  block15 = new Block(600 , 300);

  block16 = new Block(900 , 180);
  block17 = new Block(950 , 180);
  block18 = new Block(1000 , 180);
  block19 = new Block(1050 , 180);
  block20 = new Block(1100 , 180);
  block21 = new Block(925  , 160);
  block22 = new Block(975 , 160);
  block23 = new Block(1025 , 160);
  block24 = new Block(1075 , 160);
  block25 = new Block(950 , 140);
  block26 = new Block(1000 , 140);
  block27 = new Block(1050 ,140);
  block28 = new Block(975 , 120);
  block29 = new Block(1025 , 120);
  block30  = new Block(1000 , 100); 
}

function draw() {
  background(10);  

  Engine.update(engine);

  ball.display();

  rope.display();

  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block17.score();
  block17.display();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  block25.display();
  block25.score();
  block26.display();
  block26.score();
  block27.display();
  block27.score();
  block28.display();
  block28.score();
  block29.display();
  block29.score();
  block30.display();
  block30.score();

  textSize(20)
  text("score: " + score , 900 , 50);
  
}

function mouseDragged()
{
   Matter.Body.setPosition(ball.body , {x: mouseX , y: mouseY});
}

function mouseReleased()
{
  rope.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    rope.attach(ball);
  }
} 