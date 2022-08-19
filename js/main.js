
$(function () {






    /* let topscr = $('#mainVisual').height(); */

    let header = $('.headerin').height();
    let winwidth = $(window).width();
    let winheight = $(window).height();


    $(window).on('resize', function () {
        document.location.reload();
    });

    $(window).on('redsize', function () {
        let winheight = $(window).height();
    });

    function headerscr() {
        let scr = $(window).scrollTop();
        if (scr >= header) {
            $('.headerin').addClass('on');
            $('.logo img').css({
                opacity: 0
            }).hide();
            $('.bar ul li:nth-child(1)').find('img').attr('src', 'img/hambarmw.png');
            $('.util ul li:nth-child(1)').find('img').attr('src', 'img/userw.png');
            $('.util ul li:nth-child(2)').find('img').attr('src', 'img/searchw.png');


        }

        else {
            $('.headerin').removeClass('on');
            $('.logo img').css({
                opacity: 1
            }).show(200);
            $('.bar ul li:nth-child(1)').find('img').attr('src', 'img/hambarm.png');
            $('.util ul li:nth-child(1)').find('img').attr('src', 'img/user.png');
            $('.util ul li:nth-child(2)').find('img').attr('src', 'img/search.png');
        }
    };

    $(window).on('scroll', headerscr);
    headerscr();



    $(window).on('scroll', function () {
        let scr = $(window).scrollTop();

        let mv = $('#mainVisual').height();

        if (scr >= mv) {
            $('.topbar').css({
                opacity: 1
            })
        } else {
            $('.topbar').css({
                opacity: 0
            })
        }
    })




    if (winwidth > 1200) {
        $('.logo').find('img').attr('src', 'img/logo5.png');
        $('.cont1 .box .boxbg').find('img').attr('src', 'img/cont1img1.png');

        $(window).on('scroll', function () {
            let scr = $(window).scrollTop();

            let mv = $('#mainVisual2').height();


            if (scr >= mv * 1.5) {
                $('.bottombar').css({
                    opacity: 1
                })
            }
            else {
                $('.bottombar').css({
                    opacity: 0
                })
            }


        })



        $('.headerin .bar .b').on('click', function () {
            $('.headerin').toggleClass('off');


        })

        $('.bottombar ul li:last-child').on('click', function (e) {
            e.preventDefault();
            $('.bottombar ul li').fadeToggle();


        })
        $('.bar .b').on('click', function () {
            $('.m2').show(400);
            $('#header').toggleClass('open');

            if ($('#header').hasClass('open')) {
                $(this).find('img').attr('src', 'img/close2.png');
                $('.left2').stop().animate({
                    left: 0
                })
                $('.logo').animate({
                    opacity: 0
                })
                $('#header').stop().animate({
                    left: '30%'
                })

            } else {
                $('#header').stop().animate({
                    left: 0
                })
                $('.left2').stop().animate({
                    left: '-30%'
                })
                $('.logo').animate({
                    opacity: 1
                })
                $(this).find('img').attr('src', 'img/hambarm.png');
            }

        })





        $(window).on('scroll', function () {
            let scr = $(window).scrollTop();
            let cza = $('#footer').offset().top;
            let mv = $('#mainVisual2').height();

            if (scr >= mv) {
                $('.topbar').css({
                    opacity: 1
                })
            }
            else {
                $('.topbar').css({
                    opacity: 0
                })
            }
        })





        $('.tvt1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            infinite: true,
            arrows: false,
            dots: true,
            autoplay: true,
            vertical: true,
            draggable: false

        });
        $('#mainVisual2 .bg').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            infinite: true,
            arrows: false,
            dots: false,
            fade: true,
            draggable: false,
            autoplay: true,

        });


        $('.tvt1 .slick-dots li').on('click', function (e) {
            e.preventDefault();
            let c = $(this).index();
            $('#mainVisual2 .bg').slick('slickGoTo', c);
        })

        $('.tvt1').mousewheel(function (e) {
            e.preventDefault();
            if (e.deltaY < 0) {
                $(this).slick('slickNext');
                $('#mainVisual2 .bg').slick('slickNext');
            } else {
                $(this).slick('slickPrev');
                $('#mainVisual2 .bg').slick('slickPrev');
            }
        });

        $('.cont1 .slide02').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            pauseOnHover: true,
            infinite: true,
            arrows: false,
            dots: false,
            autoplay: true,
            speed: 1000

        });

        $('.cont1 .slide02').mousewheel(function (e) {
            e.preventDefault();
            if (e.deltaY < 0) {
                $(this).slick('slickNext');
            } else {
                $(this).slick('slickPrev');
            }
        });

        $('.cont1 .plus a').html('view more');


        $('.cont2 .plus a').html('view more');


        $('.cont3 .plus a').html('view more');

        $('.util2 li:last-child').on('mouseover', function () {
            $(this).find('img').attr('src', 'img/searchg.png');
        }).on('mouseout', function () {
            $(this).find('img').attr('src', 'img/search.png');
        })

        $('.buttons').click(function () {
            $(this).addClass('active').siblings().removeClass('active');


            let filter = $(this).attr('data-filter')

            if (filter == 'all') {
                $('.image').show(400);
            } else {
                $('.image').not('.' + filter).hide(200);
                $('.image').filter('.' + filter).show(400);
            }
        });
        $('.cont3im').magnificPopup({
            delegate: 'a',
            type: 'img',
            gallery: {
                enabled: true
            }


        })

        $('.m1').on('click', function () {
            let m = $(this).index();

            let filter = $(this).attr('data-filter')

            $('.m2').not('.' + filter).hide(200);
            $('.m2').filter('.' + filter).show(400);
        })


        $('.openPopup').on('click', function (event) {
            $('#popup01').fadeIn();
            $('body').append('<div class="backon"></div>');
        });
        $('body').on('click', function (event) {
            if (event.target.className == 'close' || event.target.className == 'backon') {
                $('#popup01').fadeOut();
                $('.backon').fadeOut();
            }
        });

        setTimeout(function () {
            $('.openPopup').trigger('click');
        }, 500);

        const boxList = document.querySelectorAll('.cont4in,.cont2 .tit,.cont2 .img');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, options);

        boxList.forEach(el => observer.observe(el));
    }; //1200 up


    if (winwidth < 1200) {
        let slider = document.querySelector('.slide01');
        let innerSlider = document.querySelector('.box');

        let pressed = false;
        let startx;
        let x;

        let cont1box = $('.boxbg').width() + 10;
        let cont1 = $('.boxbg').length;
        let cont1all = cont1box * cont1 + 150;


        $('.box').width(cont1all);

        slider.addEventListener('mousedown', function (e) {
            pressed = true;
            startx = e.offsetX - innerSlider.offsetLeft;
            slider.style.cursor = 'grabbing'
        });

        slider.addEventListener('mouseenter', function () {
            slider.style.cursor = 'grab'
        });

        slider.addEventListener('mouseleave', function () {
            slider.style.cursor = 'default'
        })
        slider.addEventListener('mouseup', function () {
            slider.style.cursor = 'grab'
        });

        window.addEventListener('mouseup', function () {
            pressed = false;
        });

        slider.addEventListener('mousemove', function (e) {
            if (!pressed) return;
            e.preventDefault();
            x = e.offsetX
            innerSlider.style.left = `${x - startx}px`;
            checkwidth();
        });

        function checkwidth() {
            let outer = slider.getBoundingClientRect();
            let inner = innerSlider.getBoundingClientRect();


            if (parseInt(innerSlider.style.left) > 0) {
                innerSlider.style.left = '0px';
            } else if (inner.right < outer.right) {
                innerSlider.style.left = `-${inner.width - outer.width}px`;
            }
        }

        checkwidth();
    }





    $(window).on('scroll', headerscr);
    headerscr();

    $('.bar').on('click', function () {
        $('.left').stop().animate({
            left: 0
        }, 600, 'easeOutQuart')

        $('.m1 ul').hide();
    });

    $('.close,#mainVisual,#container').on('click', function () {
        $('.left').stop().animate({
            left: '-50%'
        })

        $('.m1').css({
            color: '#161616'
        })
    })


    $('.m1').on('click', function () {
        $(this).css({
            color: '#127a6f'
        }).siblings().css({
            color: '#161616'
        });

    })

    $('.m1 h1').on('click', function () {
        $(this).next().slideToggle().parent().siblings().find('ul').slideUp();
    })


    $('#header .util li:nth-child(2)').on('click', function () {
        $('.searchbar').stop().slideToggle().animate({
            top: '50px'
        })
    })


    $('.topbar').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });

    })


    $('.tmove').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        pauseOnHover: true,
        arrows: true,
        dots: true,
        infinite: true,
        fade: true,
    })




    $('.tabletbgtit').eq(0).siblings().css('display', 'none');
    let slc = ('.tmove .slick-dots li');

    $('.tmove .slick-dots li').on('click', function () {
        let click = $(this).index();
        $('.tabletbgtit').eq(click).css('display', 'block').siblings().css('display', 'none');
    });





    $('.cont2img').on('click', function (e) {
        e.preventDefault();
        let img1 = $(this).find('.img').html();
        $('.allbg').fadeToggle();
        $('.bgimg').html(img1).css({

        });



    });

    $('.allbg').on('click', function (e) {
        e.preventDefault();
        $(this).fadeOut();

    })






    $('.sli').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        infinite: true,
        arrows: true,
        dots: true,
        autoplay: true,

    })


    if (winwidth <= 768) {
        $('.cont2im').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            speed: 500,
            pauseOnHover: true,
            infinite: true,

        });
    }

    if (winwidth > 768 && winwidth <= 1200) {
        $('.cont3im').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 500,
            pauseOnHover: true,
            infinite: true,
        });
    } else if (winwidth < 786) {
        $('.cont3im').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            pauseOnHover: true,
            infinite: true,

        });
    }



})












































