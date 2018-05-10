// JavaScript source code
function status_ball(xval, yval, size) {
    this.x = width;
    this.y = height;
    this.col = color(163, 0, 0, 100);
    this.size = 0.055 * size


    this.status = 0;


    this.x = xval * this.x;
    this.y = yval * this.y;

    if (this.x > this.y) {
        this.diameter = this.x * this.size;
    }
    else {
        this.diameter = this.y * this.size;
    }

    this.update = function () {
        this.x = width;
        this.y = height;



        if (this.x > this.y) {
            this.diameter = this.x * this.size;
        }
        else {
            this.diameter = this.y * this.size;
        }

        this.x = xval * this.x;
        this.y = yval * this.y;


        if (this.status == 1) {
            this.text = check;
            this.col = color(255, 0, 0, 100);
        }
        else {
            this.text = "X";
            this.col = color(0, 255, 0, 100);
        }


        textAlign(CENTER, CENTER);
        fill(255);
        textSize(Math.ceil(this.diameter / 3));
        text(this.text, this.x, this.y);
        fill(this.col);
    }

    this.show = function draw() {


      
        if (this.status == 1) {
            this.text = check;
            this.col = color(0, 104, 0);
            
        }
        else {
            this.text = "X";
            this.col = color(163, 0, 0);
            
        }

        noStroke();
        fill(this.col);


        ellipse(this.x, this.y, this.diameter, this.diameter);

        textAlign(CENTER, CENTER);
        fill(255);
        textSize(Math.ceil(this.diameter / 2));
        text(this.text, this.x, this.y);
        fill(this.col);
    }
}