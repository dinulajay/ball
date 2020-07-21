export default class Input{
    
    constructor(ball, level){

        $(document).keydown( (event) =>{
            switch(event.key){
                case "d":
                    ball.moveLeft();
                    break;
                case "a":
                    ball.moveRight();
             }
        });
    
        $(document).keyup( (event) => {
            if( event.key === "d" && ball.speed === level){
            ball.stop();
            }
            else if( event.key ==="a" && ball.speed === -level){
                ball.stop();
            }
        });
    }
    
}