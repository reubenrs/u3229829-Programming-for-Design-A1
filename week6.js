/*
    Paste the code for your week 3 exercise below.
*/

function setup() {
    createCanvas(windowWidth, windowHeight);

    angleMode(DEGREES)
}

function draw() {
    background(10, 20, 30)
    stroke(255)
    noFill()

    translate(width / 2, height / 2)

    beginShape()
    for (var i = 0; i < 359; i++) {

        let d = dist(width / 2, height / 2, mouseX, mouseY)

        var r1Min = map(sin(frameCount), -1, 1, 50 - d, 100 + d)
        var r1Max = map(sin(frameCount), -1, 1, 100, 0)

        var r2Min = map(sin(frameCount), -1, 1, 100 - d, 50 + d)
        var r2Max = map(sin(frameCount), -1, 1, 0, 100)

        var r3Min = map(sin(frameCount), -1, 1, 100, 50)
        var r3Max = map(sin(frameCount), -1, 1, 0, 100)

        var r1 = map(sin(i * 3), -1, 1, r1Min, r1Max)
        var r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max)
        var r3 = map(sin(i * 12 + 180), -1, 1, r3Min, r3Max)
        var r = r1 + r2 + r3
        var x = r * cos(i)
        var y = r * sin(i)
        vertex(x, y)
    }
    endShape(CLOSE)
}