import Game from "./game.js";

if($(document).width() < 400 || $(document).height() < 500){
    $(".game").remove();
    $(".screen-issue").toggle();
}

const canvas = $("canvas")[0];

const start = $(".start");

const stop = $(".stop")

const scoreBoard = $(".score");

const levels = $(".level");

let level = 2;

const fullScreen = $(".expand");

const instructionButton = $(".instructions");

const instructions = $(".instruction-dialog");

//TOREMOVE
const ins = $(".ins");

const settings = $(".settings");

let animation;

stopped();

settings.click(() => {levels.toggle();
                     });

instructionButton.click(() => {instructions.toggle();})

levels.click((l) => {
    
    levels.toggle()
    
    switch(l.target.innerText){
        case "1":
            level = 3;
            break;
        case "2":
            level = 2;
            break;
        case "3":
            level = 1.5;
}});

start.click(main);

stop.click(stopped);

fullScreen.click(expand);

function main() {

    let score = 0;
    
    scoring(score);
    
    started();

    if (canvas.getContext) {

        const gameWidth = 400;
        const gameHeight = 400;

        const increment = 1;

        const friction = 0.8;

        const ctx = canvas.getContext("2d");

        const game = new Game(gameWidth, gameHeight, ctx, increment, stopped,score, scoring, level);

        game.start();

        function gameLoop(timeStamp) {
            
            animation = requestAnimationFrame(gameLoop);

            ctx.clearRect(0, 0, gameWidth, gameHeight);
            game.draw();
            game.update();

        }

        let lastRender = 0;

        gameLoop();

    }

}

function started() {

    start.prop("disabled", true);

    start.addClass("inactive");

    stop.prop("disabled", false);

    stop.removeClass("inactive");
    
    settings.prop("disabled", true);
    
    settings.addClass("inactive");
    
    ins.remove();
    
}

function stopped() {

    if (animation) {
        window.cancelAnimationFrame(animation);
    }

    stop.prop("disabled", true);
    
    start.prop("disabled", false);

    start.removeClass("inactive");
    
    stop.addClass("inactive");
    
    settings.prop("disabled", false);

    settings.removeClass("inactive");

}

function scoring(score){
    
    scoreBoard.html(`Your score ${score}`);
    
}

function expand(){
    
    $(".header").remove();
    
    ins.remove();
    
}