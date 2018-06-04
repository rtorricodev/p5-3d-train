//variables

let train;
let vel = 2;
let posX = 0;
let posY = 0;
let posZ = -800;
let iniciAlPos=-1200;

//size of the canvas
const width = 900;
const height = 700;

//color
let red = [255,0,0];
let white = [255,255,255];
let green = [0,255,0];


function preload() {
  train = loadModel('train-corrected.obj');
}

function setup() {
  createCanvas(width, height, WEBGL);
  wood = loadImage("./wood.jpg");
  grass = loadImage("./grass.jpg");
}

function draw() {
  //scene
  background(color(49, 109, 237));
  // ambientLight(green);
  directionalLight(255,255,255,0,0,0,1);
  push();

    //model
    rotateY(45);

    if(posZ>=420){
      posZ=iniciAlPos;
    }
    translate(posX, posY, (posZ += vel));
    texture(wood);
    model(train);
  pop();
  push();
    translate(0,60,-500);
    rotateX(90);
    texture(grass);
    plane(2000,1200);
  pop();
 
}
