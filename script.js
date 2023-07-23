const timeline = gsap.timeline();

timeline
.from("#typing", {
    duration: 1,
    y: 70,
    ease: "expo.easeInOut",
    opacity: 0
})
.from("#mountains", {
    duration: 1,
    y: 60,
    scale: 1.5,
    ease: "expo.easeInOut",
    opacity: 0
}, "-=0.5")

let mousepointer = document.querySelector("#mousepointer")
mousepointer.addEventListener("mousemove", () => {
    mousepointer.style.top = event.pageX;
    mousepointer.style.left = event.pageY;
})