let width, height;

let player = new Player();

let playerPosition = 0;

let road, cloud1, cloud2, cloud3, cloud4;

function preload() {
    road = loadImage('../assets/img/stone_walk.png');
    cloud1 = loadImage('../assets/img/Clouds/cloud1.png');
    cloud2 = loadImage('../assets/img/Clouds/cloud2.png');
    cloud3 = loadImage('../assets/img/Clouds/cloud3.png');
}

function setup() {
    createCanvas(W, H);
    width = W;
    height = H;
    player.setup();
}

function draw() {
    clear();
    drawBorders();

    drawStaticBackground();

    player.draw();
    player.sprite.collide(rightBorder, scrollRight)
    player.sprite.collide(leftBorder, scrollLeft)
    player.sprite.collide(borders)


    drawSprites();

    drawDynamicBackground();
    leftBorder.remove();    
    rightBorder.remove();
    topBorder.remove();
    bottomBorder.remove();
}

function scrollRight() {
    if (keyIsDown(KEYS.D)) {
        camera.position.x+=3;
        groundPosition+=3;
    }
}

function scrollLeft() {
    if (keyIsDown(KEYS.A) && groundPosition > 0) {
        camera.position.x-=3;
        groundPosition-=3;
    }
}