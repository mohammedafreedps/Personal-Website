aboutheading = document.querySelector(".about-heading")
abouttxt = document.querySelector(".abouttxt")
let backbtn = document.querySelector(".backbrn")


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=>{
        aboutheading.classList.add("active")
    },1300);
    setTimeout(()=>{
        abouttxt.classList.add("active")
    },);
    setTimeout(()=>{
        backbtn.classList.add("active")
    },3000);
 })
