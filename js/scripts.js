(function($){
	jQuery(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		jQuery(window).scroll(function(){
	      if(jQuery(this).scrollTop () > 300 ){
	         jQuery(".nav-area").css({
	            "background" : "#001D38",
	            "transition" : "0.1s",
	            "padding" : "10px 0px"
	         });
	      }

	      else {
	         jQuery(".nav-area").css({
	            "background" : "transparent",
	            "padding" : "20px 0px"
	         });
	      }
	  	});


		jQuery(document).ready(function(){
			jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},3000);
			});
		});

		$(document).ready(function(){
            $('.countup').CountUpCircle({
                duration: 7000,
                opacity_anim: false,
                step_divider: 1
            });
        });

		$(document).ready(function(){
            $('.countup02').CountUpCircle({
                duration: 8000,
                opacity_anim: false,
                step_divider: 1
            });
        });

		$(document).ready(function(){
            $('.countup03').CountUpCircle({
                duration: 9000,
                opacity_anim: false,
                step_divider: 1
            });
        });


		$("#owl-csel1").owlCarousel({
			items: 4,
			autoplay: true,
			autoplayTimeout: 5000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<i class="fa fa-angle-left" aria-hidden="true"></i>',
						'<i class="fa fa-angle-right" aria-hidden="true"></i>'
					],
			navContainer: '.main-content .custom-nav',
			responsive:{
				0: {
					items: 1,						
				},
				767: {
					items: 1,						
				},
				1200: {
					items: 1,						
				}
			}

		});

		// switch start
		const selected = document.querySelector(".selected");
		const optionCnt = document.querySelector(".option-cnt");
		const optionList = document.querySelectorAll(".option");

		selected.addEventListener("click" , () => {
			optionCnt.classList.toggle("active");
		});

		optionList.forEach(o => {
			o.addEventListener("click" , () => {
				selected.innerHTML = o.querySelector("label").innerHTML;
				optionCnt.classList.remove("active");
			});
		});
		// switch end

		var input = document.querySelector("#phone");
	    window.intlTelInput(input, {
	      utilsScript: "js/utils.js",

	    });






		
	});
})(jQuery);


(function($){
	jQuery(document).ready(function() {	


new WOW().init();

	});
})(jQuery);







