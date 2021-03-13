var garden,basket,basketball,soccer,sportball, score;
var gardenImg,basketImg,basketballImg,soccerImg,sportballImg,play=1,end=0,obstacle1,obstacle2,obstacle3;
var obstacle1Img,obstacle2Img,obstaccle3Img;
var background1;
var background1Img;
var playbutton,playbuttonImg;
var gameover,gameoverImg;
var gameState = play;
var obstacle1group,obstacle2group,obstacle3group;

function preload(){
  playbuttonImg = loadImage("play-button.png");
  background1Img = loadImage("blue.png");
  gardenImg = loadImage("green.png");
  basketImg = loadImage("basket.png");
  basketballImg = loadImage("basketball.png");
  soccerImg = loadImage("soccer.png");
  sportballImg = loadImage("sportball.png");
obstacle1Img= loadImage("asteroid.png");
obstacle2Img= loadImage("asteroid.png");
obstacle3Img= loadImage("asteroid.png");
//gameoverImg= loadImage("");
}


function setup(){
  
  createCanvas(400,400); 
  //start of the game background 

  background1=createSprite(250,120,20,20);
  background1.addImage(background1Img);
  background1.scale = 1.5;
  background1.visible=true;
 

  obstacle1group=new Group();
  obstacle2group=new Group();
  obstacle3group=new Group();

playbutton=createSprite(230,150,20,20);
playbutton.addImage(playbuttonImg);
playbutton.scale = 0.5;
playbutton.visible=true;

//moving background
//garden=createSprite(200,200);
//garden.addImage(gardenImg);
//garden.visible=false;


//creating basket  running
basket = createSprite(160,340,20,20);
basket.scale =0.09;
basket.addImage(basketImg);

basket.visible=false;

gameover=createSprite(250,150,20,20);
gameover.addImage(gameoverImg);
gameover.scale=0.5;
gameover.visible=false;

}

function draw() {


  background(0);

  if(mousePressedOver(playbutton)){
gameState=play;
playbutton.visible=false;
background1.visible=false;

  }
  
//when the gameSTATE is in play mode 
  if(gameState===play){

  
  basket.x = World.mouseX;
  
  edges= createEdgeSprites();
    basket.collide(edges);
  
    drawSprites();
  
    var select_sprites = Math.round(random(1,6));
  
    if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createBasketballs();
    } else if (select_sprites == 2) {
      createSoccerss();
    }else if(select_sprites == 3) {
      createSportball();
    }else if (select_sprites == 4){
    createObstacles1s ();
    }else if ( select_sprites == 5){
      createObstacles2s();
    }else {
      createObstacles3s();
    }
     
  
  }if(basket.isTouching(obstacle1)||basket.isTouching(obstacle2)||basket.isTouching(obstacle3)){
  gameState===END;

  }
}
  
  //when the gamestate is in end 
  if(gameState===END){
  gameover.visible=true;
  playbutton.visible=true;


  if (mousePressedOver(playbutton)){
    gameState=play;
    score = 0;

 
  }
  }
  }

function createBasketballs() {
baskteball = createSprite(random(50, 350),40, 10, 10);
basketball.addImage(basketballImg);
basketball.scale=0.04;
basketball.velocityY = 3;
basketball.lifetime = 150;
  
}

function createSoccerss() {
soccer = createSprite(random(50, 350),40, 10, 10);
soccer.addImage(soccerImg);
soccer.scale=0.04;
soccer.velocityY = 3;
soccer.lifetime = 150;
}

function createSportball() {
sportball = createSprite(random(50, 350),40, 10, 10);
sportball.addImage(sportballImg);
sportball.scale=0.03;
  sportball.velocityY = 3;
  sportball.lifetime = 150;
}


function createScore(){
  score = createSprite();
  score = true;
  score .scale = 0.5 ;
  
}



function createObstacles1s() {
  obstacle1 = createSprite(random(50, 350),40, 10, 10);
  obstacle1.addImage(obstacle1Img);
  obstacle1.scale=0.04;
  obstacle1.velocityY = 3;
  obstacle1.lifetime = 150;
    
  }

  function createObstacles2s() {
    obstacle2 = createSprite(random(50, 350),40, 10, 10);
    obstacle2.addImage(obstacle2Img);
    obstacle2.scale=0.04;
    obstacle2.velocityY = 3;
    obstacle2.lifetime = 150;
      
    }

    function createObstacles3s() {
      obstacle3 = createSprite(random(50, 350),40, 10, 10);
      obstacle3.addImage(obstacle3Img);
      obstacle3.scale=0.04;
      obstacle3.velocityY = 3;
      obstacle3.lifetime = 150;
        
      }
