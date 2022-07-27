jQuery(function() {
    $(".usa-banner__button").on('click', function(event) {
        if ($(this).attr('aria-expanded') == 'true') {
            console.log("clicked-off")
            $('.usa-accordion__button').attr('aria-expanded', 'false');
            $('#mainNav').css('margin-top', '35px');
            $('.masthead').css('margin-top', '0px');
            $('#gov-banner').hide();
        } else {
            console.log("clicked-on")
            $('.usa-accordion__button').attr('aria-expanded', 'true');
            $('#mainNav').css('margin-top', '175px');
            $('.masthead').css('margin-top', '175px');
            $('#gov-banner').show();
        }
    });
})
