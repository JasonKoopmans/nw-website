$(function() {
	var scale = 1 / (window.devicePixelRatio || 1);
	var content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale;

	document.querySelector('meta[name="viewport"]').setAttribute('content', content);
	
	$('body').scrollspy({selector:'.scroll',offset:65});
	
	
	var offset = 80;

	$('.navbar li a').click(function(event) {
		event.preventDefault();
		$($(this).attr('href'))[0].scrollIntoView();
		scrollBy(0, -offset);
	});
	
});