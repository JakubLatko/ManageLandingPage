const navList = document.querySelector(".navList")
const hamBtn = document.querySelector(".hamburgerButton")
const hamIcon = document.querySelector(".hamburgerIcon")

hamBtn.addEventListener("click", ()=>{
    console.log("dziaola")
    if(navList.ariaExpanded == "true"){
        navList.classList.add("hidden")
        hamIcon.src="assets/images/icon-hamburger.svg"
        navList.setAttribute("aria-expanded", false)
    } else if(navList.ariaExpanded == "false"){
        navList.classList.remove("hidden")
        hamIcon.src="assets/images/icon-close.svg"
        navList.setAttribute("aria-expanded", true)
    }
})

const leftArrow = document.querySelector(".leftArrow")
const rightArrow = document.querySelector(".rightArrow")
const dots = document.querySelectorAll(".dot")
  
const testimonialsNode = document.querySelectorAll(".testimonial")

let index = 0


leftArrow.addEventListener("click", ()=>{
    index = index - 1
    if(index < 0) {
        index = testimonialsNode.length  - 1
    }
    testimonialsNode.forEach(element => {
        element.classList.remove("activeSlide")
    })
    testimonialsNode[index].classList.add("activeSlide")
    dots.forEach(element => {
        element.classList.remove("filledDot")
    })
    dots[index].classList.add("filledDot")
})

rightArrow.addEventListener("click", ()=>{
    index = index + 1
    if(index > testimonialsNode.length - 1) {
        index = 0
    }
    testimonialsNode.forEach(element => {
        element.classList.remove("activeSlide")
    })
    testimonialsNode[index].classList.add("activeSlide")

    dots.forEach(element => {
        element.classList.remove("filledDot")
    })
    dots[index].classList.add("filledDot")
    
})
