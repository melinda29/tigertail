// responsive images & breakpoints
var desktopBreak = 1023,
tabletBreak = 700,
mobileBreak = 320,
screenWidth = 0,
screenHeight = 0,
screenType = 'mobile';

$(document).ready(function(){

	// Replace img src based on device screen size
	if ($('img.responsive').length) {
		swapDataSrc();
	}
	// Convert inline image to background
	if ($('img.bg').length) {
		swapImgSource();
	}

	// Map stuff
	if ($('.f--map.advanced').length) {
		// get json data from file and callback
		mapData();
	}
	
});

// Additional class support for breakpoints
$(window).resize(function () {

	// Replace img src based on device screen size
	if ($('img.responsive').length) {
		swapDataSrc();
	}
	// Convert inline image to background
	if ($('img.bg').length) {
		swapImgSource();
	}

});

// functions

// check for screen res
function resetScreenVars() {
	screenWidth = $(window).width();
	screenHeight = $(window).height();
	if (screenWidth > desktopBreak) {
		screenType = 'desktop';
	} else if (screenWidth >= tabletBreak) {
		screenType = 'tablet';
	} else {
		screenType = 'mobile';
	}
}

// swop inline images to background
function swapImgSource() {
	$('img.bg').each(function() {
		var src = $(this).attr('src');
		$(this).attr('src', src);
		var p = $(this).parent();
		p.css('background-image', "url(" + src + ")");
		p.addClass("cover");
	});
}

// Convert inline image to background
function swapDataSrc() {
	resetScreenVars();
	if($('img[data-' + screenType + ']').length) {
		$('img[data-' + screenType + ']').addClass('imgData');
		$(".imgData").each(function () {
			$(this).attr("src", $(this).data(screenType));
		});
	}
}


