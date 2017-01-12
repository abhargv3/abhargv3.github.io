/*var drops = [];

function setup() {
  var canvas = createCanvas($(document).width(), $(document).height());
  canvas.parent("backAnimation");
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(238,238,238);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}*/

var spot = {
  x: 100,
  y: 50
}

var col = {
  r: 255,
  g: 0,
  b: 0
}
function setup() {
  var canvas = createCanvas($(document).width(), $(document).height());
  background(238,238,238);
  canvas.parent("backAnimation");
}

function draw() {

  col.r = random(100, 255);
  col.g = 0;
  col.b = random(100, 190);
  
  spot.x = random(0, width);
  spot.y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, 24, 24);
}