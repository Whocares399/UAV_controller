// JavaScript source code
function throttle(xval, yval) {
    this.x = width;
    this.y = height;
    this.col = color(163, 0, 0);
    
    


    this.x = xval * this.x;
    this.y = yval * this.y;
    this.toggle;

    this.text = "";
    this.active = 0;
    this.touched = 0;



    this.y_move = this.y + 0.125 * height;




    this.update = function () {
        this.x = width;
        this.y = height;


        if (this.x > this.y) {
            this.diameter = this.x * this.size;
        }
        else {
            this.diameter = this.y * this.size;
        }

    }

    this.show = function draw() {
        fill(this.col)

        rect(this.x, this.y, 0.1 * width, 0.50 * height, 0.05 * width)
        fill(color(99, 110, 114))

        
        rect(this.x + 0.025 * width, this.y_move, 0.05 * width, 0.25 * height, 0.03 * width)
        
        fill(this.col)


    }

    this.clicked = function () {
        

        this.t_x = touches[touch_num].x;
        this.t_y = touches[touch_num].y;

        if (this.t_x > this.x && this.t_x < this.x + 0.1 * width) {
            fill(200);

            this.touch_id = touch_num;
            this.touched = 1;
        }
        else {
            console.log("NOT")
        }
        //return true;
    }

    this.click_move = function () {

        if (this.touch_id !== undefined && this.touched == 1) {
       
            this.t_x = touches[this.touch_id].x;
            this.t_y = touches[this.touch_id].y;

            this.y_range = this.t_y > this.y + 0.01 * this.y && this.t_y < this.y + 0.250 * height;
              
            if (this.y_range ==  true) {
                this.y_move = touches[this.touch_id].y;
            }
            
        }

    }


    this.released = function () {

       
        this.y_move = this.y + 0.125 * height;
        fill(this.col);
        this.touched = 0;
        //return true;
    }

}
