class Block
{
    constructor(x, y)
    {
      var options = {
          isStatic: false,
          restitution: 0.6
      }

      this.body = Bodies.rectangle(x , y , 50 ,20 , options);
      this.width  = 50;
      this.height = 20;
      this.visibility = 255;
      World.add(world , this.body);
    }

    score()
    {
      if(this.visibility < 0 && this.visibility > -100)
      {
        score++
      }
    }

    display()
    { 
      if(this.body.position.y < 450)
      {
        var pos = this.body.position;

        fill("red");
        rectMode(CENTER);
        rect(pos.x , pos.y , this.width , this.height);
      }
      else if(this.body.position.y > 450)
      {
       
        
        push();
        this.visibility = this.visibility - 5;
        tint(255 , this.visibility);
        // rect(this.body.position.x , this.body.position.y , this.width , this.height);
        pop();
        
      }
     
    }
}