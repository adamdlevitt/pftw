function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    fill(40, 80, 60);
    square(mouseX, mouseY, 80);
  }
}
