
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

	// random assignment of color for CompPlay
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

	// trigger sound and color change for button click or CompPlay
	const Play = function() {
		$('#' + color + '-sound')[0].play();
		$('#' + color).fadeOut('fast').delay(buttonPlayDuration).fadeIn(buttonPlayDuration);
  };

	// computer play: increase count, get random color, push to compPlays array, display sequence
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
		let el = 0;                     //  set your counter to 0

		function DisplayDelay () {           //  create a loop function
		   setTimeout(function () {    //  call a 2s setTimeout when the loop is called
		      color = compPlays[el];
					Play();
		      el++;                     //  increment the counter
		      if (el < compPlays.length) {            //  if the counter < compPlays, call the loop function
		         DisplayDelay();             //  ..  again which will trigger another
		      }                        //  ..  setTimeout()
		   }, 1000)
		}

		DisplayDelay();                      //  start the loop
	}

	// userPlay function
	const UserPlay = function() {
		let el = 0;
		compCurrent = compPlays[el];
		console.log('compCurrent: ' + compCurrent);
		CheckPlay();
	}

	// display error message
	const Error = function() {
			$('#display-text').text('!!!');
	}

	// check if user's play is correct
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
				setTimeout(RunThrough, 3000);
			}
		} else {
			userPlays.push(userCurrent);
			console.log('userPlays: ' + userPlays)
			if (userPlays.length === compPlays.length) {
				userPlays = [];
				setTimeout(CompPlay, 3000);
			};
			//el++;
			// how will it know to keep checking subsequent elements? just by button clicks?
		}
	}

// Red button play functionality
	$('#red').on('click', function() {
			color = $(this).attr('id');
			userCurrent = color;
			console.log('userCurrent: ' + userCurrent);
			Play();
			UserPlay();
	});

	// Yellow button play functionality
	$('#yellow').on('click', function() {
			color = $(this).attr('id');
			userCurrent = color;
			console.log('userCurrent: ' + userCurrent);
			Play();
			UserPlay();
	});

	// Green button play functionality
	$('#green').on('click', function() {
			color = $(this).attr('id');
			userCurrent = color;
			console.log('userCurrent: ' + userCurrent);
			Play();
			UserPlay();
	});

	// Blue button play functionality
	$('#blue').on('click', function() {
			color = $(this).attr('id');
			userCurrent = color;
			console.log('userCurrent: ' + userCurrent);
			Play();
			UserPlay();
	});




// final closing brackets
});
