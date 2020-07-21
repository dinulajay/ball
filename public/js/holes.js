export default class Holes {

    constructor(gameWidth, gameHeight, increment) {

        this.gameHeight = gameHeight;
        
        this.increment = increment;
        
        this.iterate = 0;
        
        this.rate = 0;
        
        this.listCount = 1;
        
        this.block = 0;
        
        this.position = [];
        
        this.random = [];
        
        for(let i = 0; i < 400; i += 50){
            this.random.push(i);
        }
        
        this.arrGenerator = function(){
            
            const arr = [];
            
            for(let i = 0;i < 16; i++){
                const randomNum = Math.floor(Math.random()* (this.random.length - 1));
                arr.push(this.random[randomNum]);
                arr.push(this.random[randomNum + 1]);
            
            }
            
            return arr;
        }
        
        this.position.push(...this.arrGenerator());
        
    }

    draw(ctx) {
        
        this.iterate = this.rate;
        
        this.fall = [];
        
        for (let i = this.block; i < 450; i += 60) {
            ctx.beginPath();
            ctx.moveTo(this.position[this.iterate], i);
            ctx.lineTo(this.position[this.iterate + 1], i);
            
            ctx.lineWidth = 11;
            ctx.closePath();
            ctx.strokeStyle = "crimson";
            ctx.stroke();
            this.fall.push([this.position[this.iterate], i]);
            this.iterate += 2;
        }
        
    }

    update() {
        
        this.block -= this.increment;
        
        if (this.block === -60){
            this.block = 0;
            
            this.rate += 2;
            
            this.listCount++;
           
        }
        
        if(this.listCount % 9 === 0){
            this.position.push(...this.arrGenerator());
            this.position.splice(0,16); 

            this.listCount = 1;

            this.rate -= 16;
                
        }
        
        if(this.listCount === 2){
            this.count = 0;
        }
        
        }
        
    }