
    // header
    $('#header>.innerbox>.gnb>ul').on('mouseenter focusin',function(){
        $(this).find('.sub').stop().slideDown(350,);
        $('.gnb_bg').stop().slideDown(350,);
    });
    $('#header>.innerbox>.gnb>ul').on('mouseleave focusout',function(){
        $(this).find('.sub').stop().slideUp(300,);
        $('.gnb_bg').stop().slideUp(300,);
    });
    
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


    // button
    const btn = document.querySelector('#btn');
    let btnState = true;
    btn.addEventListener('click', ()=>{
        if(btn.className == 'on') {btn.classList.remove('on')
        }else{btn.classList.add('on')}

        if( btnState ){
            if( window.innerWidth>768 ){
                document.querySelector('.gnb').style.right='70%'; //(window.innerWidth - 180)+'px'
            }else{
                document.querySelector('.gnb').style.right='0%';
            }
            btnState = false;
        }else{
            if( window.innerWidth>768){
                document.querySelector('.gnb').style.right='100%';
            }else{
                document.querySelector('.gnb').style.right='-70vw';
            }
            btnState = true;
        }
    });


    // accordian 메뉴
    const menuItems = document.querySelectorAll('.gnb>ul>li>a')
    const subItem = document.querySelectorAll('.sub a')
    menuItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sub = subItem.parentElement.querySelectorAll('.sub');
            sub.style.display == 'none' ? sub.style.display == 'block' : sub.style.display == 'none'
        });
    });



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
    gsap.to(r8, {
        scrollTrigger:{
            trigger: r8,
            start: "0% 0%",
            end: "87%",
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


    //r8_content section
    gsap.registerPlugin(ScrollTrigger);
    const img_wrap = document.querySelector("#r8_content > .img_wrap");
    const r8_content = document.querySelector("#r8_content");
    const text_wrap = document.querySelector("#r8_content > .content_wrap")
    
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


    //quattro_content
    

    //quattro
    const quattro = $('#quattro');
    const quattro_img = $('#quattro .img_wrap');
    const quattro_text = $("#quattro .img_wrap .text_wrap");

    // let keyframes = [
    //     {opacity: 0},
    //     {opacity: 0.5},
    //     {opacity: 1}
    // ]
    // const textEffect = quattro_text.animate(keyframes, 700);

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
    });



