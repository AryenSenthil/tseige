class Ball {
    constructor(x,y,r)
      {
          var options = { 
              density: 1, 
              frictionAir: 1
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          World.add(world, this.body);
  
      }
  
      display()
      {
              function mouseDragged(){
  
              }
              var heroPos=this.body.position;		
              push()
              translate(BallPos.x, BallPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              pop()
  
      }
  }