
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var ground;
var PLAY=1;
var END=0;
var gameState=PLAY;
var score=0;
//var Points=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
   
  createCanvas(600,600);
   foodGroup=createGroup();
  obstacleGroup=createGroup();
  
 
  
monkey=createSprite(80,315,30,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,1000,10);
  ground.velocityX=-7;
  ground.x=ground.width/2;
  console.log(ground.x);
}


function draw() {
  
   background ("white");
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time : "+survivalTime,100,50);
   
   stroke("white");
  textSize(20);
 // fill("white");
  text(" Score:"+score,500,50);
  console.log(score);
  
  
  if(gameState===PLAY){
  survivalTime=Math.ceil(frameCount/frameRate());
    
    
   if(monkey.isTouching(foodGroup)){
      
     score=score+1;
     banana.visible=false;
     console.log(score);
      }
  
    if(ground.width>0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&& monkey.y >= 220){
    monkey.velocityY=-10;
   
  }
   monkey.velocityY = monkey.velocityY + 0.8
  

 monkey.collide(ground);
  
  
   spawnfood();
  spawnobstacles();
  
 
  drawSprites();
 
  if(monkey.isTouching(obstacleGroup)){
    
    gameState=END;
  }
 
     }

  
    if(gameState===END){
     textSize(30);
    text("Game Over",300,300);
   // reset();
    
  }

}

function spawnfood(){
    if(frameCount%100===0){
      banana=createSprite(300,random(100,300));
      banana.velocityX=-10;
      banana.addImage(bananaImage);
      banana.scale=0.1;
      foodGroup.add(banana);
      
}
}

function spawnobstacles(){
  if(frameCount%100===0){
    obstacle=createSprite(random(350,500),315);
    obstacle.velocityX=-10;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.20;
    obstacleGroup.add(obstacle);
  }
}

function reset(){
  monkey.x=80;
  monkey.y=315;
  gameState=PLAY;
  
  
}



