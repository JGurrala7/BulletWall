var bullet, wall, thickness, weight, speed;
var damage = 0;
function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite(200, 200, 25, 10);
  bullet.shapeColor = "gray";
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "gray";
}
function draw() {
  background(0);
  bullet.display();
  wall.display();
  bullet.setVelocity(speed/10, 0);
  if (wall.x - bullet.x < ((bullet.width + wall.width)/2)){
    bullet.velocityX = 0;
    calculateDamage(thickness, speed, weight);
    text = ("Speed: " + speed, 100, 125);
  }
  drawSprites();
}

function calculateDamage(thickness, speed, weight){
  damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
  if (damage < 10){
    wall.shapeColor = color(0, 255, 0);
  }
  if (damage > 10){
    wall.shapeColor = color(255, 0, 0);
  }
}
