const World = Matter.World 
const Engine = Matter.Engine
const Bodies = Matter.Bodies




var engine,world,object,ground
var box1,box2,ground
function setup() {
 createCanvas(800,700);
engine =Engine.create();
world = engine.world;

//object = Bodies.rectangle(100,100,500,50);
//World.add(world,object);
box1 = new box(200,200,50,50)
box2 = new box(100,120,20,20)
ground = new Ground(100,500,1450,10) 
//var options={
//isStatic : true
//}

//ground = Bodies.rectangle(200,400,10000,50,options)
//World.add(world,ground);

}




function draw() {
  background(0);  
 Engine.update(engine);
 console.log(box2.body.position.x);
 console.log(box2.body.position.y);
 console.log(box2.body.angle);
 box1.display();
 box2.display();
 ground.display();
 //rectMode(CENTER)
  //rect(object.position.x,object.position.y,50,50);
  //rect(ground.position.x,ground.position.y,500,50)
}