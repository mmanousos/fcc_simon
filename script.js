
$(document).ready(function(){

	// global variables
	let compPlays = [];
	let userPlays = [];
	let compCurrrent = '';
	let userCurrent = '';
	let buttonPlayDuration = 1000;
	let buttonFadeDuration = 300;
	let count = 0;
	let buttonClicks = 0;
	let color = '';

	// reset game function
	const ResetGame = function() {
		// reset display-text to 00
		$('#display-text').text('00');
		// reset start text to 'start'
		$('.start-text').removeClass('reset');
		$('.start-text').text('start');
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
		// speed up as count gets higher
		if (compPlays.length > 8) {
			buttonPlayDuration = 800;
		} else if (compPlays.length > 12) {
			buttonPlayDuration = 500;
			buttonFadeDuration = 200;
		} else if (compPlays.length > 16) {
			buttonPlayDuration = 300;
			buttonFadeDuration = 200;
		}
		$('#' + color).fadeOut('fast').delay(buttonPlayDuration).fadeIn(buttonFadeDuration);
  };

	// computer play: increase count, get random color, push to compPlays array, display sequence
	const CompPlay = function() {
		count++;  // increase count by 1
		Random(); // get random color
		compPlays.push(color); // push color to compPlays array
		console.log('compPlays: ' + compPlays);
		console.log('computer has played ' + compPlays.length + ' times');
		RunThrough(); // display new sequence
	}

	// display sequence that user must replicate
	const RunThrough = function() {
//cycle through contents of compPlays array playing each in order
		$('#display-text').text(count);
		let el = 0;                    //  set your counter to 0

		function DisplayDelay() {     //  create a loop function
		   setTimeout(function() {    //  call a 2s setTimeout when the loop is called
		      color = compPlays[el];
					Play();
		      el++;                     //  increment the counter
		      if (el < compPlays.length) {  //  if the counter < compPlays, call the loop function
		        DisplayDelay();       //  ..  again which will trigger another
		      }                        //  ..  setTimeout()
		   }, 1000)
		}

		DisplayDelay();                //  start the loop
	}

	// display error message
	const Error = function() {
		$('#display-text').text('!!!');
		console.log("THERE'S AN ERROR, LET ME SHOW YOU AGAIN");
// clear userPlays
		userPlays = [];
// clear buttonClicks counter
		buttonClicks = 0;
// show sequence again
		setTimeout(RunThrough, 3000);
	}

	// display win message
	const Win = function() {
		$('#display-text').text('WIN');
		setTimeout(ResetGame, 5000);
	}

	// check if user's play is correct
	const CheckPlay = function() {
//loop through values of compPlays to check against userPlay
		let el = 0;
		function CheckValue() {
			compCurrent = compPlays[el];
			userCurrent = userPlays[el];
			console.log('compCurrent: ' + compCurrent + ' userCurrent: ' + userCurrent);
// the user value doesn't match the current computer value
			if (userCurrent !== compCurrent) {
	// if strict mode is on
				if ($('#strict-indicate').hasClass('on')) {
	// reset the game and start again
					ResetGame();
					setTimeout(CompPlay, 3000);
				} else {
	// display error message
					Error();
					el = 0; // start again for checking values
				}
			} else { // if correct
				console.log('play ' + (el+1) + ': CORRECT!');
				el++;
				if (el === 20) { // if userPlays array is 20 elements long
					Win(); // ...display winning message & reset game.
				} else if (el >= compPlays.length) { // if el is greater than number of compPlays
					userPlays = [];  // ...reset userPlays array
					buttonClicks = 0; // ... reset buttonClicks
					setTimeout(CompPlay, 3000); // ...run CompPlay again to add to sequence
				} else if (el < compPlays.length) { // otherwise
						CheckValue();		// ...check next two values
				};
			}
		}
		CheckValue();
	};

	// TODO: delay reset for WIN message to display

	const UserPlay = function() {
		buttonClicks++;
		console.log('buttonClicks: ' + buttonClicks);
		userPlays.push(color);
		if (userPlays.length === compPlays.length) {
			CheckPlay();
		} else if (userPlays.length > compPlays.length) {
			Error();
		}
	}

// Red button play functionality
	$('#red').on('click', function() {
			color = $(this).attr('id');
			UserPlay();
			Play();
	});

	$('#light-red').on('click', function() {
			color = 'red';
			UserPlay();
			Play();
	});

	// Yellow button play functionality
	$('#yellow').on('click', function() {
			color = $(this).attr('id');
			UserPlay();
			Play();
	});

	$('#light-yellow').on('click', function() {
			color = 'yellow';
			UserPlay();
			Play();
	});

	// Green button play functionality
	$('#green').on('click', function() {
			color = $(this).attr('id');
			UserPlay();
			Play();
	});

	$('#light-green').on('click', function() {
			color = 'green';
			UserPlay();
			Play();
	});

	// Blue button play functionality
	$('#blue').on('click', function() {
			color = $(this).attr('id');
			UserPlay();
			Play();
	});

	$('#light-blue').on('click', function() {
			color = 'blue';
			UserPlay();
			Play();
	});

// final closing brackets
});
