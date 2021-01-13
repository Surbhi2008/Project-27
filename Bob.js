class Bob {
    constructor(x,y,r) {
      var options = {
          'isStatic':false,
          'restitution':1,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, r, options);
      this.image = loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      push();
        var pos=this.body.position;
        var rad=this.body.radius;
        fill(255);
        circle(pos.x,pos.y,50);
        pop();
    }
  };