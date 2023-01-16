var basketball, basketballImg;
var player, playerImg;
var hoop, hoopImg;
var courtImg;
var shoot;

function preload(){
basketballImg = loadImage("pictures/basketball.png");
playerImg = loadImage("pictures/player.png");
hoopImg = loadImage("pictures/hoop.png");
courtImg = loadImage("pictures/court1.jpeg")
}

function setup(){
createCanvas(400,400);

basketball = createSprite(100,250,15,15);
basketball.addImage("basketball", basketballImg);
basketball.scale = 0.08;

player = createSprite(130,310,20,50);
player.addImage("player",playerImg);

hoop = createSprite(300,100,30,30);
hoop.addImage("hoop", hoopImg);
hoop.scale = 0.7;

//shoot = createImg("shoot.png");
//shoot.position(30,30);
//shoot.size(50,50);
}

function draw(){
background(courtImg);
drawSprites();

if(keyIsDown(RIGHT_ARROW)){
  player.x = player.x + 5;
  basketball.x = basketball.x + 5;
}

if(keyIsDown(LEFT_ARROW)){
  player.x = player.x - 5;
  basketball.x = basketball.x - 5;
}
}







