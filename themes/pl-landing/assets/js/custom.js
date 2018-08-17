/* Custom Javascript */

$(document).ready(function() {
	
	/******************************
      SELECTPICKER MINIMUM OPTION
	******************************/
	
    $('.selectpicker').selectpicker({
		size: 8,
	});
	
	
	/******************************
      BOTTOM SCROLL TOP BUTTON
	******************************/

	// declare variable
	var scrollTop = $(".scrollTop");

	$(window).scroll(function() {
		// declare variable
		var topPos = $(this).scrollTop();

		// if user scrolls down - show scroll to top button
		if (topPos > 1500) {
			$(scrollTop).css("opacity", "1");

		} else {
			$(scrollTop).css("opacity", "0");
		}

	}); // scroll END

	//Click event to scroll to top
	$(scrollTop).click(function() {
		$('html, body').animate({
		scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD
});

/*$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+1
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});*/

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar-collapse a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-collapse ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$(document).ready(function(){
	var srcLft = $('.graphic_left img').attr('src');
	var srcRht = $('.graphic_right img').attr('src');

	$('.graphic_left').css('background-image', 'url(/themes/pl-landing/assets/'+srcLft+')');
	$('.graphic_left img').hide();
	$('.graphic_right').css('background-image', 'url(/themes/pl-landing/assets/'+srcRht+')');
	$('.graphic_right img').hide();


});