$(document).ready(function() {
	$("#jhere").load("anatoindex3.html");
});

$('a').click(function() {
	var page = $(this).attr('href');
	$("#jhere").load(page);

	return false;
}) ;