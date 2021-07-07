function toggleMenu(p){
    var x = document.getElementById("myModal");
    var blur = document.getElementById("else");
    if (x.style.display === "block"){
        x.style.display = "none";
        p.classList.toggle("change");
        blur.style.filter = "blur(0px)";
    }else{
        x.style.display = "block";
        p.classList.toggle("change");
        blur.style.filter = "blur(8px)";

    }
}






// Get the modal
var modal = document.getElementById("myModal");
    
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When click outside Modal change ToggleMenu icon
var p = document.getElementById("toggleX");

// Blur Effect
var blur = document.getElementById("else");



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}




//circles animation with mouse.

if ($(window).width() > 768) {
    jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
    mouseX = e.pageX - 800;
    mouseY = e.pageY - 800; 
    });
    
    setInterval(function(){
    xp += ((mouseX - xp)/46);
    yp += ((mouseY - yp)/46);
    $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 20);

    });
}

if ($(window).width() > 768) {
    jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
    mouseX = e.pageX - 550;
    mouseY = e.pageY - 610; 
    });
    
    setInterval(function(){
    xp += ((mouseX - xp)/35);
    yp += ((mouseY - yp)/35);
    $("#circle2").css({left: xp +'px', top: yp +'px'});
    }, 20);

    });
}


if ($(window).width() > 768) {
    jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
    mouseX = e.pageX - 350;
    mouseY = e.pageY - 450; 
    });
    
    setInterval(function(){
    xp += ((mouseX - xp)/30);
    yp += ((mouseY - yp)/30);
    $("#circle3").css({left: xp +'px', top: yp +'px'});
    }, 20);

    });
}


//Circle opacity animation

function circleAnimationIn(){
    var ct1 = document.getElementById("circle");
    var ct2 = document.getElementById("circle2");
    var ct3 = document.getElementById("circle3");
    ct2.classList.toggle("circleAnimation2");
    ct3.classList.toggle("circleAnimation1");
    ct1.classList.toggle("circleAnimation3");
}