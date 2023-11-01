$(function() {
    $(".carousel").slick({
        autoplay: true,
        dots: true,
        infinity: true,
        autoplaySpeed: 5000,
        arrows: false,
    });

    $(".hover").on("mouseover", function() {
        $(this).css("opacity","0.5")
    })
    $(".hover").on("mouseout", function() {
        $(this).css("opacity","1")
    })

    $(function() {
        var pagetop = $(".top-button")

        pagetop.hide();
        
        $(window).scroll(function () {
            if($(this).scrollTop() >= 100) {
                pagetop.fadeIn();
                
            } else {
                pagetop.fadeOut();
            }
        })
    })
});
    
