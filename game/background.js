let groundPosition = 0;
function drawStaticBackground() {
    background("#C68836");
    noStroke();

    for (let i = H/2; i < H; i += road.width) {
        for (let j = groundPosition; j < groundPosition + W; j+= road.width) {
            image(road, j, i);        
        }
    }
    fill("rgba(0, 0, 0, 0.7)");
    rect(groundPosition, H/2, W, H/2);
}

function drawDynamicBackground() {
    image(cloud1, W, 50);
    image(cloud2, 900, 10);
    image(cloud3, 50, 60);
    image(cloud4, 6950, 60);
}