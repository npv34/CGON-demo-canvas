class Rectangle {
    constructor(x, y, width, height, canvas) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.stroke();
    }

    move() {
        this.ctx.clearRect(0,0 , this.canvas.width, this.canvas.height)
        this.x -= 5;
        this.draw();
    }
}
