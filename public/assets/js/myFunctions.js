/**
 * Created by dankoff on 15/06/21.
 */
/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */
(function($) {
	var body, masthead, menuToggle, siteNavigation, siteHeaderMenu, resizeTimer;

	function initMainNavigation(container) {
		// Add dropdown toggle that displays child menu items.
		var dropdownToggle = $('<button />', {
			'class': 'dropdown-toggle',
			'aria-expanded': false
		}).append($('<span />', {
			'class': 'screen-reader-text',
			text: screenReaderText.expand
		}));
		container.find('.page_item_has_children > a').after(dropdownToggle);
		/* added below for the phase 2 */
		// Add dropdown toggle that displays child menu items.
		var dropdownToggle = $('<button />', {
			'class': 'dropdown-toggle',
			'aria-expanded': false
		}).append($('<span />', {
			'class': 'screen-reader-text',
			text: screenReaderText.expand
		}));
		container.find('.menu-item-has-children > a').after(dropdownToggle);

		container.find('.page_item_has_children').attr('aria-haspopup', 'true');
		/* added below for the phase 2 */
		container.find('.menu-item-has-children').attr('aria-haspopup', 'true');
		container.find('.dropdown-toggle').click(function(e) {
			var _this = $(this),
				screenReaderSpan = _this.find('.screen-reader-text');
			e.preventDefault();
			if ($(this).hasClass("toggled-on")) {
				_this.toggleClass('toggled-on');
				_this.attr('aria-expanded', 'false');
				var curLI = $(this).parent().parent().children(':first-child');
				curLI.removeClass("toggled-on");
				curLI.attr('aria-expanded', 'false');
				/*commented just now   _this.next( '.children' ).attr( 'aria-expanded', 'false' );  */
				_this.next('.children').removeClass('toggled-on');
				_this.next('.sub-menu').removeClass('toggled-on');
				/* added below for the phase 2 */
				_this.next('.sub-menu').removeClass('toggled-on');
				_this.next('.children').slideUp(1000);
			} else {
				$('.dropdown-toggle').removeClass('toggled-on');
				$('.children').removeClass('toggled-on');
				$('.sub-menu').removeClass('toggled-on');
				$('.dropdown-toggle').attr('aria-expanded', 'false');
				var curLI2 = $(this).parent().parent().parent().children(':first-child');
				curLI2.next().addClass("toggled-on");
				var curLI = $(this).parent();
				curLI.closest(".children").addClass("toggled-on");
				curLI.closest(".sub-menu").addClass("toggled-on");
				/*commented just now  curLI.closest( ".children" ).attr( 'aria-expanded', 'true' ); */
				curLI.closest(".dropdown-toggle").addClass("toggled-on");
				curLI.closest(".dropdown-toggle").attr('aria-expanded', 'true');
				_this.toggleClass('toggled-on');
				_this.attr('aria-expanded', 'true');
				_this.next('.children').addClass('toggled-on');
				_this.next('.sub-menu').addClass('toggled-on');
				/* added below for the phase 2 */
				_this.next('.sub-menu').addClass('toggled-on');
			}

			screenReaderSpan.text(screenReaderSpan.text() === screenReaderText.expand ? screenReaderText.collapse : screenReaderText.expand);
		});
	}

	initMainNavigation($('.main-navigation'));

	masthead = $('#masthead');
	menuToggle = masthead.find('#menu-toggle');
	siteHeaderMenu = masthead.find('#header-menu');
	siteNavigation = masthead.find('#navigation');
	// Enable menuToggle.
	(function() {
		// Return early if menuToggle is missing.
		if (!menuToggle.length) {
			return;
		}
		// Add an initial values for the attribute.
		menuToggle.add(siteNavigation).attr('aria-expanded', 'false');
		menuToggle.on('click.twentysixteen', function() {
			$(this).add(siteHeaderMenu).toggleClass('toggled-on');
			$(document.body).toggleClass('toggled-on');
			// jscs:disable
			$(this).add(siteNavigation).attr('aria-expanded', $(this).add(siteNavigation).attr('aria-expanded') === 'false' ? 'true' : 'false');
			// jscs:enable
		});
	})();
	// Fix sub-menus for touch devices and better focus for hidden submenu items for accessibility.
	(function() {
		if (!siteNavigation.length || !siteNavigation.children().length) {
			return;
		}
		// Toggle `focus` class to allow submenu access on tablets.
		function toggleFocusClassTouchScreen() {
			if (window.innerWidth >= 910) {
				$(document.body).on('touchstart.twentysixteen', function(e) {
					if (!$(e.target).closest('.main-navigation li').length) {
						$('.main-navigation li').removeClass('focus');
					}
				});
				siteNavigation.find('.menu-item-has-children > a').on('touchstart.twentysixteen', function(e) {
					var el = $(this).parent('li');
					if (!el.hasClass('focus')) {
						e.preventDefault();
						el.toggleClass('focus');
						el.siblings('.focus').removeClass('focus');
					}
				});
			} else {
				siteNavigation.find('.menu-item-has-children > a').unbind('touchstart.twentysixteen');
			}
		}
		if ('ontouchstart' in window) {
			$(window).on('resize.twentysixteen', toggleFocusClassTouchScreen);
			toggleFocusClassTouchScreen();
		}
		siteNavigation.find('a').on('focus.twentysixteen blur.twentysixteen', function() {
			$(this).parents('.menu-item').toggleClass('focus');
		});
	})();
	// Add the default ARIA attributes for the menu toggle and the navigations.
	function onResizeARIA() {
		if (window.innerWidth < 910) {
			if (menuToggle.hasClass('toggled-on')) {
				menuToggle.attr('aria-expanded', 'true');
			} else {
				menuToggle.attr('aria-expanded', 'false');
			}
			if (siteHeaderMenu.hasClass('toggled-on')) {
				siteNavigation.attr('aria-expanded', 'true');
			} else {
				siteNavigation.attr('aria-expanded', 'false');
			}
			menuToggle.attr('aria-controls', 'navigation');
		} else {
			menuToggle.removeAttr('aria-expanded');
			siteNavigation.removeAttr('aria-expanded');
			menuToggle.removeAttr('aria-controls');
		}
	}


})(jQuery);
