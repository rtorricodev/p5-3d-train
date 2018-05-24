let angle = 0;
let train;

function preload() {
  train = loadModel('train-corrected.obj');
}

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  background(0);
  ambientLight(255, 0, 255);
  directionalLight(255, 255, 255, 0, 0, 1);
  orbitControl();

  rotateY(angle * 0.6);


  translate(0, 0, 0);
  model(train);
  angle += 0.03;
}
