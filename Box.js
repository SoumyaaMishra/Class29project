class Box{
  constructor(x, y, width, height) {
    var options = {
     /* 'restitution':0.3,
      'friction':0.8,
      'density':0.2,*/
      'isStatic' : false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    strokeWeight(4);
    stroke("Yellow");
    fill(0);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
  };
  