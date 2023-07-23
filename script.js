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
.from("#box1", {
    duration: 1,
    x: -100,
    ease: "expo.easeInOut",
    opacity: 0
})
.from("#box2", {
    duration: 1,
    x: 100,
    ease: "expo.easeInOut",
    opacity: 0
})
.from("#box3", {
    duration: 1,
    x: -100,
    ease: "expo.easeInOut",
    opacity: 0
})
.from("#box4", {
    duration: 1,
    x: 100,
    ease: "expo.easeInOut",
    opacity: 0
})

let mousepointer = document.querySelector("#mousepointer")
window.addEventListener("mousemove", () => {

    let x_coordinates = event.pageX + "px";
    let y_coordinates = event.pageY + "px";
    mousepointer.style.left = x_coordinates + "px";
    mousepointer.style.top = y_coordinates + "px";
})