
window.onload = function() {
    document.getElementById("intro-screen").style.visibility = "visible";
 };

 document.addEventListener("DOMContentLoaded", function() {
    // Disable scrolling
    document.body.style.overflow = "hidden";
 
    // Set a timeout for 3 seconds
    setTimeout(function() {
       // Enable scrolling again
       document.body.style.overflow = "auto";
    }, 3000);
 });

 