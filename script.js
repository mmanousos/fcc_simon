
$(document).ready(function(){

	// global variables

	const compPlays = [];
	const userPlays = [];
	const compCurrrent = '';
	const userCurrent = '';
	const count = 0;

	// reset game function
	const ResetGame = function() {
		// reset display-text to 00
		$('#display-text').text('00');
		// reset placeholders
		compPlays = [];
		userPlays = [];
		compCurrrent = '';
		userCurrent = '';
		count = 0;
	}

	// start / reset button
	$('#start').on('click', function() {
		if ($('#start-text').hasClass('reset')) {
			$('.start-text').removeClass('reset');
			$('.start-text').text('start');
			ResetGame();
		} else {
			$('#start-text').addClass('reset');
			$('.start-text').text('reset');
			$('#display-text').text('01');
		}
	})


	// strict button
	$('#strict').on('click', function() {
		if ($('#strict-indicate').hasClass('on')) {
			$('#strict').attr('aria-pressed', 'false');
			$('#strict-indicate').removeClass('on');
		} else {
			$('#strict').attr('aria-pressed', 'true');
			$('#strict-indicate').addClass('on');
		}
	})



});
