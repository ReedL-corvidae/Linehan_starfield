let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

import { Star } from "./star.js";

let mySpecialStar = new Star(canvas, pencil);
mySpecialStar.draw();


let stars = [
    mySpecialStar
];

function gameLoop(){
    //erase canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    //draw background
    //draw stars
    //move stars
    for(let i=0; i<stars.length; i++){
        stars[i].move();
        stars[i].draw();
    }
    //recycle stars
}

setInterval(gameLoop, 50);