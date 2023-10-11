
    // header (PC버전)
    if (matchMedia("screen and (min-width: 1200px)").matches) {
        $('#header>.innerbox>.gnb>ul').on('mouseenter focusin',function(){
            $(this).find('.sub').stop().slideDown(350,);
            $('.gnb_bg').stop().slideDown(350,);
        });
        $('#header>.innerbox>.gnb>ul').on('mouseleave focusout',function(){
            $(this).find('.sub').stop().slideUp(300,);
            $('.gnb_bg').stop().slideUp(300,);
        });
    } else {
        // accordian 메뉴(모바일 버전)
        const subItems = document.querySelectorAll('.sub');
        const menuItems = document.querySelectorAll('.gnb li');

        menuItems.forEach((item) => {
            const menuItem = item.querySelector('a');
            const subItem = item.querySelector('.sub');
        
            if (subItem) {
                menuItem.addEventListener('click', (e) => {
                    e.preventDefault();
        
                    if (subItem.style.display === 'block') {
                        subItem.style.display = 'none';
                    } else {
                        subItem.style.display = 'block';
                    }

                    subItems.forEach((sub) => {
                        if (sub !== subItem) {
                            sub.style.display = 'none';
                        }
                    });
                });
            }
        });
    }
    
    const headerHeight=document.querySelector('header').offsetHeight;
    const header=document.querySelector('header');
    let scrollTop=0; 
    window.addEventListener('scroll',()=>{
        scrollTop=window.pageYOffset;
        if(scrollTop>=headerHeight){
            header.classList.add('fix');
        }else{
            header.classList.remove('fix');
        }
    })
    
    const logo = document.querySelector('#header h1 img')
    logo.addEventListener('click', (e) => {
        console.log('click')
        e.preventDefault;
    })



    //메인배너 섹션
    $('#main_banner>.slider_wrap>.btns>button').click(function(){
        $(this).addClass('on');
        $('#main_banner>.slider_wrap>.btns>button').not(this).removeClass('on')
        let n=$(this).index();
        let a=$('#main_banner .img_list>img').width();
        // console.log(n)
        $('#main_banner .img_list').animate({
            'margin-left':(-a*n)+'px'
        })
        let info=$('.info_wrap div');
        for(let i=0; i<info.length; i++){
            if(i==n){
                info[i].style.display='block';
            }else{
                info[i].style.display='none';
            }
        }
        n++;
        if(n>=3){n=0}
    })


    // r8 section
    const leftImg = document.querySelector(".left_img");
    const rightImg = document.querySelector(".right_img");
    const r8 = document.querySelector("#r8");
    gsap.registerPlugin(ScrollTrigger);
    if (matchMedia("screen and (min-width: 1200px)").matches) {
        gsap.to(r8, {
            scrollTrigger:{
                trigger: r8,
                start: "0% 0%",
                end: "20%",
                pin: true,
                // markers: true,
            }
        })
        gsap.to(leftImg, {
            scrollTrigger:{
                trigger: leftImg,
                scrub: 1,
                start:"-75%",
                end:"100% 80%",
                // markers: true,
            },
            left: -300,
            rotate: -2,
        })
        gsap.to(rightImg, {
            scrollTrigger:{
                trigger:rightImg,
                scrub: 1,
                start:"-75%",
                end:"100% 80%",
            },
            left: 1600,
            rotate: 2,
        })
    } else if(matchMedia("screen and (min-width: 641px)").matches) {
        gsap.to(r8, {
            scrollTrigger:{
                trigger: r8,
                start: "0% 0%",
                end: "300",
                pin: true,
                // markers: true,
            }
        })
        gsap.to(leftImg, {
            scrollTrigger:{
                trigger: leftImg,
                scrub: 1,
                start:"-75%",
                end:"300",
                // markers: true,
            },
            left: -300,
            rotate: -2,
        })
        gsap.to(rightImg, {
            scrollTrigger:{
                trigger: rightImg,
                scrub: 1,
                start:"-75%",
                end:"300",
                // markers: true,
            },
            left: 1090,
            rotate: 2,
        })
    }


    //r8_content section
    const img_wrap = document.querySelector("#r8_content > .img_wrap");
    const r8_content = document.querySelector("#r8_content");
    const text_wrap = document.querySelector("#r8_content > .content_wrap")

    if (matchMedia("screen and (min-width: 1200px)").matches) {
        
        
        gsap.to(img_wrap, {
            scrollTrigger:{
                trigger: img_wrap,
                start: "0% 10%",
                end: "140%",
                scrub: 0.5,
                // markers: true,
            },
            left: -700,
        });
        gsap.to(r8_content, {
            scrollTrigger:{
                trigger: r8_content,
                pin: true,
                start: "0% 0%",
                end: "100%",
                // markers: true,
                scrub: 1,
            }
        });
        gsap.to(text_wrap, {
            scrollTrigger:{
                trigger: text_wrap,
                start: "0% 10%",
                end: "140%",
                scrub: 1,
                // markers: true,
            },
            opacity: 1,
        });
    } else if (matchMedia("screen and (min-width: 641px)").matches) {
        gsap.to(img_wrap, {
            scrollTrigger:{
                trigger: img_wrap,
                start: "0% 10%",
                end: "160%",
                scrub: 0.5,
                // markers: true,
            },
            left: -700,
        });
        gsap.to(r8_content, {
            scrollTrigger:{
                trigger: r8_content,
                pin: true,
                start: "0% 0%",
                end: "100%",
                // markers: true,
                scrub: 1,
            }
        });
        gsap.to(text_wrap, {
            scrollTrigger:{
                trigger: text_wrap,
                start: "-100",
                end: "160%",
                scrub: 1,
                // markers: true,
            },
            opacity: 1,
        });
    } else {
        gsap.to(img_wrap, {
            scrollTrigger:{
                trigger: img_wrap,
                start: "0% 10%",
                end: "140%",
                scrub: 0.5,
                // markers: true,
            },
            left: -800,
        });
        gsap.to(r8_content, {
            scrollTrigger:{
                trigger: r8_content,
                pin: true,
                start: "0% 0%",
                end: "140%",
                // markers: true,
                scrub: 1,
            }
        });
    }
    


    //quattro_content
    

    //quattro
    const quattro = $('#quattro');
    const quattro_img = $('#quattro .img_wrap');
    const quattro_text = $("#quattro .img_wrap .text_wrap");

    if (matchMedia("screen and (min-width: 1200px)").matches) {
        gsap.to(quattro_img, {
            scrollTrigger:{
                trigger: quattro_img,
                start: "0% 0%",
                end: "130%",
                // markers: true,
                scrub: 0.5,
            },
            width: "100%",
        });
        gsap.to(quattro, {
            scrollTrigger:{
                trigger: quattro,
                pin: true,
                start: "0% 0%",
                end: "140%",
                // markers: true,
                scrub: 0.5,
            }
        });
        gsap.to(quattro_text, {
            scrollTrigger:{
                trigger: quattro_text,
                start: "95%",
                end: "135%",
                // markers: true,
                scrub: 0.1,
            },
            opacity: 1,
        });
    } else if(matchMedia("screen and (min-width: 641px)").matches) {
        gsap.to(quattro_img, {
            scrollTrigger:{
                trigger: quattro_img,
                start: "0% 0%",
                end: "130%",
                // markers: true,
                scrub: 0.5,
            },
            width: "100%",
        });
        gsap.to(quattro, {
            scrollTrigger:{
                trigger: quattro,
                pin: true,
                start: "0% 0%",
                end: "140%",
                // markers: true,
                scrub: 0.5,
            }
        });
        gsap.to(quattro_text, {
            scrollTrigger:{
                trigger: quattro_text,
                start: "95%",
                end: "135%",
                // markers: true,
                scrub: 0.1,
            },
            opacity: 1,
        });
    } else {
        gsap.to(quattro, {
            scrollTrigger:{
                trigger: quattro,
                pin: true,
                start: "0% 0%",
                end: "125%",
                // markers: true,
                scrub: 0.5,
            }
        });

        gsap.to(quattro_text, {
            scrollTrigger:{
                trigger: quattro_text,
                start: "0% 0%",
                end: "125%",
                // markers: true,
                scrub: 0.1,
            },
            opacity: 1,
        });
    }


    //brand



    //news
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 160,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
            slidesPerView: 2,
            spaceBetween: 40
            },
            // when window width is >= 480px
            1600: {
            slidesPerView: 3,
            },
        }
    });
