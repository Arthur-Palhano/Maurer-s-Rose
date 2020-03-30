let n = 50;
let d = 28;

function setup() {
  createCanvas(800, 700);
  angleMode(DEGREES);
  
  sln = createSlider(1,100)
  sld = createSlider(1,100)
  sln.style('width', '396px');
  sld.style('width', '396px');
}

function draw() {
  background(20);
  stroke(237, 90, 88);
  strokeWeight(.7);

  translate(width/2, height / 2);
  
  n = sln.value();
  d = sld.value();
  
  noFill();
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 310 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);


  }
  endShape(CLOSE);
}