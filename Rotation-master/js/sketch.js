var a = 0;
var b =0;

function setup() {
  createCanvas(800, 800);
 
//change the angleMode to degrees so it's easier, otherwise it's in radians 
  angleMode(DEGREES);
}

function draw() {

   background(220);
  push();
  // translate to where you want the center of the ellipse to be
  translate(width/2, height/2);
  rotate(a);
  // draw the ellipse at the origin
  ellipse(0, 0, 350, 150);

  ellipse(0, 300, 350, 150);
  
  //a++;
    a= a+0.5
 
  pop();


  push();
  // translate to where you want the center of the ellipse to be
  translate(width/2, height/2);
  rotate(b);
  // draw the ellipse at the origin
  ellipse(0, 0, 350, 150);

  ellipse(100, 300, 350, 150);
  
  //a++;
    b= b+1
 
  pop();
}