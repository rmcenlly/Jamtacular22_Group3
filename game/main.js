let width, height;

let player = new Player();

let playerPosition = 0;

let road, cloud1, cloud2, cloud3, cloud4;

let playerSpeed = 10;

function preload() {
    road = loadImage('../assets/img/stone_walk.png');
    cloud1 = loadImage('../assets/img/Clouds/cloud1.png');
    cloud2 = loadImage('../assets/img/Clouds/cloud2.png');
    cloud3 = loadImage('../assets/img/Clouds/cloud3.png');
    cloud4 = loadImage('../assets/img/Clouds/cloud4.png');
}

function setup() {
    createCanvas(W, H);
    width = W;
    height = H;
    player.setup();
}

function draw() {
    clear();

    drawStaticBackground();

    drawBorders();

    player.draw();

    drawSprites();

    drawDynamicBackground();

    removeBorders();
}

function scrollRight() {
    if (keyIsDown(KEYS.D) && groundPosition < 900) {
        camera.position.x += playerSpeed;
        groundPosition += playerSpeed;
    }
}

function scrollLeft() {
    if (keyIsDown(KEYS.A) && groundPosition > 0) {
        camera.position.x -= playerSpeed;
        groundPosition -= playerSpeed;
        console.log("collideLeft")
    }
}