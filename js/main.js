$(document).ready(function(){
  	$('ul li a').click(function(){
    	$('li a').removeClass("active");
    	$(this).addClass("active");
	});
});

$(window).on('load', function(){
	$('.operator').click(function(){
		$('.consulting').toggle();
	});
});

$('#bannerSlide').carousel({
  	interval: 2000
});

$(document).ready(function(){
	$('.project-1').trigger('hover');
    $('.project-1').trigger('mouseenter');
    $('.project-1').trigger('mouseover');
});

$(document).ready(function(){
	$('.project-2').trigger('hover');
	$('.project-2').trigger('mouseenter');
	$('.project-2').trigger('mouseover');
});

$(document).ready(function(){
	$('.project-3').trigger('hover');
    $('.project-3').trigger('mouseenter');
    $('.project-3').trigger('mouseover');
});

$(document).ready(function(){
	$('.project-4').trigger('hover');
    $('.project-4').trigger('mouseenter');
    $('.project-4').trigger('mouseover');
});

$(document).ready(function(){
  	$(".project-1").hover(function(){
    	$(".ellipse-1").css("display", "block");
    	}, function(){
    	$(".ellipse-1").css("display", "none");
  	});
  	$(".ellipse-1").hover(function(){
    	$(this).css("display", "block");
    	});
  	$(".project-2").hover(function(){
    	$(".ellipse-2").css("display", "block");
    	}, function(){
    	$(".ellipse-2").css("display", "none");
  	});
  	$(".project-3").hover(function(){
    	$(".ellipse-3").css("display", "block");
    	}, function(){
    	$(".ellipse-3").css("display", "none");
  	});
  	$(".project-4").hover(function(){
    	$(".ellipse-4").css("display", "block");
    	}, function(){
    	$(".ellipse-4").css("display", "none");
  	});
});


// $('#carousel').on('slide.bs.carousel', function (e) {

  
//     var $e = $(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 4;
//     var totalItems = $('.carousel-item').length;
    
//     if (idx >= totalItems-(itemsPerSlide-1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         for (var i=0; i<it; i++) {
//             // append slides to end
//             if (e.direction=="left") {
//                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
//             }
//             else {
//                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
//             }
//         }
//     }
// });


//   $('#carouselExample').carousel({ 
//                 interval: 2000
//         });


//   $(document).ready(function() {
// /* show lightbox when clicking a thumbnail */
//     $('a.thumb').click(function(event){
//       event.preventDefault();
//       var content = $('.modal-body');
//       content.empty();
//         var title = $(this).attr("title");
//         $('.modal-title').html(title);
//         content.html($(this).html());
//         $(".modal-profile").modal({show:true});
//     });

//   });