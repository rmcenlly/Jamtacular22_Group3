class Player{
    constructor(){
        this.sprite
        this.start={
            x:W/8,
            y:3 * H/4
        }
        this.w=30;
        this.h=100;
    }
    controls(){
        if(keyIsDown(KEYS.A)){
            this.goLeft()
        }
        if(keyIsDown(KEYS.D)){
            this.goRight()
        }
        if (keyIsDown(KEYS.UP)) {
            this.goUp()
        }
        if (keyIsDown(KEYS.S)) {
            this.goDown()
        }
    }
    goLeft(){
        this.sprite.velocity.x-=3
    }
    goRight(){
        this.sprite.velocity.x+=3
    }
    goUp(){
        this.sprite.velocity.y -= 3;
    }
    goDown(){
        this.sprite.velocity.y += 3;
    }
    setup(){
        this.sprite=this.makePaddle(this.start.x,this.start.y,this.w, this.h)
    }
    draw(){
        this.controls()
    }
    makePaddle(x,y,w,h){
        let tempPaddle=createSprite(x,y,w,h);
        tempPaddle.shapeColor="red";
        tempPaddle.mass=100
        tempPaddle.friction=0.3
        return tempPaddle;
    }
}