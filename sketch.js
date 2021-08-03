var liveTime = 200;
var lifeP;
var count = 0;
var target;
var population;
function setup() {
  createCanvas(400, 400);
  lifeP = createP()
  target = createVector(width/2, 50);
  population = new Population();
}

function draw() {
  background(0);
  population.run();
  lifeP.html(count);
  count++;
  if(count == liveTime) {
    count = 0;
    population.evaluate();
    population.selection();
  }
  ellipse(target.x, target.y, 16, 16);
}






