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
const testimonialsWrapper = document.querySelector(".testimonialsWrapper")
  
const testimonialsNode = document.querySelectorAll("testimonial")
const testimonials = testimonials.from(testimonialsNode)
console.log(testimonials)

let index = 0



//let array = [1, 2, 3]

// leftArrow.addEventListener("click", ()=>{
//     index = index - 1
//     // testimonials.forEach(element => {
//     //     console.log(element)
//     //     // element.classList.remove("activeSlide")
//     //     // element[index].classList.add("activeSlide")
//     // });
// })

// rightArrow.addEventListener("click", ()=>{
//     console.log(testimonials[1])
//     index = index + 1
//     // for (let i = 0; index < testimonials.length; i++) {
//     //     console.log(testimonials[i])
        
//     // }
// })

// // array.forEach(element => {
// //     console.log(element)
// // });