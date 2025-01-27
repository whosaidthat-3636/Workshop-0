let x = 300;
let y = 400;
let z = 0;
let move = 1;
let ArcTransparency = 255;

function setup() {
  createCanvas(300, 400);
}

function draw() {
  background(250, 249, 249);

  if (y > height) {
    y = 0;
  } else if (y > height / 2) {
    fill(255, 0, 0);  
  } else {
    fill(153, 204, 244);  
  }
  
  noStroke();
  triangle(15, y, 155, y - 15, 30, y + 225);
  
  y = y + 3;

  stroke(0);
  strokeWeight(5);
  line(250, 15, 400, 15);
  line(150, 90, 400, 20);
  line(180, 150, 400, 60);

  stroke(255);
  fill(255, 255, 153);
  rect(z, 100, 100, 200);

  stroke(0);
  strokeWeight(1);
  fill(204, 204, 255, ArcTransparency);
  arc(x, 280, 100, 100, 0, PI + HALF_PI);

  x = x - 6;
  if (x < -100) {
    x = width;

    ArcTransparency = ArcTransparency - 30;
    if (ArcTransparency < 0) {
      ArcTransparency = 255;
    }
  }
  
   z += move;
  
  if (z > width - 100) {
  move = -1; 
}

if (z < 0) {
  move = 1; 
 }
}
