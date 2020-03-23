class Sun extends BaseClass{
  constructor(x,y){
   super(x,y,100,100);
  this.image = loadImage("images/sun.png");
 };
      
display() {
  super.display();
  var sun= createSprite(400,400);
  if (World.frameCount % 60 === 0) {
     sun.scale = 2;

  }
}
}