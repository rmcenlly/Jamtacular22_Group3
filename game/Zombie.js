let zombieState = 0;

class Zombie{
    constructor(x, y){
        this.sprite
        this.start={
            x: x,
            y: y
        }
        this.w=112;
        this.h=190;
        // this.state = 0;
    }
    setup(){
        this.sprite=this.makeZombie(this.start.x, this.start.y, this.w, this.h);
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
    makeZombie(x,y,w,h){
        let tempZombie=createSprite(x,y,w,h);
        tempZombie.addAnimation("Walking Zombie", zombieWalk)
        tempZombie.addAnimation("Attacking Zombie", zombieAttack)
        tempZombie.mass=100
        tempZombie.friction=0.3
        tempZombie.setCollider("rectangle", 0, -50, w - 50, 25)
        return tempZombie;
    }
    attackPlayer() {
        zombieState = 1;
        this.changeAnimation("Attacking Zombie");
    }
}

const ZOMBIES = [
    {
        xPos: 700,
        yPos: 3 * H/4,
        time: 1
    },
    {
        xPos: 1000,
        yPos: 3 * H/4,
        time: 300
    }
];

for (let i = 0; i < ZOMBIES.length; i++) {
    eval('let zombie' + i + ' = new Zombie(ZOMBIES[' + i + '].xPos, ZOMBIES[' + i + '].yPos)')
}