var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
 var gameState = "start";
 
function setup() {
  createCanvas(650, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=1000; k = k + 65) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 20; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 20; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
 
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  /*if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }*/
  //display the paricles
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  } 
  textSize(20);
  text("500", 15,520);
  textSize(20)
  text("500", 80,520);
  textSize(20);
  text("500", 145,520);
  textSize(20);
  text("500", 210,520);
  textSize(20);
  text("100", 275,520);
  textSize(20);
  text("100", 340,520);
  textSize(20);
  text("100", 405,520);
  textSize(20);
  text("200", 470,520);
  textSize(20);
  text("200", 540,520);
  textSize(20);
  text("200", 600,520);
  textSize(25);
  text("score"+score, 20,50);

  if(gameState==="end"){
    fill("pink");
    textSize(80);
    text("GameOver",150,360)
  }
 if(particle!=null){
    particle.display();
       if(particle.body.position.y>760){
         if(particle.body.position.x<240){
           score = score+500;
           particle = null;
             if(turn>=5)gameState = "end";
         }else 
         if(particle.body.position.x<600 && particle.body.position.x>301){
          score = score+100;
          particle = null;
            if(turn>=5)gameState = "end";
         }else 
         if(particle.body.position.x<900 && particle.body.position.x>601){
          score = score+200;
          particle = null;
            if(turn>=5)gameState = "end";
         }
 }
  }

 
}
function keyPressed(){
  if(keyCode===32){
  
  if(gameState!=="end"){
    turn++;
    particle = new Particle(mouseX,10,10,10)
  }
  }
}