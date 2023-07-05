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