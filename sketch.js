var track,trackImg;
var runner,running;
var right_boundary,left_boundary;

function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200,400,400);
  track.addImage(trackImg);
  track.velocityY = 4;

  runner = createSprite(200,360,40,60);
  runner.addAnimation("running", running);
  runner.scale = 0.05;

  left_boundary = createSprite(-10,0,100,800);
  left_boundary.visible = false;

  right_boundary = createSprite(410,0,100,800);
  right_boundary.visible = false;
}

function draw() {
  background(0);
  if(track.y > 400){
     track.y = track.width/2;
  }
 
  runner.x = World.mouseX;
  edges = createEdgeSprites();
  runner.collide(edges[3])
  
  runner.collide(right_boundary);
  runner.collide(left_boundary);
  drawSprites();

}
