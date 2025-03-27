/*
    Sketch
*/

// Called automatically on load, sets the sketch's initial state
function setup() {
    // Creates an empty 800px x 400px HTML canvas
    createCanvas(800, 400);

    // Sets the background color of the canvas to black
    background("black");

    // Default frame rate is 60 frames per second (FPS)
    // Now is set to 7 FPS
    frameRate(7);
}


// Called automatically in a loop
function draw() {

    // Choose a random color in this array
    let colors = ["#F7931A", "#F7932B", "#F7933C", "#F7934D", "#F7935D"]
    let r = Math.floor(Math.random() * colors.length);

    background(colors[r]);
}