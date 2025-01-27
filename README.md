# Workshop-0

Link: [https://whosaidthat-3636.github.io/Workshop-0/]

In this workshop, the idea is the experiment with different variables, conditions and increments through 2D primitives

## Tasks
* Create a p5.js editorLinks to an external site. login and sign up to the Processing Foundation's forumLinks to an external site
* Make a p5.js sketch using 2D primitive shapes, variables, and conditionals. Make sure to save your work.
* Experiment with at least one of the following 2D primitive shapes from the p5.js documentation: line, triangle, quad, arc.
* Keep notes to clearly document your process and learning.

### 1. Setting up the canvas and 2D shapes
- Background
  * setting the scale of the Canvas to be 300 in width, 400 in height
  * background selected from a [RGB color picker](https://www.rapidtables.com/web/color/RGB_Color.html) to be a lighter shade closer to white
  ```
  function setup() {
  createCanvas(300, 400);}
  function draw() {
  background(250, 249, 249);
- Lines
  * straight line
  * lines at an angle
  * heavier strokes 
  ```
  stroke(0);
  strokeWeight(5);
  line(250, 15, 400, 15);
  line(150, 90, 400, 20);
  line(180, 150, 400, 60);
  ```
- Arc
  * placed in the middle of the canvas
  * with no fill
  ```
  noStroke();
  fill(204, 204, 255);
  arc(155, 280, 100, 100, 0, PI + HALF_PI);
  ```
- Triangle
  * placed at the top left of the canvas
  ```
  noStroke(0);
  fill(153, 204, 244);
  triangle(15, 25, 155, 10, 30, 250);
  ```
- Rectangle
  * placed on the right of the canvas
  * half of the shape is out of the canvas view
  * with a white stroke
  ```
  stroke(255);
  fill(255, 255, 153);
  rect(250, 100, 100, 200);
  ```

### 2. Arc
- I started with the color through a [RGB color picker](https://www.rapidtables.com/web/color/RGB_Color.html)
- The arc has a parameter that allows for a specific mode to fill the arc. For this instance a quarter has been taken off a full circle through the parameters of "PI + HALF_PI"
- The idea is to have the arc go in a loop using assignment by using a variable, expression and condition followed by the workshop video
  
   <img width="572" alt="image" src="https://github.com/user-attachments/assets/3d520f14-20ea-4958-94b9-628583862305" />

- However the code does not work because the shape moves in the _left direction_ but is _set to reset on the left side_ of the canvas 
 ```
  x = x - 6; 

  if (x > width) { 

    x = 100;}
```
- Correction through trial and error, learning to take the width of the arc into account
<img width="71" alt="image" src="https://github.com/user-attachments/assets/9f26e924-57df-4385-9a7e-1845b4f256de" />

- Arc now resets from the right
- To further expand I want to set it so that every time the arc reappears on the screen it decreases in transparency as viewed by the Coding Train on YT (Lesson 1.4)
```
let x = 300;
let ArcTransparency = 255;

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
```

### 3. Triangle
- Given that the order of operations was important and understanding that different shapes require different set conditions due to their different points
- I was interested in learning how different shapes would response to different conditions due to its unique parameters like the arc having to put into consideration of the diameter. As for the triangle I had to consider three points of the triangle
- It took some time to figure out
  ```
  let y = 400;
  
  y = y + 3;
  noStroke();
  triangle(15, y, 155, y - 15, 30, y + 225);

  if (y > height) {
    y = 0;
  } else if (y > height / 2) {
    fill(255, 0, 0);  
  } else {
    fill(153, 204, 244);  
  }
  ```
  - Initial code, the fill was incorrect and followed the arc
  ```
  if (y > height) {
    y = 0;
  } else if (y > height / 2) {
    fill(255, 0, 0);  
  } else {
    fill(153, 204, 244);  
  }
  
  y = y + 3;
  noStroke();
  triangle(15, y, 155, y - 15, 30, y + 225);
  ```
  - Triangle now starts off blue then changes to red when it reaches half of the canvas and repeats


 ### 4. Rectangle
 - For the rectangle, it should bounces back and forth between the walls
```
let z = 0;
let move = 1;

 stroke(255);
  fill(255, 255, 153);
  rect(z, 100, 100, 200);

 z += move;
  
  if (z > width - 100) {
  move = -1; 
}

if (z < 0) {
  move = 1; 
 }
}
```


## Reflection

 






  
  




