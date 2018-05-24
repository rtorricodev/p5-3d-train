//variables

let train;
let vel = 2;
let posX = 0;
let posY = 0;
let posZ = -800;

//size of the canvas
const width = 900;
const height = 700;

//color
let red = [255,0,0];
let white = [255,255,255];

function preload() {
  train = loadModel('train-corrected.obj');
}

function setup() {
  createCanvas(width, height, WEBGL);
}

function draw() {
  //scene
  background(0);
  ambientLight(red);
  directionalLight(255,255,255,0,0,0,1);
  //functions
  orbitControl();
  //model
  rotateY(45);
  translate(posX, posY, (posZ += vel));
  model(train);
 
}
