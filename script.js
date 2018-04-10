
$(document).ready(function(){

	// global variables

	const compPlays = [];
	const userPlays = [];
	const compCurrrent = '';
	const userCurrent = '';
	const buttonPlayDuration = 1000;
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

	// Red
	const PlayRed = function() {
		$('#red-sound')[0].play();
	//	$('.light-red').fadeIn('slow').delay(1000).fadeOut('slow');
  };

	$('#red').on('click', function() {
		if ($('#red').hasClass('light-red')) {
			$('#red').removeClass('light-red');
		} else {
			PlayRed();
		}
	});

	// Yellow
	// #FFEB7B;
	// https://s3.amazonaws.com/freecodecamp/simonSound2.mp3

	// Green
	// #5AF46D;
	// https://s3.amazonaws.com/freecodecamp/simonSound3.mp3

	// Blue
	// #816FF3;
	// https://s3.amazonaws.com/freecodecamp/simonSound4.mp3




// final closing brackets
});
