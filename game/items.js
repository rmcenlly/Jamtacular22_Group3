
// attempting to create a generic item class 


class item{
    constructor(){
    this.pos.x = random (0, 500);
    this.pos.y = random (200, 500);
    this.itemSprite;
    }

    addSprite(x, y, size){
        this.itemSprite = createSprite(x, y, size, size);
        this.itemSprite.setCollider('circle', 0, 0, size, size);
    }

    display(){
        addSprite(this.pos.x, this.pos.y);
    } 

    addCollision(){
        this.itemSprite.collide(Player, itemRemove)
    }    
}

//when character collides with item, item disappear and sound play

class beer extends item{
    constructor(){
      super() //this calls the constructor in item
    }
    addSprite(x, y, size){
      this.itemSprite=createSprite;
      this.itemSprite.setCollider("circle", 0, 0, size, size);
      this.itemSprite.addImage(beerImg);
    }

    itemRemove(){
        this.beerSound.play();
        this.itemSprite.remove();
        this.beerSound.stop();
    }
  }

 
  class coffee extends item{
    constructor(){
      super() //this calls the constructor in item
    }
    addSprite(x, y, size){
      this.itemSprite=createSprite;
      this.itemSprite.setCollider("circle", 0, 0, size, size);
      this.itemSprite.addImage(beerImg);
    }

    itemRemove(){
        this.beerSound.play();
        this.itemSprite.remove();
        this.beerSound.stop();
    }
  }
 