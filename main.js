
canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=90;

var rover_x=10;
var rover_y=10;

var rover_x2=10;
var rover_y2=100;

var rover_img="car_1.jpg";
var rover_img2="car_2.jpg";
var background_img="race background.jpg";
function add() {
    background_mars_img=new Image();
    background_mars_img.onload=uploadbackground;
    background_mars_img.src=background_img;

    rover_mars_img=new Image();
    rover_mars_img.onload=uploadrover;
    rover_mars_img.src=rover_img;

    rover_mars_img2=new Image();
    rover_mars_img2.onload=uploadrover2;
    rover_mars_img2.src=rover_img2;
}
function uploadbackground() {
    ctx.drawImage(background_mars_img, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_mars_img, rover_x, rover_y, rover_width, rover_height);
}
function uploadrover2(){
    ctx.drawImage(rover_mars_img2, rover_x2, rover_y2, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=="37"){
        left()
        console.log("left")
    }
    if(keypress=="38"){
        up()
        console.log("up")
    }
    if(keypress=="39"){
        right()
        console.log("right")
    }
    if(keypress=="40"){
        down()
        console.log("down")
    }
    if(keypress=="87"){
        up1()
        console.log("car2 up")
    }
    if(keypress=="83"){
        down1()
        console.log("car2 down")
    }
    if(keypress=="65"){
        left1()
        console.log("car2 left")
    }
    if(keypress=="68"){
        right1()
        console.log("car2 right")
    }
}
function up() {
    if( rover_y>=0 ) {
        rover_y=rover_y-10 ;
        uploadbackground() ;
        uploadrover();
        uploadrover2();
    }
}
function down() {
    if( rover_y<=500 ) {
        rover_y=rover_y+10 ;
        uploadbackground() ;
        uploadrover();
        uploadrover2();
    }
}
function left() {
    if( rover_x>=0 ) {
        rover_x=rover_x-10 ;
        uploadbackground() ;
        uploadrover();
        uploadrover2();
    }
}
function right() {
    if( rover_x<=700 ) {
        rover_x=rover_x+10 ;
        uploadbackground() ;
        uploadrover();
        uploadrover2();
    }
}
function up1() {
    if( rover_y2>=0 ) {
        rover_y2=rover_y2-10 ;
        uploadbackground() ;
        uploadrover2();
        uploadrover();
    }
}
function down1() {
    if( rover_y2<=500 ) {
        rover_y2=rover_y2+10 ;
        uploadbackground() ;
        uploadrover2();
        uploadrover();
    }
}
function left1() {
    if( rover_x2>=0 ) {
        rover_x2=rover_x2-10 ;
        uploadbackground() ;
        uploadrover2();
        uploadrover();
    }
}
function right1() {
    if( rover_x2<=700 ) {
        rover_x2=rover_x2+10 ;
        uploadbackground() ;
        uploadrover2();
        uploadrover();
    }
}