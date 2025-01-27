function setup() {
  createCanvas(550, 400);
  background(98, 162, 107);

  for (let x = 0; x < 15; x++) {
    ball(random(0, width), random(0, height), 30, color(random(255), random(255), random(255)));
  }
}

function draw() {
  fill(100,58,45);
  rect(0, 0, 550, 25);
  rect(0, 375, 550, 25);
  rect(0, 0, 25, 400);
  rect(525, 0, 25, 400);
  
  fill(255);
  text('Refresh page for new results', 10, 20);
}

function ball(x, y, size, baseColor) {
  fill(255); 
  noStroke();
  ellipse(x, y, size, size);

  fill(baseColor);
  ellipse(x, y, size * 1.015, size * 0.6); 
}
