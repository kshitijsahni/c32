const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var b1;
var B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,B11;
var polygon_img,ball;
var ss;

var score=0
var backgroundImg;
var bg,bg2

function preload(){
    getTime()
polygon_img=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //bodies
    ground1=new Ground(530,496,250,20)
    ground2=new Ground(850,400,190,20)
    ground3=new Ground(600,590,1200,20)

    //base
    b1=new blue(440,495,30,40)
    b2=new blue(470,495,30,40)
    b3=new blue(500,495,30,40);
    b4=new blue(530,495,30,40);
    b5=new blue(560,495,30,40);
    b6=new blue(590,495,30,40);
    b7=new blue(620,495,30,40);
    B1=new blue(790,399,30,40);
    B2=new blue(820,399,30,40);
    B3=new blue(850,399,30,40);
    B4=new blue(880,399,30,40);
    B5=new blue(910,390,30,40);

    //second
    b8=new pink(470,420,30,40)
    b9=new pink(500,420,30,40)
    b10=new pink(530,420,30,40)
    b11=new pink(560,420,30,40)
    b12=new pink(590,420,30,40)
    B6=new pink(820,326,30,40)
    B7=new pink(850,326,30,40)
    B8=new pink(880,326,30,40)

    //third
    b13=new green(500,345,30,40);
    b14=new green(530,345,30,40);
    b15=new green(560,345,30,40);
    B9=new block(850,300,30,40)

    //top
    b16=new block(530,320,30,40)

    //polygon
    ball = Bodies.circle(100,400,20);
  World.add(world,ball);

    ss=new SlingShot(this.ball,{x:100,y:400})
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    textSize(20);
    fill("red")
    text("Score:"+ score,1000,50)
    textSize(20);
    fill("red")
    text("Drag the Hexagonal stone and Release it,to launch it towards the blocks",230,50)
    imageMode(CENTER)
    image(polygon_img,ball.position.x,ball.position.y,55,55)
    getTime();
    Engine.update(engine)

    ground1.display()
    ground2.display();
    ground3.display();

    b1.display();
    b1.score()
    b2.display();
    b2.score()
    b3.display();
    b3.score()
    b4.display();
    b4.score()
    b5.display();
    b5.score()
    b6.display();
    b6.score()
    b7.display();
    b7.score()
    b8.display();
    b8.score()
    b9.display();
    b9.score()
    b10.display();
    b10.score()
    b11.display();
    b11.score()
    b12.display();
    b12.score()
    b13.display();
    b13.score()
    b14.display();
    b14.score()
    b15.display();
    b15.score()
    b16.display();
    b16.score()
    B1.display();
    B1.score()
    B2.display();
    B2.score()
    B3.display();
    B3.score()
    B4.display();
    B4.score()
    B5.display();
    B5.score()
    B6.display();
    B6.score()
    B7.display();
    B7.score()
    B8.display();
    B8.score()
    B9.display();
    B9.score()

    ss.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    ss.fly();
}

function keyPressed(){
    if(keyCode===32){
        ss.attach(this.ball)
    }
}

async function getTime(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON=await response.json()
    console.log(responseJSON)
    console.log(responseJSON.datetime)
    var datetime=responseJSON.datetime
    var hour=datetime.slice(11,13)
    console.log(hour)
    if(hour>=06 && hour <=19)
{
    bg="bg.png"
}
else
{
    bg1="bg2.png"
}
backgroundImg=loadImage(bg)

}