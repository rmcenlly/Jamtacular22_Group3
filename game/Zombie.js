// zombie = createSprite(500, 3 * H/4, 50, 50);

let zombieState = 0;

class Zombie{
    constructor(){
        this.sprite
        this.start={
            x:700,
            y:3 * H/4
        }
        this.w=112;
        this.h=190;
    }
    setup(){
        this.sprite=this.makePaddle(this.start.x,this.start.y,this.w, this.h);
        enemiesOnScreen++;
        this.sprite.immovable = true;
    }
    draw() {
        this.sprite.attractionPoint(0.2, player.sprite.position.x, player.sprite.position.y);

        this.sprite.collide(player.sprite, this.attackPlayer);

        let currentAttackingFrame = this.sprite.animations["Attacking Zombie"].getFrame();

        // If zombie is attacking, zombie won't move
        if (zombieState != 0) {
            this.sprite.attractionPoint(-0.2, player.sprite.position.x, player.sprite.position.y);
        }

        if (currentAttackingFrame == 24) {
            this.sprite.animations["Attacking Zombie"].changeFrame(0);
            this.sprite.changeAnimation("Walking Zombie");
            zombieState = 0;
        }


        if (this.sprite.position.x < player.sprite.position.x) {
            this.sprite.mirrorX(-1);
        }
        else {
            this.sprite.mirrorX(1);
        }
    }
    makePaddle(x,y,w,h){
        let tempPaddle=createSprite(x,y,w,h);
        tempPaddle.addAnimation("Walking Zombie", zombieWalk)
        tempPaddle.addAnimation("Attacking Zombie", zombieAttack)
        tempPaddle.mass=100
        tempPaddle.friction=0.3
        tempPaddle.setCollider("rectangle", 0, -50, w - 50, 25)
        return tempPaddle;
    }
    attackPlayer() {
        this.changeAnimation("Attacking Zombie");
        zombieState = 1;
    }
}