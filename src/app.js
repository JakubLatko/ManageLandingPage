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


// const haystack = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]

// function findNeedle(haystack) {
//     console.log(haystack)
//     // haystack.forEach(element => {
//     //     console.log(element)
        
//     // })
// }

// findNeedle()

// // if(element == "needle"){ 
//         //     console.log(haystack.findIndex(element)) 
//         // } 