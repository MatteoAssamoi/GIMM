function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(220)

	let s = second ()
	if (s < 10) {
		s = "0" + s
	}
	
	let m = minute ()
	if (m < 10) {
	    m = "0" + m
    }
	
	let h = hour ()
	if (h < 10) {
		h = "0" + h
	}
    
    const txt= h + ":" + m + ":" + s



    noStroke(0)
	fill(0)
    rect (0, height/3 * 0, second() / 60 * width, height/3)
	rect (0, height/3 * 1, minute() / 60 * width, height/3)
	rect (0, height/3 * 2, hour() / 60 * width, height/3)
	
	
	
	textAlign(CENTER, CENTER)
	textSize(80)
	fill(255)
	noStroke()
	
	text(txt, width/2, height/2)

}
