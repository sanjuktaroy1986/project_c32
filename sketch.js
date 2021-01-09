const Bodies=Matter.Bodies;
const Engine=Matter.Engine
const World=Matter.World;

var engine,world;

var stand1,stand2;

var b1,b2,b3,b4,b5,b6,b7,b8;
var b9,b10,b11,b12,b13,b14,b15,b16;

var t1,t2,t3,t4,t5,t6,t7,t8,t9;

var poly,polyimg,backgroundImg;

var sling;
var score=0;

function preload(){
  getimage();
  polyimg=loadImage("hexagon.png")
  backupimg=loadImage("bg.png")
}


function setup() {

  createCanvas(800,500);

  myengine=Engine.create();
  myworld=myengine.world; 

  poly=Bodies.circle(100,250,25,{restitution:0.1,density:1})
  World.add(myworld,poly);

  sling=new Slingshot(poly, {x:100,y:200})

  stand1=new Ground(330,370,300,10);
  stand2=new Ground(630,170,200,10);
  floor=new Ground(400,490,800,20)
  
  t1=new Box(570,140);
  t2=new Box(600,140);
  t3=new Box(630,140);
  t4=new Box(660,140);
  t5=new Box(690,140);

  t6=new Box(600,100);
  t7=new Box(630,100);
  t8=new Box(660,100);

  t9=new Box(630,60);

  b1=new Box(240,340);
  b2=new Box(270,340);
  b3=new Box(300,340);
  b4=new Box(330,340);
  b5=new Box(360,340);
  b6=new Box(390,340);
  b7=new Box(420,340);

  b8=new Box(270,300);
  b9=new Box(300,300);
  b10=new Box(330,300);
  b11=new Box(360,300);
  b12=new Box(390,300);

  b13=new Box(300,260);
  b14=new Box(330,260);
  b15=new Box(360,260);

  b16=new Box(330,220);

  }

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }

   else{
   background(backupimg);
  }

  textSize(30);
    fill("white")
    text("Score: "+score,600,450)

  Engine.update(myengine);

  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  text("Press Space for another chance", 300, 60);

  imageMode(CENTER)
  image(polyimg,poly.position.x,poly.position.y,60,60)

  stand1.display();
  stand2.display();
  floor.display();

  b16.display();

  fill("lightblue");

  t1.display();
  t2.display();
  t3.display();
  t4.display();
  t5.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

 fill("skyblue")
 t6.display();
 t7.display();
 t8.display();

 b13.display();
 b14.display();
 b15.display();

  fill("pink")
  t9.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  t1.getscore();
  t2.getscore();
  t3.getscore();
  t4.getscore();
  t5.getscore();
  t6.getscore();
  t7.getscore();
  t8.getscore();
  t9.getscore();

  b1.getscore()
  b2.getscore()
  b3.getscore()
  b4.getscore()
  b5.getscore()
  b6.getscore()
  b7.getscore()
  b8.getscore()
  b9.getscore()
  b10.getscore()
  b11.getscore()
  b12.getscore()
  b13.getscore()
  b14.getscore()
  b15.getscore()
  b16.getscore()



  
  sling.display();

  
}

function mouseDragged(){

  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY})
}

function mouseReleased(){

  sling.fly();
}

function keyPressed(){

  if (keyCode===32){
    sling.attach(poly)
    Matter.Body.setPosition(poly,{x:100,y:250})
  }

}

async function getimage(){

  /* var response=await fetch("http://worldclockapi.com/api/json/est/now");
   var responseJSON=await response.json();
   console.log(responseJSON);
   var datetime=responseJSON.currentDateTime
   console.log(datetime)*/
   
   var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
   var responseJSON=await response.json();
   console.log(responseJSON);
   var datetime=responseJSON.datetime
   console.log(datetime)
   
   var hour=datetime.slice(11,13)
   console.log(hour)
 
   if(hour>=06 && hour<=18){
     bg="bg.png"
   }
 
   else {
    bg="bg_night.jpg"
   }
 
   backgroundImg=loadImage(bg);
 
 }