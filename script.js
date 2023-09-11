//mouse circle moving effect by simple javascript

var main  = document.querySelector("#main");
var cursor = document.querySelector("#circle");

main.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";

})
