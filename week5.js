/*
    Paste the code for your week 5 exercise below.
*/

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {
    background(10, 20, 30)
    noCursor();
    fill('white')
    circle(mouseX, mouseY, 5);
    stroke(255)

    noFill()

    translate(width / 2, height / 2)

    for (var i = 0; i < 200; i++) {
        push()

        rotate(sin(frameCount + i) * 100)

        var weight = map(sin(frameCount), -1, 1, 0.1, 0.5)

        strokeWeight(weight)

        rect(0, 0, 600 - i * 6, 600 - i * 3, 200 - i)

        pop()
    }
}
