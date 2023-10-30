let socket = io();

socket.on("connect", () => {
    console.log("connected");
})

function setup() {
    createCanvas(400, 400);
    background("#fff");

    socket.on("mouseDataServer", (data) => {
        console.log(data);  
        drawPos(data);

    })
}

function mouseMoved() {
    let mousePos = {
        x : mouseX,
        y : mouseY
    }
    socket.emit("mouseData", mousePos)
}

function drawPos(data){
    let r = random(0,255);
    let g = random(0,255);
    let b = random(0,255);
    let a = random(1,50);
    fill(r,g,b);
    noStroke();
    ellipse(data.x, data.y, a, a);
}