// Declare an App class
App = Class.extend({
	init: function() {
		var obj = this;
		jQuery(document).ready(function($) {
			obj.onDomReady();
		});
		//
		// Add any additional initialization here
		//
	},
	onDomReady: function() {

		var options_combos = $('.options-combo');
		var cont = 0;
		console.log(options_combos.length);

		function ja() {

			if ( cont < options_combos.length ) {

				options_combos.eq(cont).velocity({
				left: "0px",
				}, {
					duration: 1000,
					easing: "linear",
					complete: ja
				});
				cont++;
			}
		}
		ja();




		// $.each([ options_combos ], function( index, value ) {
		// 	value.velocity({
		// 	left: "0px",
		// 	}, {
		// 		duration: 1000,
		// 		easing: "linear"
		// 	});
		// 	// alert( index + ": " + value );
		// });
	}

});

// Declare a global app object
var app = new App();