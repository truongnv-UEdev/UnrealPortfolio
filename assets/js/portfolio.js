// truongnv.dev@gmail.com
// Nguyen Van Truong - Unreal Engine Developer

window.onload = function () {
    InitPortfolio();
};

function InitPortfolio() {
    let slides = document.getElementsByClassName("swiper-slide");
    for(i = 0; i < slides.length; i++) {
        slides[i].addEventListener("scroll", function () {
            //Add border Top
            this.style.borderTop = this.scrollTop > 0 ? "solid 1px #000" : "solid 1px transparent";
            this.style.boxShadow = this.scrollTop > 0 ? "0 -3px 3px #ba6059" : "0px 0px 0px transparent";
            
            // Add border bottom
            // let scrollEnd = this.scrollTop + this.clientHeight >= this.scrollHeight;
            // this.style.borderBottom = scrollEnd ? "solid 1px transparent" : "solid 1px #ccc";
        });
    }
}


function openPortfolio(tabButton, name) {
    //Pause All the Videos (from "swiper-script.js")
    pauseAllVideo();
    
    // Declare all variables
    let i, tabContents, tabToOpen, tabButtons;

    // Get all elements with class="tabContent" and hide them
    tabContents = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].className = tabContents[i].className.replace(" active", "");
    }

    // Show the current tab 
    tabToOpen = document.getElementById(name);
    tabToOpen.className += " active";
    
    // Reset to slide 0 if is swiper
    let swiperToOpen = tabToOpen.querySelector(".swiper");
    if(swiperToOpen)
    {
        swiperToOpen.swiper.slideTo(0, 0, null);
        
        // if(swiperToOpen.classList.contains("portfolio-swiper"))
        // {
        //     createSwiper("portfolio-swiper", swiperToOpen);
        // } else if(swiperToOpen.classList.contains("skills-swiper")){
        //     createSwiper("skills-swiper", swiperToOpen);
        // }
    }
    else{

    }
    

    // Add an "active" class to the button that opened the tab
    tabButtons = document.getElementsByClassName("nav-item");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
    if(!tabButton) {
        tabButton = document.getElementById("home-btn");
    }
    tabButton.className += " active";
}