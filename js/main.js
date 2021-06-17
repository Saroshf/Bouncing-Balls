// Bouncing Balls

// Initalizing canvas and graphic context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let balls = [];
// Main Draw Loop
requestAnimationFrame(draw);
function draw() {
    background("black");
    for (let i = 0; i < balls.length; i++) {
        moveBall(balls[i]);
        drawBall(balls[i]);
    }
    requestAnimationFrame(draw);
}
// Event Listener 
cnv.addEventListener("click", clickHandler);

function clickHandler(event) { // Get X and Y of mouse pointer
    let rect = cnv.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    addaBall(x, y);
}
