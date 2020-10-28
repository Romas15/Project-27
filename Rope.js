class Rope {
  constructor(body1, body2, offsetX, offsetY) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    var options = {
      bodyA: body1,
      bodyB: body2,
      pointB: { x: this.offsetX, y: this.offsetY },
    };

    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  display() {
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;

    var pointAx = pointA.x;
    var pointAy = pointA.y;
    var pointBx = pointB.x + this.offsetX;
    var pointBy = pointB.y + this.offsetY;
    // var line2 = line(pointAx, pointAy, pointAx, 50);
    var line2 = line(pointAx, pointAy, pointBx, pointBy);
  }
}
