let playerState = 0;


class Player{
    constructor(){
        this.sprite
        this.start={
            x:W/12,
            y:3 * H/4
        }
        this.w=30;
        this.h=100;

        this.state = 0
    }
    controls(){
        if(keyIsDown(KEYS.A)){
            this.goLeft();
            this.sprite.mirrorX(-1);
            playerPosition--;
        }
        if(keyIsDown(KEYS.D)){
            this.goRight();
            this.sprite.mirrorX(1);
            playerPosition++;
        }
        if (keyIsDown(KEYS.UP)) {
            this.goUp()
        }
        if (keyIsDown(KEYS.S)) {
            this.goDown()
        }

        if (keyIsDown(17)) {
            this.crouch()
        }
    }
    goLeft(){
        this.sprite.velocity.x -= playerSpeed;
    }
    goRight(){
        this.sprite.velocity.x += playerSpeed
    }
    goUp(){
        this.sprite.velocity.y -= playerSpeed;
    }
    goDown(){
        this.sprite.velocity.y += playerSpeed;
    }

    crouch(){
        this.sprite.changeAnimation("Player Crouch");
        
    }
    setup(){
        this.sprite=this.makePaddle(this.start.x,this.start.y,this.w, this.h)
        //Movement
        this.sprite.addAnimation("Player Walk", playerWalk)
        this.sprite.addImage("Player Idle", playerIdle)
        this.sprite.addAnimation("Player Crouch", playerCrouch)
        this.sprite.addAnimation("Player Jump", playerJump)
        this.sprite.addImage("Player Stand", playerStand)

        //Combat
        this.sprite.addImage("Player Guard", playerGuard)
        this.sprite.addImage("Player GuardCrouch", playerGuardCrouch)
        this.sprite.addImage("Player GuardJump", playerGuardJump)
        this.sprite.addAnimation("Player Jab", playerJab)
        this.sprite.addAnimation("Player JabCrouch", playerJabCrouch)
        this.sprite.addAnimation("Player JabJump", playerJabJump)
        this.sprite.addAnimation("Player HrzStrike", playerHrzStrike)
        this.sprite.addAnimation("Player HrzStrikeCrouch", playerHrzStrikeCrouch)
        this.sprite.addAnimation("Player HrzStrikeJump", playerHrzStrikeJump)
        this.sprite.addAnimation("Player VertStrike", playerVertStrike)
        this.sprite.addAnimation("Player VertStrikeCrouch", playerVertStrikeCrouch)
        this.sprite.addAnimation("Player VertStrikeJump", playerVertStrikeJump)

        //Player Damage
        this.sprite.addAnimation("Player DmgAir", playerDmgAir)
        this.sprite.addAnimation("Player DmgCrouch", playerDmgCrouch)
        this.sprite.addAnimation("Player DmgHi", playerDmgHi)
        this.sprite.addAnimation("Player DmgLo", playerDmgLo)
        this.sprite.addAnimation("Player KO", playerKO)

    }
    draw(){
        this.sprite.collide(leftBorder, scrollLeft);
        this.sprite.collide(rightBorder, scrollRight);
        this.sprite.collide(topBorder);
        this.sprite.collide(bottomBorder);
        this.controls();
    }
    makePaddle(x,y,w,h){
        let tempPaddle=createSprite(x,y,w,h);
        tempPaddle.addImage(playerIdle)
        tempPaddle.mass=100
        tempPaddle.friction=0.3
        tempPaddle.setCollider("rectangle", 0, 0, 40, h * 1.5)
        return tempPaddle;
    }
}