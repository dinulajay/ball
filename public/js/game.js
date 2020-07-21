import Ball from "./ball.js";

import Bars from "./bars.js";

import Background from "./background.js";

import Input from "./input.js";

import Holes from "./holes.js";

import Fall from "./fall.js";

export default class game {

    constructor(gameWidth, gameHeight, ctx,increment, stopped,score, scoring, level) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.ctx = ctx;
        
        this.increment = increment;
        
        this.stop = stopped;
        
        this.score = score;
        
        this.scoring = scoring;
            
        this.level = level;
        
    }       
        
    start(){
        
        this.ball = new Ball(this.gameWidth, this.gameHeight, this.increment, this.level, this.stop);

        this.bars = new Bars( this.gameHeight, this.increment);
        
        this.holes = new Holes(
        this.gameWidth, this.gameHeight, this.increment);
        
        this.fall = new Fall(this.ball, this.holes, this.stop, this.score, this.scoring, this.level);
        
        new Input(this.ball, this.level);
        
        this.background = new Background(this);

        this.gameObjectsList = [this.background,this.bars,this.holes,this.ball, this.fall];         
        
    }

    draw() {
        this.gameObjectsList.forEach((object) => {
            object.draw(this.ctx);
        });
    }

    update() {
        this.gameObjectsList.forEach((object) => {
            object.update();
        });
    }

}