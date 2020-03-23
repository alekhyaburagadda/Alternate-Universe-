var mercury,  venus, earth, mars, jupiter, saturn, uranus, neptune;
var sun;


function setup() {
  createCanvas(1000,1000);
  mercury= new Mercury(250,500);
  venus= new Venus(300,500);
  earth= new Earth(350, 500);
  mars= new Mars(400,500);
  jupiter  = new Jupiter(450,500);
  saturn= new Saturn(500,500);
  uranus= new Uranus(550,500);
  neptune= new Neptune(600,500);

  sun= new Sun(200,500)

}

function draw() {
background(255,255,255);  

mercury.display();
venus.display();
earth.display();     
mars.display();
jupiter.display();
saturn.display();
uranus.display();
neptune.display();
sun.display();

if(sun.isTouching(mercury)){
  mercury.destroy();
  
}
else if(sun.isTouching(venus)){
  venus.hide();
}
else if(sun.isTouching(earth)){
  earth.hide();
}
else if(sun.isTouching(mars)){
  mars.hide();
}
else if(sun.isTouching(jupiter)){
  jupiter.hide();
}
else if(sun.isTouching(saturn)){
  saturn.hide();
}
else if(sun.isTouching(uranus)){
  uranus.hide();
}
else if(sun.isTouching(neptune)){
  neptune.hide();
}
}

