let leftBorder, rightBorder, bottomBorder, topBorder, borders;

function drawBorders() {
    borders = new Group();

    leftBorder = createSprite(groundPosition + 30, H/2, 0, H);
    leftBorder.immovable = true;
    borders.add(leftBorder);
    
    rightBorder = createSprite(groundPosition + 1370, H/2, 0, H);
    rightBorder.immovable = true;
    borders.add(rightBorder);
    
    topBorder = createSprite(groundPosition + W/2, H/2 - player.sprite.height/2, W, 0);
    topBorder.immovable = true;
    borders.add(topBorder);
    
    bottomBorder = createSprite(groundPosition + W/2, 720, W, 0);
    bottomBorder.immovable = true;
    borders.add(bottomBorder);
}

function removeBorders() {
    leftBorder.remove();    
    rightBorder.remove();
    topBorder.remove();
    bottomBorder.remove();
}