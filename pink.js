class pink{
    constructor(x, y, width, height, angle) {
        var options = {
          'restitution':0.9,
          'friction':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed <5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black")
        strokeWeight(2)
        fill(255, 192, 203)
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        this.visibility=this.visibility-5
        tint(255,this.visibility)
        rect(this.body,this.body.position.x,this.body.position.y,50,50)
        pop();
      }
    }
    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++
      }
    }
  }