function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
    // if second == 0, print the minute
	background(225);

	let red_circle_width = 40
	let yellow_circle_width = 80
	let blue_circle_width = 120
    
    let center_x = width/2
    let center_y = height/2

    let blue_x = center_x
    let blue_y = center_y -(red_circle_width/2)+blue_circle_width
    let blue_opacity = 15+hour()*10
	fill(0,0,225,blue_opacity); 
	let blue_circle = circle(blue_x,blue_y,blue_circle_width)
    
    let new_blue_x = map(blue_x, center_x, center_y, blue_x + hour()*5, hour())
    fill(0,0,225,blue_opacity); 
    blue_circle = circle(new_blue_x,blue_y,blue_circle_width)
    
    let yellow_x = center_x + yellow_circle_width
    let yellow_y = center_y -(red_circle_width/2)
    let yellow_opacity = 19+minute()*4
	fill(255,255,51,yellow_opacity); 
	let yellow_circle = circle(yellow_x,yellow_y,yellow_circle_width)
    
    let new_yellow_y = map(yellow_y, center_x, center_y, yellow_y, yellow_y-minute()*3)
    fill(255,255,51,yellow_opacity); 
    yellow_circle = circle(yellow_x,new_yellow_y,yellow_circle_width)

    let red_x = center_x
    let red_y = center_y - (red_circle_width/2)
    let red_opacity = 19+second()*4
	fill(255,0,0, red_opacity); 
	let red_circle = circle(red_x,red_y,red_circle_width)
    let new_red_x = map(red_x, center_x, center_y, red_x - second()*5, second())
    fill(255,0,0, red_opacity); 
    red_circle = circle(new_red_x,red_y,red_circle_width)

}




