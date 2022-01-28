new fullpage('#fullpage', {
    autoScrolling: true
});

$('.extra-info').click(function () {
    if ($('.extra-info').hasClass('info')) {
        $('.extra-info').removeClass('info');

    } else {
        $('.extra-info').addClass('info');
    }
})

