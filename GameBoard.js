class GameBoard {
    constructor() {
        this.canvas = document.getElementById('my-canvas');
        this.circle = new Circle(20, 70, 70, this.canvas);
        this.rec = new Rectangle(100, 180, 50, 10, this.canvas);
    }

    init()  {
        this.rec.draw();
        this.circle.draw();
    }

    moveRect(keyCode) {
        switch (keyCode) {
            case 37:
                this.rec.move();
                break;
            case 39:
                break;

        }
    }
}
