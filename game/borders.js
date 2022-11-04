let leftBorder, rightBorder, bottomBorder, topBorder, borders;

function drawBorders() {
    borders = new Group();

    leftBorder = createSprite(player.sprite.width, H/2, 0, H);
    leftBorder.immovable = true;
    borders.add(leftBorder);
    
    rightBorder = createSprite(W - player.sprite.width, H/2, 0, H);
    rightBorder.immovable = true;
    borders.add(rightBorder);
    
    topBorder = createSprite(W/2, H/2 - player.sprite.height/2, W, 0);
    topBorder.immovable = true;
    borders.add(topBorder);
    
    bottomBorder = createSprite(W/2, H - player.sprite.height/2, W, 0);
    bottomBorder.immovable = true;
    borders.add(bottomBorder);
}