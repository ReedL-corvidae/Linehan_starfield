let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

import { Star } from "./star.js";

let mySpecialStar = new Star(canvas, pencil);
let myCoolStar = new Star(canvas, pencil);
let myEpicStar = new Star(canvas, pencil);
mySpecialStar.draw();
myCoolStar.draw();
myEpicStar.draw();


let stars = [
    //mySpecialStar,
    //myCoolStar,
    //myEpicStar
];

for(let i=0; i < 100; i++) {
    let manyStars = new Star(canvas, pencil);
    stars.push(manyStars);
}

function gameLoop(){
    //erase canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    //draw background
    //draw stars
    //move stars
    for(let i=0; i<stars.length; i++){
        stars[i].draw();
        stars[i].move(canvas.height);
    }
    //recycle stars
}

setInterval(gameLoop, 50);