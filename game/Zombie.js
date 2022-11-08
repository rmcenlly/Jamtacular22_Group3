// zombie = createSprite(500, 3 * H/4, 50, 50);

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
    }
    draw() {
        this.sprite.attractionPoint(0.2, player.sprite.position.x, player.sprite.position.y);

        player.sprite.collide(this.sprite)

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
        tempPaddle.mass=100
        tempPaddle.friction=0.3        
        return tempPaddle;
    }
}