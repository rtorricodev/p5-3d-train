//variables
let train;
var music;
let velocity = 2;
let positionX = -100;
let positionY = 180;
let positionZ = -800;
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
  train = loadModel('./models/train-corrected.obj');
  music = loadSound("./assets/sound/Thomas-The-Tank-Engine-Theme-Song.mp3");
  wood = loadImage("./assets/textures/wood.jpg");
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
  if(positionZ >= 420){
    positionZ = initialPosition;
  }
}

function moveTrain() {
  push();
    definePositionOfTrain();
    translate(positionX, positionY, (positionZ += velocity));
    addTextureToModel(wood, train);
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
}