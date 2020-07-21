export default class Fall {

    constructor(ball, holes, stop, score, scoring, level) {
        this.ball = ball;

        this.holes = holes;

        this.stop = stop;

        this.score = score;

        this.scoring = scoring;
        
        this.level = level;

        this.fallLevel;

    }

    draw() {

        this.left = [];

        //Postion of the hole, from the top
        this.ver = [];

        this.ballC = {
            x: this.ball.position.x + this.ball.size / 2,
            y: this.ball.position.y + this.ball.size / 2
        }

        this.holes.fall.forEach((e) => {

            this.left.push(e[0]);
            this.ver.push(e[1]);

        });

    }

    update(score) {

        for (let i = 0; i < 8; i++) {
            
            if (this.ballC.x - this.ball.size / 1.25 > this.left[i] && this.ballC.x < this.left[i] + 50) {
                if (this.ballC.y > this.ver[i] - 16 && this.ballC.y < this.ver[i]) {
                    this.ball.moveDown();

                    this.fallLevel = this.ver[i + 1];

                }
            } else {
                if (this.ballC.y + this.ball.size / 2 === this.ver[i] - 7) {
                    this.ball.pauseFall();
                    
                    switch(this.level){
                        case 1.5:
                            this.score += 10
                            break;
                        case 2:
                            this.score ++
                            break;
                        case 3:
                            this.score += 0.25
                    }

                }
            }
        }

        if (this.ballC.y < 0) {
            this.stop();
        } else if (this.ballC.y > 400) {
            this.stop();
        }

        this.scoring(this.score);
    }
}
