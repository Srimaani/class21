var rec1,rec2,rec3,rec4,rec5,rec6
function setup() {
  createCanvas(800,400);
  rec1=createSprite(400,300,50,100)
  rec2=createSprite(350,225,40,87)
  rec3=createSprite(300,150,40,74)
  rec4=createSprite(250,175,30,61)
  rec5=createSprite(200,100,20,48)
  rec6=createSprite(150,25,10,45)
  rec1.shapeColor="purple"
  rec2.shapeColor="red"
}

function draw() {
  background(255,255,255); 
  rec1.x=mouseX
  rec1.y=mouseY 
  isTouching(rec1,rec3)
  drawSprites();
}