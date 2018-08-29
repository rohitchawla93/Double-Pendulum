
var y2next = 0;
var y2curr = 0;
var y1next = 0;
var y1curr = 0;
var angle2next = 0;
var angle2curr = 0;
var angle1next = 0;
var angle1curr = 0;

var g = 9.8;
var length = 150;
var omega = 0.0;
var delta = 0.001;
var time = 0.0;


function init(){
  y2curr = 0;
  y1curr = 0;
  angle1curr = PI/4;
  angle2curr = PI/10;
  omega = 50;
  //omega = pow(g / length, .5);
}

function f1(y2next, y2curr, angle1curr, angle2curr){
  return - (y2next - y2curr)/(2 * delta) * cos(angle1curr - angle2curr) - pow(y2curr, 2)/2 * sin(angle1curr - angle2curr) - pow(omega, 2) * sin(angle1curr);
}

function f2(y1next, y1curr, angle1curr, angle2curr){
  return -(y1next - y1curr)/delta * cos(angle1curr - angle2curr) + pow(y1curr, 2)/2 * sin(angle1curr - angle2curr) - pow(omega, 2) * sin(angle2curr);
}


function setup(){
  createCanvas(700, 800);
  init();
}


function draw(){
  background(50);
  translate(width/2, height/2.5);
  line(-width/2, 0, width/2, 0);
  fill("red");
  rect(-10, -10, 20, 20);

  fill("white")
  textSize(32);
  text("  Double Pendulum", -width/2, -height/3);
  textSize(20);
  text("   Time : " + nf(time, 2, 4), -width/2, -height/3.5);

  y1next = y1curr + delta * f1(y2next, y2curr, angle1curr, angle2curr);
  angle1next = angle1curr + delta * y1next;

  y2next = y2curr + delta * f2(y1next, y1curr, angle1curr, angle2curr);
  angle2next = angle2curr + delta * y2next;

  y1curr = y1next;
  angle1curr = angle1next;
  y2curr = y2next;
  angle2curr = angle2next;
  time += delta;

  stroke("black");
  strokeWeight(2);
  line(0, 0, length * sin(angle1next), length * cos(angle1next));
  line(length * sin(angle1next), length * cos(angle1next), length * (sin(angle1next) + sin(angle2next)), length * (cos(angle1next) + cos(angle2next)));
  fill("green");
  ellipse(length * sin(angle1next), length * cos(angle1next), 20, 20);
  ellipse(length * (sin(angle1next) + sin(angle2next)), length * (cos(angle1next) + cos(angle2next)), 20, 20);

}
