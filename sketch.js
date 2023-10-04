//all images are sourced from Pinterest

var imgs = [];
var captions = [];
var imgIndex;
var captionIndex;
var img1, img2, img3, img4, img5;

function preload(){
  img1 = loadImage('breathing.jpeg');
  img2 = loadImage('domo.jpeg');
  img3 = loadImage('facepalm.jpeg');
  img4 = loadImage('huh.jpeg');
  img5 = loadImage('shower.jpeg');
}

function setup() {
  createCanvas(600, 600);
  imgs = [img1, img2, img3, img4, img5];
  captions = ["when USF doesn't cancel class\nwhen the AQI is 150+", "everything is fine dw abt it :D", "week 6 of the semester mood!", "this is me, if you even care", "typical interaction design student behavior"];
  imgIndex = int(random(5));
  captionIndex = int(random(5));
  button = createButton('refresh');
  button.position(520, 15);
  button.mousePressed(reRandomize);
}

function draw() {
  image(imgs[imgIndex], 0, 0, 600, 600);
  textAlign(CENTER);
  textSize(30);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text(captions[captionIndex], 300, 500);
}

function reRandomize(){
  imgIndex = int(random(5));
  captionIndex = int(random(5));
}