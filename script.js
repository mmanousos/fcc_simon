
const compPlays = [];
const userPlays = [];
const compCurrrent = '';
const userCurrent = '';
const count = 0;



$('#start').on('click', function() {
	if ($('#start-text').hasClass('reset')) {
		$('.start-text').removeClass('reset');
		$('.start-text').text('start');
	} else {
		$('#start-text').addClass('reset');
		$('.start-text').text('reset');
	}
})

$('#strict').on('click', function() {
	if ($('#strict-indicate').hasClass('on')) {
		$('#strict').attr('aria-pressed', 'false');
		$('#strict-indicate').removeClass('on');
	} else {
		$('#strict').attr('aria-pressed', 'true');
		$('#strict-indicate').addClass('on');

	}
})
