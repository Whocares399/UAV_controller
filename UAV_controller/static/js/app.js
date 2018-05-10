var start;
var off;
var stop;
var down;
var _scale = 1;
var input_x;
var throttle;
server_message = "";
oldserver_message = "";

var check = "\u2713";

socket = new WebSocket(('ws://localhost:15678'));
var oldreadyState = -1;

var json_data;
var message_arr = [];



function setup() {
    
    var _x = window.innerWidth * _scale;
    var _y = window.innerHeight * _scale;
  
    createCanvas(_x, _y);
    



 //======Creating Input=========================
    var inp_x = createInput('X');
    inp_x.position(_x * 0.02, _y * 0.2);
    inp_x.input(myInputEvent);
    var inp_x_el = new p5.Element(inp_x.elt);
    inp_x_el.style('width:5%');
    inp_x_el.style.visibility = 'inherit';
    inp_x_el.style.visibility = 'hidden';
 //====================================================    

    var inp_y = createInput('Y');
    inp_y.position(_x * 0.12, _y * 0.2);
    inp_y.input(myInputEvent);
    var inp_y_el = new p5.Element(inp_y.elt);
    inp_y_el.style('width:5%');

    //===========================================

    check_mark =  new status_ball(0.85, 0.15, 2)

    //============

    control = new toggle(0.045, 0.1, 1);
    control.text_OFF = "AUTO";
    control.text_ON = "MAN";

    start = new toggle(0.145, 0.1, 1);

    start.text_OFF = "OFF";
    start.text_ON = "ON";
    //=================================================

    send_button = new button_ON(0.22, 0.22, 1);
    send_button.text = "Send";


    //===============================================

    throttle_1 = new throttle(0.1, 0.4)
    throttle_2 = new throttle(0.8, 0.4)
    
 
}

function touchStarted() { 
   
    
    for (touch_num = 0; touch_num < touches.length; touch_num += 1) {
        //console.log(touches[touch_num].x, touches[touch_num].y);
       
        start.clicked();
        control.clicked();
        send_button.clicked();
        throttle_1.clicked();
        throttle_2.clicked();
        
    }
    

}

function touchMoved() {

    for (touch_num_ = 0; touch_num_ < touches.length; touch_num_ += 1) {
        //console.log(touches[touch_num_].x, touches[touch_num_].y);


        throttle_1.click_move();
        throttle_2.click_move();

    }
    
}

function touchEnded() {

    send_button.released();
    throttle_1.released();
    throttle_2.released()
	
}

function readMessage(e) {
    var server_message = e.data;
    message_arr = server_message.split(";");
    

}


function process_data(n) {

    for (i = 0; i < n.length; i++) {
        var decoded = (n[i]).split(":");
        x_data = parseInt(decoded[0])  + 0.25 * width
        y_data = parseInt(decoded[1])  + 0.25 * height
        fill(255)
        ellipse(x_data, y_data, 5, 5)
        
    }
}
function draw() {
    textStyle(BOLD)

    background(70, 130, 180,100);

    start.show();   control.show();   check_mark.show();   throttle_1.show();   throttle_2.show();    send_button.show();
    send_data = send_button.active; 

    if (socket.readyState != oldreadyState) {
        console.log("The current state is", socket.readyState)
        oldreadyState = socket.readyState;
    }
    if (socket.readyState == 1) {
        check_mark.status = 1;
    }
    else {
        check_mark.status = 0;
    }

    socket.onmessage = readMessage;
    create_landscape();
    process_data(message_arr);
    
    

}


function create_landscape() {
    fill(0)

    rect(0.25 * width, 0.25 * height, 0.5 * width, 0.6 * height, 0.01 * width);

    fill(255)
    triangle(0.5 * width - 6, height * 0.55 + 6, 0.5 * width + 6, height * 0.55 + 6, 0.5 * width, height * 0.55 - 8)
}

function windowResized() {
    var _x = window.innerWidth * _scale
    var _y = window.innerHeight * _scale

    createCanvas(_x, _y);

    control.update();
    send_button.update();
    check_mark.update();
    
    resizeCanvas(_x, _y);
}


function myInputEvent() {
    console.log('you are typing: ', this.value());
}

