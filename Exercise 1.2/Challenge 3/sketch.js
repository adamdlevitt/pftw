let color = prompt("Choose the color for your mouse. When you click and move the mouse around, circles will follow your path in the color that you requested. If you don't click and hold your mouse down, green squares will follow your mouse movements.")

function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(color);
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    fill(50, 90, 30);
    square(mouseX, mouseY, 80);
  }
}
