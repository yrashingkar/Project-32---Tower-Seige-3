const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;
var a;
var slingShot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var circles=[];
function preload(){
polygonImg=loadImage("polygon.png")
}

function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
 // a=height;
  //circles.push(width/2)

 //ground1 = new Ground(400, height, 800, 20)
 ground2 = new Ground(350, 330, 250, 20)
 ground3 = new Ground(650, 550, 150, 20)
 //fill("black")
 
 //var boxcolor="red";
 fill('red')
 box1 = new Box(350,180,30,40)
 box17 = new Box(650,440,30,40)

 //boxcolor="yellow";
 fill('yellow')
 box2 = new Box(350,220,30,40)
 box5 = new Box(320,220,30,40)
 box6 = new Box(380,220,30,40)
 box18 = new Box(680,480,30,40)
 box19 = new Box(650,480,30,40)
 box20 = new Box(620,480,30,40)

//boxcolor="green";
fill('green')
 box3 = new Box(350,260,30,40)
 box7 = new Box(320,260,30,40)
 box8 = new Box(380,260,30,40)
 box12 = new Box(290,260,30,40)
 box13 = new Box(410,260,30,40)
 box21 = new Box(710,520,30,40)
 box22 = new Box(680,520,30,40)
 box23 = new Box(650,520,30,40)
 box24 = new Box(620,520,30,40)
 box25 = new Box(590,520,30,40)

//boxcolor="blue";
fill('blue')
 box4 = new Box(440,300,30,40)
 box9 = new Box(260,300,30,40)
 box10 = new Box(410,300,30,40)
 box11 = new Box(380,300,30,40)
 box14 = new Box(320,300,30,40)
 box15 = new Box(290,300,30,40)
 box16 = new Box(350,300,30,40)

/* 
 var boxcolor="red";
 box1 = new Box(350,180,30,40, boxcolor)
 box17 = new Box(650,440,30,40, boxcolor)

 boxcolor="yellow";
 box2 = new Box(350,220,30,40,boxcolor)
 box5 = new Box(320,220,30,40,boxcolor)
 box6 = new Box(380,220,30,40,boxcolor)
 box18 = new Box(680,480,30,40,boxcolor)
 box19 = new Box(650,480,30,40,boxcolor)
 box20 = new Box(620,480,30,40,boxcolor)

boxcolor="green";
 box3 = new Box(350,260,30,40,boxcolor)
 box7 = new Box(320,260,30,40,boxcolor)
 box8 = new Box(380,260,30,40,boxcolor)
 box12 = new Box(290,260,30,40,boxcolor)
 box13 = new Box(410,260,30,40,boxcolor)
 box21 = new Box(710,520,30,40,boxcolor)
 box22 = new Box(680,520,30,40,boxcolor)
 box23 = new Box(650,520,30,40,boxcolor)
 box24 = new Box(620,520,30,40,boxcolor)
 box25 = new Box(590,520,30,40,boxcolor)

boxcolor="blue";
 box4 = new Box(440,300,30,40,boxcolor)
 box9 = new Box(260,300,30,40,boxcolor)
 box10 = new Box(410,300,30,40,boxcolor)
 box11 = new Box(380,300,30,40,boxcolor)
 box14 = new Box(320,300,30,40,boxcolor)
 box15 = new Box(290,300,30,40,boxcolor)
 box16 = new Box(350,300,30,40,boxcolor)
 */
 ball=Bodies.circle(50,200,20)
 World.add(world,ball)

 slingShot = new SlingShot(this.ball,{x:100,y:200});
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  //a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 

  /*
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
*/
text("Score: "+score,750,40)
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
box22.score();
box23.score();
box24.score();
box25.score();

ground2.display();
ground3.display();

slingShot.display();
imageMode(CENTER)
image(polygonImg,ball.position.x,ball.position.y,40,40)
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 //drawSprites();
}

/* function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
 */
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.ball)
  }
}