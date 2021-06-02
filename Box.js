/* class Box{
  constructor(x, y, width, height, color){
    var options = {
      'restitution':0.8,
      'friction':0,
  } */
  class Box{
    constructor(x, y, width, height){
      var options = {
        'restitution':0.4,
        'friction':0,
    }
  this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.color = color;
        this.Visiblity=255;
        World.add(world, this.body);
  }
  score(){
    if(this.visibility<0 && this.visibility>-105){
      score++
    }
    }
   
 /*  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.color);
    rect(0, 0, this.width, this.height);
    pop();
  }
}; */

 display(){
   if(this.body.speed<3){
     var pos=this.body.position
     var angle=this.body.angle
     push()
     translate(pos.x,pos.y)
     rotate(angle);
     rectMode(CENTER);
     //fill(this.color);
     rect(0, 0, this.width, this.height);
     pop()
   }
  else{
    World.remove(world,this.body)
    push();
    this.Visiblity=this.Visiblity-5;
    tint(255,this.Visiblity);
    pop();
  }
 }
}
 