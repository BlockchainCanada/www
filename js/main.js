;(function () {

	'use strict';

	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Burger Menu
	var burgerMenu = function() {
		$('body').on('click', '.js-fh5co-nav-toggle', function(){
			if ( $('#fh5co-navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}

		});
	};

	var owlCrouselFeatureSlide = function() {

		var owl = $('.owl-carousel');

		owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
			var current = elem.item.index;
			$(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
		});
		owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
			window.setTimeout(function(){
				var current = elem.item.index;
				$(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
			}, 400);
     	});

		owl.owlCarousel({
			items: 1,
		    loop: false,
		    margin: 0,
		    responsiveClass: true,
		    nav: false,
		    dots: false,
		    smartSpeed: 500,
		    autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
		    navText: [
		      "<i class='icon-arrow-left2 owl-direction'></i>",
		      "<i class='icon-arrow-right2 owl-direction'></i>"
	     	],
		});
	};

	// Magnific Popup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};


	// Animate Feature
	var animateFeatureIcons = function() {
		if ( $('#fh5co-features').length > 0 ) {
			$('#fh5co-features .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};

	// Animate Products
	var animateProducts = function() {
		if ( $('#fh5co-products').length > 0 ) {
			$('#fh5co-products .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};

	// Animate Team
	var animateTeam = function() {
		if ( $('#fh5co-team').length > 0 ) {
			$('#fh5co-team .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};

	// Animate Clients Logo
	var animateClientLogo = function() {
		if ( $('#fh5co-clients').length > 0 ) {
			$('#fh5co-clients .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};


	// Waypoints
	var featureIconsWayPoint = function() {
		if ( $('#fh5co-features').length > 0 ) {
			$('#fh5co-features').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {

					setTimeout(animateFeatureIcons, 200);

					$(this).addClass('animated');

				}
			} , { offset: '80%' } );
		}
	};

	var productsWayPoint = function() {
		if ( $('#fh5co-products').length > 0 ) {
			$('#fh5co-products').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {

					setTimeout(animateProducts, 200);

					$(this).addClass('animated');

				}
			} , { offset: '80%' } );
		}
	};

	var teamWayPoint = function() {
		if ( $('#fh5co-team').length > 0 ) {
			$('#fh5co-team').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {

					setTimeout(animateTeam, 200);

					$(this).addClass('animated');

				}
			} , { offset: '80%' } );
		}
	};

	var clientsWayPoint = function() {
		if ( $('#fh5co-products').length > 0 ) {
			$('#fh5co-products').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {

					setTimeout(animateClientLogo, 200);

					$(this).addClass('animated');

				}
			} , { offset: '80%' } );
		}
	};

	$(function(){

		burgerMenu();
		owlCrouselFeatureSlide();
		magnifPopup();

		featureIconsWayPoint();
		productsWayPoint();
		teamWayPoint();
		clientsWayPoint();

	});

	// Tabs
	jQuery(document).ready(function($){
		var tabs = $('.cd-tabs');

		tabs.each(function(){
			var tab = $(this),
				tabItems = tab.find('ul.cd-tabs-navigation'),
				tabContentWrapper = tab.children('ul.cd-tabs-content'),
				tabNavigation = tab.find('nav');

			tabItems.on('click', 'a', function(event){
				event.preventDefault();
				var selectedItem = $(this);
				if( !selectedItem.hasClass('selected') ) {
					var selectedTab = selectedItem.data('content'),
						selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
						slectedContentHeight = selectedContent.innerHeight();

					tabItems.find('a.selected').removeClass('selected');
					selectedItem.addClass('selected');
					selectedContent.addClass('selected').siblings('li').removeClass('selected');
					//animate tabContentWrapper height when content changes
					tabContentWrapper.animate({
						'height': slectedContentHeight
					}, 200);
				}
			});

			//hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
			checkScrolling(tabNavigation);
			tabNavigation.on('scroll', function(){
				checkScrolling($(this));
			});
		});

		$(window).on('resize', function(){
			tabs.each(function(){
				var tab = $(this);
				checkScrolling(tab.find('nav'));
				tab.find('.cd-tabs-content').css('height', 'auto');
			});
		});

		function checkScrolling(tabs){
			var totalTabWidth = parseInt(tabs.children('.cd-tabs-navigation').width()),
			 	tabsViewport = parseInt(tabs.width());
			if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
				tabs.parent('.cd-tabs').addClass('is-ended');
			} else {
				tabs.parent('.cd-tabs').removeClass('is-ended');
			}
		}
	});

}());
