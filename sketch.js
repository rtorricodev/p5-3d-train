//variables
let train;
var music;
let velocity = 1;
const wheelVelocity = 0.1;
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

let speed=0.4;
let posBurbble=positionZ+40;
let a=1;
function burbble() {
    
    rotateY(45);
    texture(bubbleTexture);

    push();
    translate(positionX, positionY-110,   posBurbble -= speed  );
    sphere(10);
    pop();
    push();
    translate(positionX, positionY-140,   posBurbble -= speed  );
    sphere(8);
    pop();
    push();
    translate(positionX, positionY-155,   posBurbble -= speed  );
    sphere(12);
    pop();
    push();
    translate(positionX, positionY-167,   posBurbble -= speed  );
    sphere(4);
    pop();
    a+=1;
    if(a==12){
      posBurbble=positionZ+40;
      a=1;
    }  
}
function preload() {
  train = loadModel('./models/train-with-out-wheels.obj');
  music = loadSound("./assets/sound/Thomas-The-Tank-Engine-Theme-Song.mp3");
  wood = loadImage("./assets/textures/wood.jpg");
  bubbleTexture= loadImage("./assets/textures/negro.jpg");
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
  // ambientLight(green,0,0,1);
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


function wheel(addX,addZ) {
  push();
    definePositionOfTrain();
    translate(positionX + addX , positionY, (positionZ += velocity) + addZ);
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
  wheel(-2, 20);
  wheel(-2, -40);
  wheel(40, 20);
  burbble();
  
  
}

