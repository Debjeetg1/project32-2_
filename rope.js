class Rope
{
    constructor(bodyA , pointB)
    {
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          length: 10.0,
          stiffness: 0.04
      }

      this.rope = Constraint.create(options);
      World.add(world , this.rope);
    }
    
    fly()
    {
        this.rope.bodyA = null;
    }

    attach(body)
    {
        this.rope.bodyA = body.body
    }

    display()
    {
     
     if(this.rope.bodyA)
     {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
  
        strokeWeight(3)
        line(pointA.x , pointA.y , pointB.x , pointB.y);
     }
    
    }
}