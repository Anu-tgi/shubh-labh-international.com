let navLinks = document.querySelectorAll(".carousel_feat .nav-link_feat")
let slides = document.querySelectorAll(".carousel_feat .slides_feat img")
let overlays = document.querySelectorAll(".carousel_feat .bar")
let maxZIndex = navLinks.length
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)"
let currentIndex = 0
let autoSlideInterval

slides[0].classList.add("active")
navLinks[0].classList.add("active")
overlays[0].style.zIndex = `${navLinks.length}`

navLinks.forEach((navLink, activeIndex) => {
  overlays[activeIndex].style.zIndex = `${navLinks.length - activeIndex}`
  navLink.addEventListener("click", () => {
    goToSlide(activeIndex)
    restartAutoSlide()
  })
})

function goToSlide(activeIndex) {
  currentIndex = activeIndex
  navLinks.forEach(navLink => navLink.classList.remove("active"))
  navLinks[activeIndex].classList.add("active")
  // slide
  let currentSlide = document.querySelector(".carousel_feat .slides_feat img.active")
  let slideFadeOut = currentSlide.animate(
    [
      { transform: "translateX(0)", opacity: 1 },
      { transform: "translateX(5%)", opacity: 0 }
    ],
    {
      duration: 600,
      easing: "ease-in",
      fill: "forwards"
    }
  )
  slideFadeOut.onfinish = () => {
    slides.forEach(slide => slide.classList.remove("active"))
    let activeSlide = slides[activeIndex]
    activeSlide.classList.add("active")
    activeSlide.animate(
      [
        {
          transform: "translateX(-5%)",
          opacity: 0
        },
        {
          transform: "translateX(0)",
          opacity: 1
        }
      ],
      { duration: 600, easing: "ease-out", fill: "forwards" }
    )
  }
  // overlay
  maxZIndex += 1
  let activeOverlay = overlays[activeIndex]
  activeOverlay.style.zIndex = `${maxZIndex}`
  activeOverlay.animate(
    [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
    { duration: 1200, fill: "forwards", easing: easeInOutQuart }
  )
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % navLinks.length
  goToSlide(nextIndex)
}

function restartAutoSlide() {
  clearInterval(autoSlideInterval)
  autoSlideInterval = setInterval(nextSlide, 3000)
}

// Start the automatic slider
restartAutoSlide()