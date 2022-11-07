let width, height;

let player = new Player();

let zombie = new Zombie();

let playerWalk;
let playerIdle;


let playerPosition = 0;

let road, cloud1, cloud2, cloud3, cloud4;

let playerSpeed = 2;

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
    }
}

function preload() {
    road = loadImage('../assets/img/stone_walk.png');
    cloud1 = loadImage('../assets/img/Clouds/cloud1.png');
    cloud2 = loadImage('../assets/img/Clouds/cloud2.png');
    cloud3 = loadImage('../assets/img/Clouds/cloud3.png');
    cloud4 = loadImage('../assets/img/Clouds/cloud4.png');

    zombieWalk = loadAnimation(
    '../assets/img/Zombie/walk/jared0133.png',
    '../assets/img/Zombie/walk/jared0173.png'
    )

    playerWalk = loadAnimation(
    '../assets/img/PlayerSprites/Walk/walk0.png',
    '../assets/img/PlayerSprites/Walk/walk1.png',
    '../assets/img/PlayerSprites/Walk/walk2.png',
    '../assets/img/PlayerSprites/Walk/walk3.png',
    '../assets/img/PlayerSprites/Walk/walk5.png',
    '../assets/img/PlayerSprites/Walk/walk6.png')

    playerIdle = loadImage('../assets/img/PlayerSprites/Idle/idle.png');
}

function setup() {
    createCanvas(W, H);
    width = W;
    height = H;
    player.setup();
    zombie.setup();

    // zombie = createSprite(700, 3 * H/4);
    // zombie.addAnimation("Walking Zombie", zombieWalk)
}

function draw() {
    clear();

    drawStaticBackground();

    drawBorders();

    player.draw();

    zombie.draw();

    animation(playerWalk, 500, 200);

    drawSprites();

    drawDynamicBackground();

    removeBorders();
}