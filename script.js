
$(document).ready(function(){

	// global variables
	let compPlays = [];
	let userPlays = [];
	let compCurrrent = '';
	let userCurrent = '';
	let buttonPlayDuration = 1000;
	let count = 0;
	let buttonClicks = 0;
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
		count++;  // increase count by 1
		Random(); // get random color
		compPlays.push(color); // push color to compPlays array
		console.log('compPlays: ' + compPlays);
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
	}

	// display win message
	const Win = function() {
		$('#display-text').text('WIN');
		ResetGame();
	}

	// check if user's play is correct
	const CheckPlay = function() {
//loop through values of compPlays to check against userPlay
		let el = 0;
		function CheckValue() {
			compCurrent = compPlays[el];
			console.log('compCurrent: ' + compCurrent);
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
	// clear userPlays
					userPlays = [];
	// show sequence again
					setTimeout(RunThrough, 3000);
					el = 0;
				}
			} else { // if correct
				userPlays.push(userCurrent); // push UserCurrent to userPlays array
				console.log('CORRECT! userPlays: ' + userPlays);
				userCurrent = ''; // reset userCurrent to wait for next button click
				console.log('userCurrent: ' + userCurrent);
				if (userPlays.length === 20) { // if userPlays array is 20 elements long
					Win(); // display winning message & reset game.
				} else if (buttonClicks < el-1) {
					//else if (userPlays.length < compPlays.length) {
					console.log('user needs to play more in this sequence');
				} else if (userPlays.length === compPlays.length) { // otherwise, if array lengths match
					console.log('array lengths match, fetching addl content for sequence');
					userPlays = [];  // reset userPlays array
					setTimeout(CompPlay, 3000); // run CompPlay again to add to sequence
				};
				el++;
				console.log('the next element to check is ' + compPlays[el]);
				// if there are more elements to check in CompPlays array
				if (el < compPlays.length) {
					userCurrent = ''; // reset userCurrent
					$.when(UserPlay()).then(function() { // wait for user to click again
						console.log('user has played. checking again.');
						CheckValue();		// then check next click against next value
					});
					// only run again when userCurrent is set again
				}
			}
		}
		CheckValue();
	};

	const UserPlay = function() {
		buttonClicks++;
		userCurrent = color;
		console.log('userCurrent: ' + userCurrent);
	}

// Red button play functionality
	$('#red').on('click', function() {
			buttonClicks++;
			color = $(this).attr('id');
			UserPlay();
			Play();
			CheckPlay();
	});

	// Yellow button play functionality
	$('#yellow').on('click', function() {
			buttonClicks++;
			color = $(this).attr('id');
		/*	userCurrent = color;
			console.log('userCurrent: ' + userCurrent);*/
			UserPlay();
			Play();
			CheckPlay();
	});

	// Green button play functionality
	$('#green').on('click', function() {
			buttonClicks++;
			color = $(this).attr('id');
		/*	userCurrent = color;
			console.log('userCurrent: ' + userCurrent);*/
			UserPlay();
			Play();
			CheckPlay();
	});

	// Blue button play functionality
	$('#blue').on('click', function() {
			buttonClicks++;
			color = $(this).attr('id');
		/*	userCurrent = color;
			console.log('userCurrent: ' + userCurrent);*/
			UserPlay();
			Play();
			CheckPlay();
	});

// final closing brackets
});
