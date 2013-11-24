/*! jQuery Highlighter - v1.0.0 - 2013-11-23
* http://jqueryui.com
* Copyright 2013 jQuery Highlighter Foundation and other contributors; Licensed MIT */
(function( $ ) {
 
	$.fn.highlight = function() {

		var getShadowEffect = function(shadow, customShadow) {
			var shadowEffect = '';
			if($.trim(customShadow).length > 0) {
				shadowEffect = customShadow;
			}
			else {
				if(shadow.sInside) {
					shadowEffect = shadowEffect + 'inset ' + 
								   shadow.sHshadow + ' ' +
								   shadow.sVshadow + ' ' + 
								   shadow.sBlur + ' ' + 
								   shadow.sSpread + ' ' + 
								   shadow.sColor;
				}
				if(shadow.sOutside) {
					if(shadowEffect != '') {
						shadowEffect = shadowEffect + ', ';
					}
					shadowEffect = shadowEffect + 
								   shadow.sHshadow + ' ' +
								   shadow.sVshadow + ' ' + 
								   shadow.sBlur + ' ' + 
								   shadow.sSpread + ' ' + 
								   shadow.sColor;
				}
			}
			return shadowEffect
		}

		var getTransitionEffect = function(transition, period) {
			var transitionEffect = transition + ' ' + period;
			return transitionEffect;
		}
		
		return this.each(function(options) {
			var element = this,

				settings = $.extend({
					shadow: {
						sInside: true,
						sOutside: true,
						sHshadow: '0px',
						sVshadow: '0px',
						sBlur: '5px',
						sSpread: '0px',
						sColor: '#0000FF'
					},
					customShadow: '',
					transition: 'box-shadow',
					period: '1s'
				}, options),

			transitionEffect = getTransitionEffect(settings.transition, settings.period),
			
			shadowEffect = getShadowEffect(settings.shadow, settings.customShadow),
			
			removeShadow = function() {
				$(element).css({
					boxShadow: 'inset 0px 0px 0px 0px #000, 0px 0px 0px 0px #000'
				});
			},
			
			resetShadow = function() {
				$(element).css({
					boxShadow: ''
				});
			},
			
			removeTransition = function() {
				$(element).css({
					transition: ''
				});
			}

			$(this).css({
				transition: transitionEffect,
				boxShadow: shadowEffect
			});

			setTimeout(function() { 
				removeShadow();
				setTimeout(function() { 
					resetShadow();
					removeTransition();
				}, 1000);
			}, 1000);
		});
	};
}( jQuery ));
