let introblocker = document.querySelector('.intro_blocker')
let facelogo = document.querySelector('.facelogo-control')
const myname = document.querySelector('.myname')
const mainbanner = document.querySelector('.mainbanner')
let aboutslide = document.querySelector('.aboutme')
let test = document.querySelector(".about-page")
let aboutslidefade = document.querySelector(".about-p")
let body = document.querySelector("body")

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=>{
        facelogo.classList.add("active")
    },800);
    setTimeout(()=>{
        facelogo.classList.add("disapper")
    },3300);
    setTimeout(()=>{
        introblocker.classList.add("fade")
       
    },4000)
    setTimeout(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry =>{
                entry.target.classList.add("slidein")
            },{
                threshould: 1
            })
            console.log(entries+"myname")
        })      
        observer.observe(myname)
    },4000)
    setTimeout(()=>{
        body.classList.add('notactive')
        mainbanner.classList.add("blur")
    },3999)
})
