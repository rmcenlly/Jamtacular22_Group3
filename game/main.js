let width, height;

let player = new Player();

let zombie = new Zombie();

let enemiesOnScreen = 0;

let playerWalk;
let playerIdle;

let zombieWalk, zombieAttack;


let playerPosition = 0;

let road, cloud1, cloud2, cloud3, cloud4;

let playerSpeed = 5;

function scrollRight() {
    if (keyIsDown(KEYS.D) && groundPosition < 900 && enemiesOnScreen == 0) {
        camera.position.x += playerSpeed;
        groundPosition += playerSpeed;
    }
}

function scrollLeft() {
    if (keyIsDown(KEYS.A) && groundPosition > 0 && enemiesOnScreen == 0) {
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
    zombieAttack = loadAnimation(
    '../assets/img/Zombie/Attack/jared0174.png',
    '../assets/img/Zombie/Attack/jared0198.png'
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

    playerIdle.resize(66, 190)
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

    player.sprite.debug = true
    zombie.sprite.debug = true
}