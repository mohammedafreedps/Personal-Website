let textdown = document.querySelector (".textbottom")
let textup = document.querySelector (".texttop")
let parain = document.querySelector(".parain")
let backbtn = document.querySelector(".backbrn")

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=>{
        textdown.classList.add("slideup")
    },1300);
    setTimeout(()=>{
        textup.classList.add("active")
    },);
    setTimeout(()=>{
        parain.classList.add("active")
        backbtn.classList.add("active")
    },3000);
})

