export default class Bars {

    constructor(gameheight, increment) {
       this.gameHeight = gameheight;
        
        this.increment = increment;
        
        this.position = 0;

    }

    draw(ctx){
        
        for (let i = this.position; i < 450; i += 60) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(400, i);
            ctx.lineWidth = 10;
            ctx.closePath();
            ctx.strokeStyle = "black";
            ctx.stroke();
            
        }
    }
    
    update(){
        
        this.position -= this.increment;
        
        if( this.position === -60){
            this.position = 0;
        }
        
    }
}