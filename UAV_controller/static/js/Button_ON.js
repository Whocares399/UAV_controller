function button_ON(xval, yval, size, col_1, col_2) {
    this.x = width;
    this.y = height;
   // this.col = color(255, 0, 0);
    this.size = 0.055 * size;


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
    this.active = 0;

    this.col_state_0;
    this.col_state_1;

    if (typeof col_1 !== "undefined") {
        this.col_state_0 = col_1;
    }
    else {
        this.col_state_0 = color(0,104,0)
    }

    if (typeof col_2 !== "undefined") {
        this.col_state_1 = col_2;
    }
    else {
        this.col_state_1 = color(163,0, 0)
    }

 
    this.col = this.col_state_0;




    this.update = function(){
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
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(Math.ceil(this.diameter / 4));
        text(this.text, this.x, this.y);
        fill(this.col);   

    }
    
    this.show = function draw() {



        noStroke();
        fill(this.col)

        ellipse(this.x, this.y, this.diameter, this.diameter)
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(Math.ceil(this.diameter / 4));
        text(this.text, this.x, this.y);
        fill(this.col);   

    }

    this.clicked = function () {
        var dist_ = dist(touches[touch_num].x, touches[touch_num].y, this.x, this.y)

        
        if (dist_ < this.diameter / 2) {
            this.col = this.col_state_1;
            //console.log(this.col);
        }
        this.active = 1;
        //return true;
    }


    this.released = function () {

        this.col = this.col_state_0;
        //console.log(this.col);
        this.active = 0;
        //return true;
    }

}
