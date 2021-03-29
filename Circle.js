const SPEED = 10;
class Circle {
    constructor(radius, x, y, canvas) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y, this.radius, 0 , 2 * Math.PI )
        this.ctx.fill();
    }

    moveLeft() {
        this.x -= SPEED;
    }

    moveRight() {
        this.x += SPEED;
    }

    update() {
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
        this.draw();
    }
}
