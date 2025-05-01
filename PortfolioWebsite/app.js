const video1= document.getElementById('projectVideo1')
const video2= document.getElementById('projectVideo2')

const hoverSign = document.querySelector(".hover-sign")

// SidebarElements
const sideBar =document.querySelector('.sidebar')
const menu = document.querySelector('.menu-icon')
const close = document.querySelector('.close-icon')

const videoList = [video1, video2]   //this array serves as a centralized collection of video elements

videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
        hoverSign.classList.add("active")  // add active class when mouse over
    })
    video.addEventListener('mouseout', function(){
        video.pause()
        hoverSign.classList.remove("active")  // remove active class when mouse out
    })
})

// sidebar Elements

menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
})

close.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
})

// const elements = document.querySelectorAll('.autoBlur');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.animation = 'autoBlurAnimation 5s linear infinite';
//         } else {
//             entry.target.style.animation = 'none'; // Pause animation when not in view
//         }
//     });
// });

// elements.forEach(el => observer.observe(el));