
// attempting to create a generic item class 
let beerImg;
let beerSound;

function preload () {
beerImg = loadImage('assets/img/items/beer_bottle.png');
beerSound = loadSound('assets/sound/beer.mp3');
}

class item{
    constructor(){
    this.pos.x = random (0, 500);
    this.pos.y = random (200, 500);
    this.itemSprite;
    this.itemSound;
    this.itemCollision;
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
    itemRemove(){
        this.itemSound.play;
        this.itemSprite.remove();
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
  }
 