// Developed by Nguyen Van Truong
// truongnv.dev@gmail.com


let players = {};

function onYouTubeIframeAPIReady() {
    let iframes = document.querySelectorAll("iframe");

    for (let i = 0; i < iframes.length; i++) {
        let iframeID = iframes[i].id;
        players[iframeID] = new YT.Player(iframeID);
    }
}

function pauseIframeVideo() {
    for (let id in players) {
        players[id].pauseVideo();
    }
}

function pauseAllVideo() {
   
    var videos = document.querySelectorAll('video');
    for (var i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
    
    pauseIframeVideo();
}

var skillsSwiper = new Swiper(".skills-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination-skills",
        clickable: true,
        //dynamicBullets: true
    },
    autoHeight: false,
    centeredSlides: false,
    setWrapperSize: true,
    fade: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 0
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 720px
        720: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 1080px
        1080: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 1380px
        1380: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    },
});

var portfolioSwiper = new Swiper(".portfolio-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        //dynamicBullets: true
    },
    autoHeight: true,
    centeredSlides: false,
    setWrapperSize: true,
    fade: true,
    grabCursor: true,
    on: {
        slideChange: pauseAllVideo
    }
});

function createSwiper(name, swiper) {
    switch (name) {
        case "skills-swiper": {
            newSwiper = new Swiper(".skills-swiper", {
                slidesPerView: 4,
                spaceBetween: 20,
                loop: true,
                pagination: {
                    el: ".swiper-pagination-skill",
                    clickable: true,
                    //dynamicBullets: true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                autoHeight: false,
                centeredSlides: false,
                setWrapperSize: true,
                fade: true,
                grabCursor: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                // Responsive breakpoints
                breakpoints: {
                    // when window width is >= 0
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is >= 720px
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    // when window width is >= 1080px
                    1080: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    // when window width is >= 1380px
                    1380: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                },
            });
            break;
        }
        case "portfolio-swiper": {
            newSwiper = new Swiper(swiper, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: false,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    //dynamicBullets: true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                autoHeight: true,
                centeredSlides: false,
                setWrapperSize: true,
                fade: true,
                grabCursor: true,
                on: {
                    slideChange: pauseAllVideo
                }
            });
            break;
        }
    }
}