export default class Background {

    constructor(game) {

        this.game = game;

        this.position = {
            x: 200,
            y: 200
        }
        
        this.size = 200;

    }


    draw(ctx) {
        this.ctx = ctx;
        ctx.beginPath();
        ctx.fillStyle = "crimson";
        ctx.arc(this.position.x, this.position.y, this.size, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();

    }
    
    update(){
        
    }

}
