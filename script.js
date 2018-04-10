
$(document).ready(function(){

	// global variables

	const compPlays = [];
	const userPlays = [];
	const compCurrrent = '';
	const userCurrent = '';
	const buttonPlayDuration = 1000;
	const count = 0;
	var color = '';

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

	const Play = function() {
		$('#' + color + '-sound')[0].play();
		$('#' + color).fadeOut('fast').delay(buttonPlayDuration).fadeIn(buttonPlayDuration);
  };

// Red
	$('#red').on('click', function() {
			color = $(this).attr('id');
			Play();
	});

	// Yellow
	$('#yellow').on('click', function() {
			color = $(this).attr('id');
			Play();
	});

	// Green
	$('#green').on('click', function() {
			color = $(this).attr('id');
			Play();
	});

	// Blue
	$('#blue').on('click', function() {
			color = $(this).attr('id');
			Play();
	});




// final closing brackets
});
