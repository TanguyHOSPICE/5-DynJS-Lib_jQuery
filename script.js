//*?Test présence jQuery
if (jQuery) {
	console.log('jQuery est inclus à la page');
	$(() => {
		$('h1').css('color', 'green');
		$('h2').first().css('font-style', 'italic').text('Mes meilleurs articles');
	});
} else {
	console.log("jQuery n'est  pas inclus à la page");
}
