define(['jquery'], function($) {
	$('#main').append('<p>Component B is using jQuery ' + $().jquery);
	return {}
});