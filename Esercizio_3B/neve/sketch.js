let snowflakes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(255);
    noStroke();
}

function draw() {
    background('black');

    // Create new snowflakes
    let t = frameCount / 60;
    for (let i = 0; i < random(2); i++) {
        snowflakes.push(new snowflake());
    }

    // Display and update snowflakes
    for (let flake of snowflakes) {
        flake.update();
        flake.display();
    }
}

// Snowflake class
function snowflake() {
    this.posX = random(width);
    this.posY = random(-50, 0);
    this.size = random(2, 5);
    this.speed = random(1, 4); // Accelerate the fall speed

    this.update = function() {
        this.posY += this.speed;

        // Reset position if it goes off the screen
        if (this.posY > height) {
            this.posY = random(-50, 0);
            this.posX = random(width);
        }
    };

    this.display = function() {
        ellipse(this.posX, this.posY, this.size);
    };
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

