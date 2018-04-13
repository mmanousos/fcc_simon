
$(document).ready(function(){

	// global variables

	let compPlays = [];
	let userPlays = [];
	let compCurrrent = '';
	let userCurrent = '';
	let buttonPlayDuration = 1000;
	let count = 0;
	let color = '';

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
			CompPlay();
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

	const Random = function() {
		let rand = Math.random();
		if (rand <= .249) {
			color = 'red';
		} else if (rand <= .499) {
			color = 'yellow';
		} else if (rand <= .749) {
			color = 'green';
		} else {
			color = 'blue';
		}
	}

	const Play = function() {
		$('#' + color + '-sound')[0].play();
		$('#' + color).fadeOut('fast').delay(buttonPlayDuration).fadeIn(buttonPlayDuration);
  };

	const CompPlay = function() {
		count++;
		Random();
		compPlays.push(color);
		console.log('compPlays: ' + compPlays);
		RunThrough();
	}

	const RunThrough = function() {
//cycle through contents of compPlays array playing each in order
		$('#display-text').text(count);
		for (let el = 0; el < compPlays.length; el++) {
			color = compPlays[el];
			Play();
		}
	}

	const UserPlay = function() {
		let el = 0;
		compCurrent = compPlays[el];
		console.log('compCurrent: ' + compCurrent);
		CheckPlay();
	}

	const Error = function() {
			$('#display-text').text('!!!');
	}

	const CheckPlay = function() {
// the user value doesn't match the current computer value
		if (userCurrent !== compCurrent) {
// if strict mode is on
			if ($('#strict-indicate').hasClass('on')) {
// reset the game and start again
				ResetGame();
				CompPlay();
			} else {
// display error message
				Error();
				console.log("THERE'S AN ERROR, LET ME SHOW YOU AGAIN");
// show sequence again
				setTimeout(RunThrough, 1500);
			}
		} else {
			userPlays.push(userCurrent);
			console.log('userPlays: ' + userPlays)
			if (userPlays.length === compPlays.length) {
				userPlays = [];
				console.log('userPlays has been reset. now is: ' + userPlays );
				setTimeout(CompPlay, (buttonPlayDuration * userPlays.length));
			};
			//el++;
			// how will it know to keep checking subsequent elements? just by button clicks?
			/*if (userPlays.length === compPlays.length) {
				CompPlay();
			} */
		}
	}

// Red
	$('#red').on('click', function() {
			color = $(this).attr('id');
			userCurrent = color;
			console.log('userCurrent: ' + userCurrent);
			Play();
			UserPlay();
	});

	// Yellow
	$('#yellow').on('click', function() {
			color = $(this).attr('id');
			userCurrent = color;
			console.log('userCurrent: ' + userCurrent);
			Play();
			UserPlay();
	});

	// Green
	$('#green').on('click', function() {
			color = $(this).attr('id');
			userCurrent = color;
			console.log('userCurrent: ' + userCurrent);
			Play();
			UserPlay();
	});

	// Blue
	$('#blue').on('click', function() {
			color = $(this).attr('id');
			userCurrent = color;
			console.log('userCurrent: ' + userCurrent);
			Play();
			UserPlay();
	});




// final closing brackets
});
