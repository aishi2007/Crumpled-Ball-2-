class Paper{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution:0.5,
            friction:0.5,
            density:0.8
        }
        this.body = Bodies.circle(x,y,10,options);
        this.image= loadImage("Ball_Img.png")
        World.add(world, this.body);
      }
      display(){
          var pos=this.body.position
          var angle= this.body.angle
          push();
          translate(pos.x,pos.y)
          rotate(angle)
          imageMode(CENTER)
          image(this.image,0,0,30,30)
          pop();
      }
    
}
