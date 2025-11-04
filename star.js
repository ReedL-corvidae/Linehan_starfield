export class Star {
    x = 600;
    y = 50;
    pencil;
            

    constructor(canvas, pencil){
        this.pencil = pencil;
        this.x = canvas.width * Math.random();
        this.y = canvas.height * Math.random();
    }

    draw(pencil){

        this.pencil.beginPath();
        this.pencil.arc(this.x, this.y, 5, 0, 2*Math.PI)
        this.pencil.fillStyle = "black";
        this.pencil.fill();
        this.pencil.closePath();
    }
    move(canvasHeight){
        if (this.x < 0) {
            this.x = 600;
            this.y = canvasHeight * Math.random();
        } else {
            this.x -= 5;
        }

    }
}