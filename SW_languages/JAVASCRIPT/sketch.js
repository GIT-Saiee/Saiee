let r;
let g;
let b;
let x=100;
let y=100;
let radius=20;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  //r = random(100,200);
  //g = random(200,255);
  //b = random(0,100);
  //x = random(100,300);
  //y = random(100,300);
  //radius = random(0,400);
  //alpha = 100;
  //background(215);
  stroke(75);
  fill(150,150,0,75);
  circle(x,y,radius);
  x=x+1
  y=y+1
  radius=radius+1;
}

function mousePressed(){
  //background(0);
  fill(150,150,0,100)
  circle(100,100,20);
  radius=radius+1;

}
