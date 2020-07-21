export default class Ball {

    constructor(width, height, increment, level, stop) {

        this.size = 15;

        this.position = {
            x: 80,
            y: 220
        }

        this.speed = 0;

        this.dy = 0;

        this.increment = increment;

        this.disabled = 0;

        this.gravity = 0;
        
        this.level = level;
        
        this.stopped = stop;

    }

    moveLeft() {
        this.speed = this.level;
    }

    moveRight() {
        this.speed = -this.level;
    }

    moveDown() {
        this.dy = 2;

    }

    pauseFall() {
        this.dy = 0;
    }

    stop() {
        this.speed = 0;
    }

    draw(ctx) {
        
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }

    update(dt) {
        
        this.position.x += this.speed;

        this.position.y -= this.increment;

        this.position.y += this.dy;

        this.dy += this.gravity;
        
        const y = this.position.y;
        
        const x = this.position.x;
        
        const r = 200;
        
        const widthX = Math.sqrt(2* r * y - y * y);
        
//        console.log(widthX);
        
        if(r + widthX < x + this.size/2){
            this.stopped();
        }
        else if(r - widthX > x - this.size/2){
            this.stopped();
        }

    }

}
