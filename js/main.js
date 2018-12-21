$(document).ready(function(){
    $('.links a').click(function(){
        $('.links a').removeClass("active");
        $(this).addClass("active");
    });
});

$(window).on('load', function(){
    $('.operator').click(function(){
        $('.consulting').toggle();
    });
});

$(window).on('load', function(){
    $('.callMe, #yes, #no').click(function(){
        $('.modalCall').toggle();
    });
});

$('#bannerSlide').carousel({
    interval: 2000
});

// $(document).ready(function(){
//  $('.project-2').trigger('hover');
//     $('.project-2').trigger('mouseenter');
//     $('.project-2').trigger('mouseover');
// });

$(document).ready(function(){
    $(".project-1").hover(function(){
        $(".ellipse-1").css("display", "block");
        $(".ellipse-2").css("display", "none");
        $(".ellipse-3").css("display", "none");
        $(".ellipse-4").css("display", "none");
        });
    $(".project-2").hover(function(){
        $(".ellipse-1").css("display", "none");
        $(".ellipse-2").css("display", "block");
        $(".ellipse-3").css("display", "none");
        $(".ellipse-4").css("display", "none");
        });
    $(".project-3").hover(function(){
        $(".ellipse-1").css("display", "none");
        $(".ellipse-2").css("display", "none");
        $(".ellipse-3").css("display", "block");
        $(".ellipse-4").css("display", "none");
        });
    $(".project-4").hover(function(){
        $(".ellipse-1").css("display", "none");
        $(".ellipse-2").css("display", "none");
        $(".ellipse-3").css("display", "none");
        $(".ellipse-4").css("display", "block");
        });
});

$(document).ready(function(){
    $(".ellipse-1").click(function(){
        $(".project-1").css("transform", "scale(1,2)");
        $(".project-2").css("transform", "none");
        $(".project-3").css("transform", "none");
        $(".project-4").css("transform", "none");
        });
    $(".ellipse-2").click(function(){
        $(".project-1").css("transform", "none");
        $(".project-2").css("transform", "scale(1,2)");
        $(".project-3").css("transform", "none");
        $(".project-4").css("transform", "none");
        });
    $(".ellipse-3").click(function(){
        $(".project-1").css("transform", "none");
        $(".project-2").css("transform", "none");
        $(".project-3").css("transform", "scale(1,2)");
        $(".project-4").css("transform", "none");
        });
    $(".ellipse-4").click(function(){
        $(".project-1").css("transform", "none");
        $(".project-2").css("transform", "none");
        $(".project-3").css("transform", "none");
        $(".project-4").css("transform", "scale(1,2)");
        });
});