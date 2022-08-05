$(function () {
    let resizeBanner = function () {
        let usa_banner = $('.usa-banner');
        let govBannerHeight = usa_banner.height();
        let bannerHeight = usa_banner.find('.usa-accordion').height();
        bannerHeight = govBannerHeight > bannerHeight ? govBannerHeight : bannerHeight;
        let bannerHeightCss = bannerHeight + "px";
        $('#mainNav').css('margin-top', (bannerHeight) + "px");
        $('.masthead').css('margin-top', bannerHeightCss);

        /* page specific. If jquery can't find elements nothing happens*/
        $('.jarallax').css('margin-top', bannerHeightCss);
        $('.step-claims-menu').css('top', (bannerHeight + 100) + "px");
        $('section.home-patient-health-section .container').css('margin-top', bannerHeightCss);
    }
    $(".usa-banner__button").on('click', function (event) {
        if ($(this).attr('aria-expanded') === 'true') {
            $('.usa-accordion__button').attr('aria-expanded', 'false');
            $('#gov-banner').hide();
            resizeBanner();
        } else {
            $('.usa-accordion__button').attr('aria-expanded', 'true');
            $('#gov-banner').show();
            resizeBanner();
        }
    });
    $(window).resize(resizeBanner);
    resizeBanner();
})