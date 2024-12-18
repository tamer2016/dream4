//  ====================================================================================================================================
let btnToggle = document.querySelector(".btn-navbar-toggler");
let listNav = document.querySelector(".box-navbar-nav");
let btnCloseNav = document.querySelector(".btn-close-nav");

document.addEventListener("DOMContentLoaded", () => {
    // createElement in Dom
    let layerScreen = document.createElement("div");
    layerScreen.className = "box-layer-screen";
    layerScreen.textContent = "";
    // تحديد المكان الذي تريد إضافة العنصر إليه، هنا نضيفه إلى body
    document.body.appendChild(layerScreen);
    let navbarComprehensive = document.querySelector(".box-navbar");
    layerScreen.remove();

    //   --------------------------------------------------
    btnToggle.onclick = () => {
        // console.log("btnToggle");
        listNav.classList.toggle("active");

        // ---------------------
        if (layerScreen && !navbarComprehensive.contains(layerScreen)) {
            navbarComprehensive.appendChild(layerScreen); // إعادة إضافة العنصر إلى DOM
            setTimeout(() => {
                layerScreen.classList.add("visible");
            }, 10); // تأخير بسيط للسماح بإعادة إضافة العنصر إلى DOM
        } else if (layerScreen && navbarComprehensive.contains(layerScreen)) {
            layerScreen.classList.toggle("visible");
        }
    };

    //   -----------------------------
    btnCloseNav.onclick = () => {
        console.log("btnCloseNav");
        listNav.classList.remove("active");

        //-------------------
        if (layerScreen && navbarComprehensive.contains(layerScreen)) {
            layerScreen.classList.remove("visible");

            setTimeout(() => {
                layerScreen.remove();
            }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
        }
    };

    // -------------------------------
    layerScreen.onclick = () => {
        console.log("layerScreen");
        listNav.classList.remove("active");
        if (layerScreen && navbarComprehensive.contains(layerScreen)) {
            layerScreen.classList.remove("visible");

            setTimeout(() => {
                layerScreen.remove();
            }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
        }
    };
});
// ----------------------------------------------------------
// .box-navbar

$(window).scroll(function() {
    // scroll يعمل userانا كده بقول لم ال

    // console.log("Hello");
    let wScroll = $(window).scrollTop();

    if (wScroll > 100) {
        $(".box-navbar").css("backgroundColor", "rgba(38, 33,33,0.96)");
    } else {
        $(".box-navbar").css("backgroundColor", "transparent");
    }
});

// ================================================================================
// Our partners
var swiper = new Swiper(".mySwiperOurPartners", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    dir: "rtl",

    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    },
});


// ===============================================
// JavaScript to initialize Swiper with both paginations
var swiper = new Swiper(".mySwiperServices", {
    loop: true,
    dir: "rtl",
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '"></span>';
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    on: {
        init: function() {
            var swiperInstance = this;
            var fractionPagination = document.querySelector('.swiper-pagination2');
            var bulletsPagination = document.querySelector('.swiper-pagination1');
            fractionPagination.innerHTML = '<span class="current"></span>' +
                ' / ' +
                '<span class="total"></span>';

            function updateFraction() {
                var current = swiperInstance.realIndex + 1;
                var total = swiperInstance.slides.length;
                fractionPagination.querySelector('.current').textContent = current;
                fractionPagination.querySelector('.total').textContent = total;
            }

            swiperInstance.on('slideChange', updateFraction);
            updateFraction();
        }
    }
});