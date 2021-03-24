const SPEED = 10;
class Circle {
    constructor(radius, x, y) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    init() {
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
        this.init();
    }
}
