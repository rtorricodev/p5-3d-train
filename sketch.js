//variables
let train;
let vagon;
var music;
let velocity = 0.1;
let velocityV = 0.057;
const wheelVelocity = 0.1;
let positionX = -100;
let positionY = 180;
let positionZ = -800;
let positionXV = -80;
let positionYV = 180;
let positionZV = -920;
let initialPosition = -1200;
let autoplay = true;

//size of the canvas
const width = 900;
const height = 700;

//colors
let red = [255,0,0];
let green = [0,255,0];
let blue = [0,0,255];
let white = [255,255,255];
let lightWhite = [255,255,255,0];

function preload() {
  train = loadModel('./models/train-with-out-wheels.obj');
  vagon = loadModel('./models/untitled2.obj');
  music = loadSound("./assets/sound/Thomas-The-Tank-Engine-Theme-Song.mp3");
  wood = loadImage("./assets/textures/wood.jpg");
  wood2 = loadImage("./assets/textures/0012-dark-fine-wood-texture-seamless.jpg");
  grass = loadImage("./assets/background/cold.jpg");
}

function setup() {
  createCanvas(width, height, WEBGL);
}

function playBackgroundMusic() {
  if(autoplay) {
    if (!music.isPlaying()) {
      music.play();
    }
  }
}

function prepareScene() {
  background(0,0,0);
  directionalLight(lightWhite, 0, 0, -30);
}

function addTextureToModel(definedTexture, definedModel) {
  texture(definedTexture);
  model(definedModel);
}

function definePositionOfTrain() {
  rotateY(45);
  if(positionZ >= 550){
    positionZ = initialPosition;
  }
}

function definePositionOfVagon() {
  rotateY(45);
  if(positionZV >= 550){
    positionZV = initialPosition;
  }
}

function wheel(addX,addZ) {
  push();
    definePositionOfTrain();
    translate(positionX + addX , positionY, (positionZ += velocity) + addZ);
    rotateZ(80);
    rotateY(frameCount * wheelVelocity);
    texture(wood);
    cylinder(17, 10); 
  pop();
}

function wheelVagon(addX,addZ) {
  push();
    definePositionOfVagon();
    translate(positionXV + addX , positionYV, (positionZV += velocityV) + addZ);
    rotateZ(80);
    rotateY(frameCount * wheelVelocity);
    cylinder(17, 10); 
  pop();
}

function moveTrain() {
  push();
    definePositionOfTrain();
    translate(positionX, positionY, (positionZ += velocity));
    addTextureToModel(wood, train);
  pop();
  push();
    definePositionOfVagon();
    translate(positionXV, positionYV, (positionZV += velocityV));
    addTextureToModel(wood2, vagon);
  pop();
}

function defineTerrain() {
  push();
    translate(-200,20,-725);
    texture(grass);
    plane(2400,2000);
  pop();
}

function draw() {
  //playBackgroundMusic();
  prepareScene();
  defineTerrain();
  moveTrain();
  //Wheel train
  wheel(-2, 20);
  wheel(-2, -40);
  wheel(40, 20);
  //Wheel Vagon 1 
  wheelVagon(-35, 25);
  wheelVagon(-35, -33);
  wheelVagon(40, 25);
  //Wheel vagon 2
  wheelVagon(-35, -80);
  wheelVagon(-35, -140);
  wheelVagon(40, -80);
}