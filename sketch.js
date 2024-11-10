function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  
  let colors = [color(255, 204, 0), color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)];
  
  for (let i = 0; i < 50; i++) {
    fill(colors[i % 4]);
    noStroke();
    
    let x = random(width);
    let y = random(height);
    let size = random(40, 150);
    
    if (i % 2 == 0) {
      ellipse(x, y, size, size);
    } else {
      rect(x, y, size, size);
    }
  }
}

function draw() {
}
