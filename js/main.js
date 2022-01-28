new fullpage('#fullpage', {
    autoScrolling: true
});

// (window).scroll(function () {
//     $(".section").each(function (index) {
        

//             newIndex = index + 1;
//             volgendeScene = newIndex + 1;
//             vorigeScene = newIndex - 1;

//             console.log(newIndex);

        
//     });

    // $('#bol1').click(function () {

    //     if (newIndex == $(".section").length) {
    //         $('html').animate({
    //             scrollTop: $('#zon1').offset().top
    //         });
    //     } else {
    //         $('html').animate({
    //             scrollTop: $('#zon' + volgendeScene).offset().top
    //         });
    //     }
    // });
    

// $('#bol1').click(function () {

//     if(document.getElementById('bol1').clicked == true){
        
//     }
// });

$('.extra-info').click(function () {
    if ($('.extra-info').hasClass('info')) {
        $('.extra-info').removeClass('info');

    } else {
        $('.extra-info').addClass('info');
    }
})

// $('#bol1').click(function () {
//     if (newIndex == $('.section').length) {
//         $('html').animate({
//             scrollTop: $('#zon1' + volgendeScene).offset().top
//         });
//     }
// })