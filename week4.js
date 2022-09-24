/*
    Paste the code for your week 4 exercise below.
*/

function setup() {
    createCanvas(windowWidth, windowHeight);
  }

let angle = 10;
let arcPos = 300;
let arcWidth = 150;
  
function draw() {
  background(10, 20, 30)
  strokeWeight(0);

  noCursor();
  circle(mouseX, mouseY, 5);

  arc(arcPos, arcPos, 150, 150, 0, PI + QUARTER_PI);

  translate(305, 290);
  rotate(PI + QUARTER_PI);
  // translate(0, 10);

  arc(0, 0, 130, 130, 0, PI - QUARTER_PI);

  translate(300, 300);
    
  quad(10, 5, 8, 15, 8, 10, 7, 10);
  }
