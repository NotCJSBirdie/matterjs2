function Boundary(x, y, w, h) {
    var options = {
        friction: 0,
        restitution: 0.6,
        isStatic: true,
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    console.log(this.body);
    this.body.friction = 0;
    this.w = w;
    this.h = h;

    Composite.add(world, this.body);

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        noStroke();
        fill(0);
        rect(0, 0, this.w, this.h);
        pop();
    }
}