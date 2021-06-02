class Polygon{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.image=loadImage("polygon.png");
    }

     display(){
        var angle = this.body.angle;
         push();
         translate(50, 200);
        //translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,50,200,40,40);
        //image(this.image,this.body.position.x,this.body.position.y,40,40);
        pop();
    }
}