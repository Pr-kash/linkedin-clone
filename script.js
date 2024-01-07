let profileMenu = document.getElementById("profileMenu");
function toggleMenu(){
    profileMenu.classList.toggle("open-menu")
}

gsap.from(".navbar",{
    y:-10  ,
    duration:.9,
    delay:0.5,
    opacity:0,
    stagger:0.5
})
gsap.from(".left-sidebar",{
    y:-10  ,
    duration:.9,
    delay:0.5,
    opacity:0,
    stagger:0.5
})
gsap.from(".right-sidebar",{
    y:-10  ,
    duration:.9,
    delay:0.5,
    opacity:0,
    stagger:0.5
})

gsap.from(".container",{
    x:-10,
    duration:.9,
    delay:0.6,
    opacity:0,
    stagger:1,
    
})
