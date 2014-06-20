(function($){
	
	$.fn.charsLeft = function(options){
	
		var defaults = {	
			'source':'input',
			'dest':'.count'
		};
		var _options = $.extend(defaults, options);
		
		var calculate = function(source, dest, maxlength){
			var remaining = maxlength - source.val().length;
			dest.html(remaining);
			/* Over 50%, change colour to orange */
			p=(100*remaining)/maxlength;
			if(p<25){
				dest.addClass('orange');
			}else if(p<50){
				dest.addClass('red');
			}else{
				dest.removeClass('orange red');
			}
		};
		 	
		this.each(function(i, el) {
			var maxlength = $(this).find('.maxlength').html();
			var dest = $(this).find(_options.dest);
			var source = $(this).find(_options.source);
			source.keyup(function(){
				calculate(source, dest, maxlength);
			});
			source.change(function(){
				calculate(source, dest, maxlength);
			});
		});
	};
	
    $(document).ready(function(evt) {
        $(".charsleft-input").charsLeft({
            'source':'input',
            'dest':".count"
        });
    });
})(django.jQuery);
