$(() => {
    let resize = () => {
        let usa_banner = $('.usa-banner');
        let govBannerHeight = usa_banner.height();
        let bannerHeight = usa_banner.find('.usa-accordion').height();
        bannerHeight = govBannerHeight > bannerHeight ? govBannerHeight : bannerHeight;
        let bannerHeightCss = bannerHeight + "px";
        console.log(bannerHeight)
        $('#mainNav').css('margin-top', (bannerHeight + 4) + "px");
        $('.masthead').css('margin-top', bannerHeightCss);

        /* page specific. If jquery can't find elements nothing happens*/
        $('.jarallax').css('margin-top', bannerHeightCss);
        $('.step-claims-menu').css('top', (bannerHeight + 100) + "px");
        $('section.home-patient-health-section .container').css('margin-top', bannerHeightCss);
    }
    $(".usa-banner__button").on('click', function (event) {
        if ($(this).attr('aria-expanded') === 'true') {
            console.log("clicked-off")
            $('.usa-accordion__button').attr('aria-expanded', 'false');
            $('#gov-banner').hide();
            resize();
        } else {
            console.log("clicked-on")
            $('.usa-accordion__button').attr('aria-expanded', 'true');
            $('#gov-banner').show();
            resize();
        }
    });
    $(window).resize(() => {
        resize();
    });
    resize();
})