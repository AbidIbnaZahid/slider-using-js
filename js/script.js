let slider = document.querySelectorAll(".slide")
let sliderArray = Array.from(slider)

let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

function prevnext() {
    let activeSlide = document.querySelector(".slide.active")
    let activeIndex = sliderArray.indexOf(activeSlide)

    let prev;
    let next;

    if (activeIndex == 0) {
        prev = sliderArray[sliderArray.length - 1]
    } else {
        prev = sliderArray[activeIndex - 1]
    }
    if (activeIndex == sliderArray.length - 1) {
        next = sliderArray[0]
    } else {
        next = sliderArray[activeIndex + 1]
    }

    // console.log(prev)
    // console.log(next)
    return [next, prev]
}
// prevnext()

function search() {
    let activeSlide = document.querySelector(".slide.active")
    let activeAIndex = sliderArray.indexOf(activeSlide)

    let [next, prev] = prevnext()
    sliderArray.map((slide, index) => {
        if (activeAIndex == index) {
            slide.style.transform = "translateX(0)"
        } else if (slide == prev) {
            slide.style.transform = "translateX(-100%)"
        } else if (slide == next) {
            slide.style.transform = "translateX(100%)"
        }
        slide.addEventListener("transitionend", function () {
            slide.classList.remove("smooth")
        })
    })
}


next.addEventListener("click", function () {
    let activeSlide = document.querySelector(".slide.active")
    let [next] = prevnext()

    activeSlide.classList.add("smooth")
    next.classList.add("smooth")

    activeSlide.classList.remove("active")
    activeSlide.style.transform = "translateX(-100%)"
    next.classList.add("active")
    next.style.transform = "translateX(0)"
    search()
})
prev.addEventListener("click", function () {
    let activeSlide = document.querySelector(".slide.active")
    let [next, prev] = prevnext()

    activeSlide.classList.add("smooth")
    prev.classList.add("smooth")

    activeSlide.classList.remove("active")
    activeSlide.style.transform = "translateX(100%)"
    prev.classList.add("active")
    prev.style.transform = "translateX(0)"
    search()
})

