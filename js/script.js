$(document).ready(function () {
    console.log('oven is ready');

    // change nav look on scroll //

    const navMenu = document.querySelector('#main-nav-container');

    window.onscroll = function(e) {
        if (window.pageYOffset > 0) {
            navMenu.classList.add('navScrolled');
        } else {
            navMenu.classList.remove('navScrolled');
        }
    }

    // hamburger menu //

    $(".hamburger").click(function(){
        console.log('clicking');
        if($("#navigation").hasClass("hidden")) {
            $("#navigation").attr("class", "visible animated slideInLeft");
        } else {
            $("#navigation").attr("class", "hidden animated slideOutLeft");
        }

        $(this).toggleClass("open");
    });

    $("#navigation").click(function(){
        if ($("#navigation").hasClass("visible")) {
            $(".hamburger").toggleClass("open");
        } else {
        }
        $(this).attr("class", "slideOutLeft hidden");
    });

    $(document).keyup(function(e){
        if (e.keycode == 27) {
            if ($("#navigation").hasClass("visible")) {
                $(".hamburger").toggleClass("open");
            } else {

            }
            $("#navigation").attr("class", "slideOutLeft hidden");
        }
    })

    //scroll and add class to main nav
    $("#main-nav-container").scroll(function(){
        if ($('#main-nav-container').scrollTop() > 50) {
            $('#main-nav-container').addClass(".scroll-main-nav")
        } else {
            $('main-nav-container').removeClass(".scroll-main-nav")
        }

        console.log('scrolling');
    })

    // FLICKITY carousel
    const gallery = document.querySelector('.main-carousel');
    const flkty = new Flickity(gallery, {
        //options
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        wrapAround: true
    })
});