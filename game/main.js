let width, height;

let player = new Player();

let zombie0 = new Zombie(ZOMBIES[0].xPos, ZOMBIES[0].yPos);

let zombie1 = new Zombie(ZOMBIES[1].xPos, ZOMBIES[1].yPos);

let enemiesOnScreen = 0;

//player sprite variables

//player movement
let playerWalk;
let playerIdle;
let playerCrouch;
let playerJump;
let playerStand;

//player combat
let playerGuard;
let playerGuardCrouch;
let playerGuardJump;
let playerJab;
let playerJabCrouch;
let playerJabJump;
let playerHrzStrike;
let playerHrzStrikeCrouch;
let playerHrzStrikeJump;
let playerVertStrike;
let playerVertStrikeCrouch;
let playerVertStrikeJump;


//player damage
let playerDmgAir;
let playerDmgCrouch;
let playerDmgHi;
let playerDmgLo;
let playerKO;

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
    
    //Player Images

    //Movement:
    //walk
    playerWalk = loadAnimation(
    '../assets/img/PlayerSprites/Walk/walk0.png',
    '../assets/img/PlayerSprites/Walk/walk1.png',
    '../assets/img/PlayerSprites/Walk/walk2.png',
    '../assets/img/PlayerSprites/Walk/walk3.png',
    '../assets/img/PlayerSprites/Walk/walk4.png',
    '../assets/img/PlayerSprites/Walk/walk5.png')
    
    //Idle
    playerIdle = loadImage('../assets/img/PlayerSprites/Idle/idle.png');

    //Crouch
    playerCrouch = loadAnimation(
        '../assets/img/PlayerSprites/Crouch/crouch0.png',
        '../assets/img/PlayerSprites/Crouch/crouch1.png',
        '../assets/img/PlayerSprites/Crouch/crouch2.png'
    )
    //Jump
    playerJump = loadAnimation(
        '../assets/img/PlayerSprites/jump/jump0.png',
        '../assets/img/PlayerSprites/jump/jump1.png',
        '../assets/img/PlayerSprites/jump/jump2.png'
    )

    //Stand
    playerStand = loadImage('../assets/img/PlayerSprites/stand/stand.png');

    //Combat:
    //Guard
    playerGuard = loadImage('../assets/img/PlayerSprites/guard/guard.png');
    playerGuardCrouch = loadImage('../assets/img/PlayerSprites/guard/guardCrouch.png');
    playerGuardJump = loadImage('../assets/img/PlayerSprites/guard/guardJump.png');

    //Jab
    playerJab = loadAnimation(
        '../assets/img/PlayerSprites/jab/jab0.png',
        '../assets/img/PlayerSprites/jab/jab1.png'
    )
    playerJabCrouch = loadAnimation(
        '../assets/img/PlayerSprites/jab/jabCrouch0.png',
        '../assets/img/PlayerSprites/jab/jabCrouch1.png',
    )
    playerJabJump = loadAnimation(
        '../assets/img/PlayerSprites/jab/jabJump0.png',
        '../assets/img/PlayerSprites/jab/jabJump1.png'
    )

    //Horizontal Strike 
    playerHrzStrike = loadAnimation(
        '../assets/img/PlayerSprites/hrzStrike/hrzStrike0.png',
        '../assets/img/PlayerSprites/hrzStrike/hrzStrike1.png',
        '../assets/img/PlayerSprites/hrzStrike/hrzStrike2.png'
    )
    playerHrzStrikeCrouch = loadAnimation(
        '../assets/img/PlayerSprites/hrzStrike/hrzStrikeCrouch0.png',
        '../assets/img/PlayerSprites/hrzStrike/hrzStrikeCrouch1.png',
        '../assets/img/PlayerSprites/hrzStrike/hrzStrikeCrouch2.png',
    )

    playerHrzStrikeJump = loadAnimation(
        '../assets/img/PlayerSprites/hrzStrike/hrzStrikeJump0.png',
        '../assets/img/PlayerSprites/hrzStrike/hrzStrikeJump1.png',
        '../assets/img/PlayerSprites/hrzStrike/hrzStrikeJump2.png',
    )

    //Vertical Strike
    playerVertStrike = loadAnimation(
        '../assets/img/PlayerSprites/vertStrike/vertStrike0.png',
        '../assets/img/PlayerSprites/vertStrike/vertStrike1.png',
        '../assets/img/PlayerSprites/vertStrike/vertStrike2.png',
    )

    playerVertStrikeCrouch = loadAnimation(
        '../assets/img/PlayerSprites/vertStrike/vertStrikeCrouch0.png',
        '../assets/img/PlayerSprites/vertStrike/vertStrikeCrouch1.png',
        '../assets/img/PlayerSprites/vertStrike/vertStrikeCrouch2.png',
    )

    playerVertStrikeJump = loadAnimation(
        '../assets/img/PlayerSprites/vertStrike/vertStrikeJump0.png',
        '../assets/img/PlayerSprites/vertStrike/vertStrikeJump1.png',
        '../assets/img/PlayerSprites/vertStrike/vertStrikeJump2.png',
    )

    //Damage:
    playerDmgAir = loadAnimation(
        '../assets/img/PlayerSprites/dmgAir/dmgAir0.png',
        '../assets/img/PlayerSprites/dmgAir/dmgAir1-0.png',
        '../assets/img/PlayerSprites/dmgAir/dmgAir1-1.png'
    )
    
    playerDmgCrouch = loadAnimation(
        '../assets/img/PlayerSprites/dmgCrouch/DmgCrouch0.png',
        '../assets/img/PlayerSprites/dmgCrouch/DmgCrouch1.png'
    )

    playerDmgHi = loadAnimation(
        '../assets/img/PlayerSprites/dmgHi/dmgHi0.png',
        '../assets/img/PlayerSprites/dmgHi/dmgHi1.png'
    )

    playerDmgLo = loadAnimation(
        '../assets/img/PlayerSprites/dmgLo/DmgLo0.png',
        '../assets/img/PlayerSprites/dmgLo/DmgLo1.png'
    )

    playerKO = loadAnimation(
        '../assets/img/PlayerSprites/KO/ko0.png',
        '../assets/img/PlayerSprites/KO/ko1.png'
    )




}

function setup() {
    createCanvas(W, H);
    width = W;
    height = H;
    player.setup();

    playerIdle.resize(66, 190)
}

function draw() {
    // Dynamically setup zombies
    for (let i = 0; i < ZOMBIES.length; i++) {
        if (frameCount == ZOMBIES[i].time) {
            eval('zombie' + i + '.setup();');
        }
    }

    clear();

    drawStaticBackground();

    drawBorders();

    player.draw();

    // Dynamically draw zombies
    for (let i = 0; i < ZOMBIES.length; i++) {
        if (frameCount >= ZOMBIES[i].time) {
            eval('zombie' + i + '.draw();');
        }
    }

    // animation(playerWalk, 500, 200);

    drawSprites();

    drawDynamicBackground();

    removeBorders();

    // player.sprite.debug = true
    // zombie.sprite.debug = true
}