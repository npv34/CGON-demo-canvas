class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.stroke();
    }
}
