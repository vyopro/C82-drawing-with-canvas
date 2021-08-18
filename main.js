var mouseevent = "empty";
var lastpositionofX, lastpositionofY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black"
var width_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_line = document.getElementById("Widthofline").value;
    mouseevent = "mousedown"

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseevent = "mouseup"
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseevent = "mouseleave"
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_x = e.clientX - canvas.offsetLeft
    current_position_y = e.clientY - canvas.offsetTop
    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        ctx.moveTo(lastpositionofX, lastpositionofY);
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    }
    lastpositionofX=current_position_x
    lastpositionofY=current_position_y
}

function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}