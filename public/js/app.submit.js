$(document).ready(function() {

	// Check for legal acceptance
	$('#waiver-acceptance').change(function() {
		if($(this).is(":checked")) {
			$('#submit-button').prop("disabled", false);
			$('#submit-button').css({
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000", endColorstr="#1a000000", GradientType=0)',
				'background-image': '-webkit-gradient(linear,0 0,0 100%,from(transparent),color-stop(40%,rgba(0,0,0,.05)),to(rgba(0,0,0,.1)))',
				'background-image': '-webkit-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))',
				'background-image': '-moz-linear-gradient(top,rgba(0,0,0,.05) 0,rgba(0,0,0,.1))',
				'background-image': '-o-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))',
				'background-image': 'linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))'
			});
		} else {
			$('#submit-button').prop("disabled", true);
			$('#submit-button').css('background-image', 'none');
		}
	});

	// Submit with AJAX
	$('#applicant-form').submit(function(event) {

		// Bind signature data to the hidden text box
    	$('#svg-data').text($("#signature").jSignature('getData', 'svg')[1]);

		var jsonData = JSON.stringify($(this).serializeArray());

		var nameData = $.trim($( "input[name*='first-name']" ).val()) + ' ' + $.trim($( "input[name*='middle-name']" ).val()) + ' ' + $.trim($( "input[name*='last-name']" ).val());

		$.ajax({
			url: 'application_insertion.php',
			type: 'GET',
			data: { name: nameData, trip: tripData, json: jsonData},
			success: function (data){
				data = $.trim(data);
				if(data == 'success'){
					window.location.replace('app_complete.php?success=true&trip=' + tripData);
				}else{
					window.location.replace('app_complete.php?success=false');
				}
			}			
		});

		event.preventDefault();
	});

});