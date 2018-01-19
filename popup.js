$(document).ready(function(){
	$('.dropdown-country').change(function(){
		var geoLocationId = $(this).find('option:selected').attr('value');
		var deployMode = $('.deploy-mode').find('option:selected').attr('value');
		yourFunction(geoLocationId, deployMode);
	});
});

function yourFunction(geoLocationId, deployMode) {
// your flow...
}