class Bob {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      restitution: 1,
      friction: 0.4,
      density: 1.2,
    };
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, r / 2, options);

    World.add(world, this.body);
  }
  display() {
    var bobpos = this.body.position;
    push();
    translate(bobpos.x, bobpos.y);
    strokeWeight(1);
    stroke("gray");
    ellipseMode(CENTER);
    fill(255, 0, 255);
    ellipse(0, 0, this.r, this.r);

    pop();
  }
}
