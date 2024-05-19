window.onscroll = function () {
    let header = document.querySelector(".home_section header");
    if (window.pageYOffset > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

$(document).ready(function() {

setTimeout(function() {
    $('#ctn-preloader').addClass('loaded');
    // Una vez haya terminado el preloader aparezca el scroll
    $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
    // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
    $('#preloader').delay(1000).queue(function() {
        $(this).remove();
        AOS.init();
    });
    }
}, 2500);

});


$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $(".media_menu").toggleClass("active")
      $("header").toggleClass("active")
    });
});


let live_btn = document.querySelector('.live_btn');
let modal_two = document.querySelector('.modal_two');
let modal_close = document.querySelector('.modal_close2');

live_btn.addEventListener('click', () => {
    modal_two.classList.add('active');
});

modal_close.addEventListener('click', () => {
    modal_two.classList.remove('active');
})

let live_btn_three = document.querySelector('.live_btn_three');
let modal_three = document.querySelector('.modal_three');
let modal_close2 = document.querySelector('.modal_close3');

live_btn_three.addEventListener('click', () => {
    modal_three.classList.add('active');
});

modal_close2.addEventListener('click', () => {
    modal_three.classList.remove('active');
})



// console.log($('.modal_one'));

$('.open_modal_1').click(function () {
    $('.modal_one').addClass('active')
})

$('.modal_close1').click(function () {
    $('.modal_one').removeClass('active')
})

$('.open_modal_2').click(function () {
    $('.modal_two').addClass('active')
})

$('.modal_close2').click(function () {
    $('.modal_two').removeClass('active')
})

// AOS.init();


  