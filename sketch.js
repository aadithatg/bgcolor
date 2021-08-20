

function setup() {
  createCanvas(400,400);
  btn_red = createButton("RED1")
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("green");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);
}



function draw() { 
}

function red_bg() {
  r = 255;
  g = 0;
  b  = 0;
  console.log("button pressed");
  background(r,g,b);
}

function green_bg() {
  r = 0;
  g = 255;
  b = 0;
  console.log("button pressed")
  background(r,g,b)
}
