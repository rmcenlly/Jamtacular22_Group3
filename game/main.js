let width, height;

let player = new Player

function setup() {
    createCanvas(W, H);
    width = W;
    height = H;
    player.setup();
    drawBorders();


}

function draw() {
    background("orange");
    noStroke();
    fill("grey");
    rect(0, height/2, width, height/2);

    player.draw();
    player.sprite.collide(borders)


    drawSprites();
    
}