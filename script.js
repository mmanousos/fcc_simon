
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
		$('#display-text').text(count);
		Random();
		compPlays.push(color);
		console.log(compPlays);
//cycle through contents of compPlays array playing each in order
		for (let el = 0; el < compPlays.length; el++) {
			color = compPlays[el];
			Play();
		}
	}

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
