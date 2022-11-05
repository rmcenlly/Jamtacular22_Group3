let leftBorder, rightBorder, bottomBorder, topBorder, borders;

function drawBorders() {
    borders = new Group();

    leftBorder = createSprite(groundPosition + player.sprite.width, H/2, 0, H);
    leftBorder.immovable = true;
    leftBorder.debug = true;
    borders.add(leftBorder);
    
    rightBorder = createSprite(groundPosition + (W - player.sprite.width), H/2, 0, H);
    rightBorder.immovable = true;
    rightBorder.debug = true;
    borders.add(rightBorder);
    
    topBorder = createSprite(groundPosition + W/2, H/2 - player.sprite.height/2, W, 0);
    topBorder.immovable = true;
    borders.add(topBorder);
    
    bottomBorder = createSprite(groundPosition + W/2, H - player.sprite.height/2, W, 0);
    bottomBorder.immovable = true;
    borders.add(bottomBorder);


    player.sprite.collide(leftBorder, scrollLeft);
    player.sprite.collide(rightBorder, scrollRight);
    player.sprite.collide(topBorder);
    player.sprite.collide(bottomBorder);
}

function removeBorders() {
    leftBorder.remove();    
    rightBorder.remove();
    topBorder.remove();
    bottomBorder.remove();
}