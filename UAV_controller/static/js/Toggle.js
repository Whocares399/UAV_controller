function toggle(xval, yval, size) {
    this.x = width;
    this.y = height;
    this.col = color(163, 0, 0);
    this.size = 0.055 * size

    if (this.x > this.y) {
        this.diameter = this.x * this.size;
    }
    else {
        this.diameter = this.y * this.size;
    }
    this.x = xval * this.x;
    this.y = yval * this.y;
    this.toggle;

    this.text = "";
    this.text_ON = "";
    this.text_OFF = "";

    textAlign(CENTER);

    //textSize(Math.floor(this.x/3));








    this.update = function () {
        this.x = width;
        this.y = height;
        

        if (this.active == true) {
            this.col = color(163, 0, 0);
            this.text = this.text_ON;
        }
        else {
            this.col = color(0, 104, 0);
            this.text = this.text_OFF;
        }
        if (this.x > this.y) {
            this.diameter = this.x * this.size;
        }
        else {
            this.diameter = this.y * this.size;
        }

        this.x = xval * this.x;
        this.y = yval * this.y;

        textAlign(CENTER, CENTER);
        fill(255);
        textSize(Math.ceil(this.diameter / 3));
        text(this.text, this.x, this.y);
        console.log(this.diameter);
        fill(this.col);
    }

    this.show = function draw() {
       

        if (this.active == true) {
            this.col = color(163, 0, 0);
            this.text = this.text_OFF;
        }
        else {
            this.col = color(0, 104, 0);
            this.text = this.text_ON;
        }
 
        noStroke();
        fill(this.col);
        
        ellipse(this.x, this.y, this.diameter, this.diameter);

        textAlign(CENTER,CENTER);
        fill(255);
        textSize(Math.ceil(this.diameter / 4));
        text(this.text, this.x , this.y);
        fill(this.col);   
    }


    this.clicked = function () {
        var dist_ = dist(touches[touch_num].x, touches[touch_num].y, this.x, this.y)
 
        if (dist_ < this.diameter / 2) {
            this.active = !this.active;
        }

        //return true;
    }


}
