function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100);
}

function draw() {
    background(240);

    let cx = width / 2;
    let cy = height / 2;
    let diameter = min(width, height) * 0.6;

    // Get current time
    let hr = hour();
    let mn = minute();
    let sc = second();
    let ms = millis() % 1000;

    // Draw the second circle
    let secondRadius = map(sc + ms / 1000, 0, 60, 0, diameter / 2);
    fill(map(sc, 0, 60, 0, 360), 100, 100, 0.3);
    noStroke();
    ellipse(cx, cy, secondRadius * 2, secondRadius * 2);

    // Draw the minute circle
    let minuteRadius = map(mn + sc / 60, 0, 60, 0, diameter / 3);
    fill(map(mn, 0, 60, 0, 360), 80, 100, 0.3);
    noStroke();
    ellipse(cx, cy, minuteRadius * 2, minuteRadius * 2);

    // Draw the hour circle
    let hourRadius = map(hr % 12 + mn / 60, 0, 12, 0, diameter / 4);
    fill(map(hr % 12, 0, 12, 0, 360), 60, 100, 0.3);
    noStroke();
    ellipse(cx, cy, hourRadius * 2, hourRadius * 2);

    // Draw the hour hand
    push();
    translate(cx, cy);
    rotate(map(hr % 12 + mn / 60, 0, 12, 0, 360));
    stroke(50);
    strokeWeight(8);
    line(0, 0, 0, -diameter * 0.2);
    pop();

    // Draw the minute hand
    push();
    translate(cx, cy);
    rotate(map(mn + sc / 60, 0, 60, 0, 360));
    stroke(50);
    strokeWeight(6);
    line(0, 0, 0, -diameter * 0.35);
    pop();

    // Draw the second hand
    push();
    translate(cx, cy);
    rotate(map(sc, 0, 60, 0, 360));
    stroke(255, 0, 0);
    strokeWeight(4);
    line(0, 0, 0, -diameter * 0.4);
    pop();

    // Draw the clock center
    fill(50);
    noStroke();
    ellipse(cx, cy, 10, 10);

    // Draw the clock ticks
    stroke(50);
    strokeWeight(2);
    for (let a = 0; a < 360; a += 30) {
        let x1 = cx + cos(a) * (diameter / 2 + 10);
        let y1 = cy + sin(a) * (diameter / 2 + 10);
        let x2 = cx + cos(a) * (diameter / 2 - 10);
        let y2 = cy + sin(a) * (diameter / 2 - 10);
        line(x1, y1, x2, y2);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


