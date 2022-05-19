var player, path
var leftWall, rightWall

function preload(){
  //pre-load images
  player_img = loadAnimation("Runner-1.png", "Runner-2.png");
  path_img = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200, 30, 30);
  path.addImage("pathImg", path_img);
  path.velocityY = 4;
  path.scale = 1.2;

  player = createSprite(200, 320, 30, 60);
  player.addAnimation("playerRunning", player_img);
  player.scale = 0.075
  
  leftWall = createSprite(15, 300, 60, 600);
  rightWall = createSprite(365, 300, 60, 600);
  if(player.isTouching(leftWall)){
    player.velocityX = 0
  }


}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  if(player.x < 20){
    player.x = 200;
  }
  player.x = World.mouseX
  player.collide(leftWall);
  player.collide(rightWall);
  leftWall.visible = false;
  rightWall.visible = false;

  drawSprites();
}
