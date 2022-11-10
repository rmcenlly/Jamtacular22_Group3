let groundPosition = 0;
let groundHeight = H * (7/12)
function drawStaticBackground() {
    background("#C68836");
    noStroke();

    for (let i = groundHeight; i < H; i += road.width) {
        for (let j = 0; j < groundPosition + W; j+= road.width) {
            image(road, j, i);        
        }
    }
    fill("rgba(0, 0, 0, 0.5)");
    rect(groundPosition, groundHeight, W, groundHeight);
}

function drawDynamicBackground() {
    image(cloud1, W, 50);
    image(cloud2, 900, 10);
    image(cloud3, 50, 60);
    image(cloud4, 6950, 60);
}