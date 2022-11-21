let width, height;
let playerSize = {
    x: 66,
    y: 190
}
let player = new Player();

let zombie0 = new Zombie(ZOMBIES[0].xPos, ZOMBIES[0].yPos);

let zombie1 = new Zombie(ZOMBIES[1].xPos, ZOMBIES[1].yPos);

let enemiesOnScreen = 0;

let coffee = new Coffee();


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


// item images 
let waterImg;
let coffeeImg;
let beerImg;
let smoothieImg;
let pizzaImg;
let canfoodImg;

//item sounds
let waterSound;
let coffeeSound;
let beerSound;
let smoothieSound;
let pizzaSound;
let canFoodSound;



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
    // road = loadImage('../Jamtacular22_Group3/assets/img/stone_walk.png');
    road = loadImage('../Jamtacular22_Group3/assets/img/stone_walk.png')
    cloud1 = loadImage('../Jamtacular22_Group3/assets/img/Clouds/cloud1.png');
    cloud2 = loadImage('../Jamtacular22_Group3/assets/img/Clouds/cloud2.png');
    cloud3 = loadImage('../Jamtacular22_Group3/assets/img/Clouds/cloud3.png');
    cloud4 = loadImage('../Jamtacular22_Group3/assets/img/Clouds/cloud4.png');

    zombieWalk = loadAnimation(
    '../Jamtacular22_Group3/assets/img/Zombie/walk/jared0133.png',
    '../Jamtacular22_Group3/assets/img/Zombie/walk/jared0173.png'
    )
    zombieAttack = loadAnimation(
    '../Jamtacular22_Group3/assets/img/Zombie/Attack/jared0174.png',
    '../Jamtacular22_Group3/assets/img/Zombie/Attack/jared0198.png'
    )
    
    //Player Images

    //Movement:
    //walk
    playerWalk = loadAnimation(
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk0.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk1.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk2.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk3.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk4.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk5.png')
    
    //Idle
    playerIdle = loadImage('../Jamtacular22_Group3/assets/img/PlayerSprites/Idle/idle.png');

    //Crouch
    playerCrouch = loadAnimation(
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch0.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch1.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch2.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk0.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk1.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk2.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk3.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk4.png',
    '../Jamtacular22_Group3/assets/img/PlayerSprites/Walk/walk5.png')
    
    //Idle
    playerIdle = loadImage('../Jamtacular22_Group3/assets/img/PlayerSprites/Idle/idle.png');

    //Crouch
    playerCrouch = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch2.png'
    )

    playerCrouch.looping = false;



     //Stand
     playerStand = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch2.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/stand/stand.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch2.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/Crouch/crouch0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/stand/stand.png'
        );

     playerStand.looping = false;   
    //Jump
    playerJump = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jump/jump0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jump/jump1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jump/jump2.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jump/jump0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jump/jump1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jump/jump2.png'
    )

   

    //Combat:
    //Guard
    playerGuard = loadImage('../Jamtacular22_Group3/assets/img/PlayerSprites/guard/guard.png');
    playerGuardCrouch = loadImage('../Jamtacular22_Group3/assets/img/PlayerSprites/guard/guardCrouch.png');
    playerGuardJump = loadImage('../Jamtacular22_Group3/assets/img/PlayerSprites/guard/guardJump.png');

    //Jab
    playerJab = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jab0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jab1.png'
    )
    playerJabCrouch = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jabCrouch0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jabCrouch1.png',
    )
    playerJabJump = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jabJump0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jabJump1.png',)
    playerGuard = loadImage('../Jamtacular22_Group3/assets/img/PlayerSprites/guard/guard.png');
    playerGuardCrouch = loadImage('../Jamtacular22_Group3/assets/img/PlayerSprites/guard/guardCrouch.png');
    playerGuardJump = loadImage('../Jamtacular22_Group3/assets/img/PlayerSprites/guard/guardJump.png');

    //Jab
    playerJab = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jab0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jab1.png'
    )
    playerJabCrouch = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jabCrouch0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jabCrouch1.png',
    )
    playerJabJump = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jabJump0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/jab/jabJump1.png'
    )

    //Horizontal Strike 
    playerHrzStrike = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrike0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrike1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrike2.png'
    )
    playerHrzStrikeCrouch = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeCrouch0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeCrouch1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeCrouch2.png',
    )

    playerHrzStrikeJump = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeJump0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeJump1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeJump2.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrike0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrike1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrike2.png'
    )
    playerHrzStrikeCrouch = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeCrouch0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeCrouch1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeCrouch2.png',
    )

    playerHrzStrikeJump = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeJump0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeJump1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/hrzStrike/hrzStrikeJump2.png',
    )

    //Vertical Strike
    playerVertStrike = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrike0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrike1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrike2.png',
    )

    playerVertStrikeCrouch = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeCrouch0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeCrouch1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeCrouch2.png',
    )

    playerVertStrikeJump = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeJump0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeJump1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeJump2.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrike0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrike1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrike2.png',
    )

    playerVertStrikeCrouch = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeCrouch0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeCrouch1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeCrouch2.png',
    )

    playerVertStrikeJump = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeJump0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeJump1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/vertStrike/vertStrikeJump2.png',
    )

    //Damage:
    playerDmgAir = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgAir/dmgAir0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgAir/dmgAir1-0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgAir/dmgAir1-1.png'
    )
    
    playerDmgCrouch = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgCrouch/DmgCrouch0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgCrouch/DmgCrouch1.png'
    )

    playerDmgHi = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgHi/DmgHi0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgHi/DmgHi1.png'
    )

    playerDmgLo = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgLo/DmgLo0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgLo/DmgLo1.png'
    )

    playerKO = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/KO/ko0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/KO/ko1.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgAir/dmgAir0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgAir/dmgAir1-0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgAir/dmgAir1-1.png'
    )
    
    playerDmgCrouch = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgCrouch/DmgCrouch0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgCrouch/DmgCrouch1.png'
    )

    playerDmgHi = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgHi/DmgHi0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgHi/DmgHi1.png'
    )

    playerDmgLo = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgLo/DmgLo0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/dmgLo/DmgLo1.png'
    )

    playerKO = loadAnimation(
        '../Jamtacular22_Group3/assets/img/PlayerSprites/KO/ko0.png',
        '../Jamtacular22_Group3/assets/img/PlayerSprites/KO/ko1.png'
    )

    waterImg = loadImage('../Jamtacular22_Group3/assets/img/Items/water_bottle.png');
    coffeeImg = loadImage('../Jamtacular22_Group3/assets/img/Items/ice_coffee_bottle.png');
    beerImg = loadImage('../Jamtacular22_Group3/assets/img/Items/beer_bottle.png'); 
    smoothieImg = loadImage('../Jamtacular22_Group3/assets/img/Items/old_smoothie.png');
    canfoodImg = loadImage('../Jamtacular22_Group3/assets/img/Items/food_can_1.png');
    pizzaImg = loadImage('../Jamtacular22_Group3/assets/img/Items/old_pizza.png');
    
    // waterSound = loadSound('..assets/sound/drinkWater.mp3');
    // coffeeSound = loadSound('..assets/sound/gulp.mp3');
    // beerSound = loadSound('../Jamtacular22_Group3/assets/sound/beer.mp3');
    // smoothieSound = loadSound('..assets/sound/slurpSmoothie.mp3');
    // pizzaSound = loadSound('..assets/sound/crunchFood2.mp3');
    // canFoodSound = loadSound('..assets/sound/crunchFood.mp3');

}

function setup() {
    createCanvas(W, H);
    width = W;
    height = H;
    player.setup();
    
    
    
    
    
    //Animation Properties 
    //playerIdle.resize(playerSize.x, playerSize.y)
    //playerCrouch.resize(playerSize.x, playerSize.y)
    //playerCrouch.looping(false);
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

    coffee.addSprite();



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

}