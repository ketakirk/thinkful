$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		//play hadouken sound
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
			);
		//show hadouken and animate it to the right of the screen
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//ryu goes back to his ready position
	});

//Press x key for the cool pose
	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-cool').show();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			// $('.ryu-throwing').hide();
		}
	})
	//Release the x key to go back to the still pose
	.keyup(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			$('.ryu-ready').hide();
		}
	});
});
function playHadouken() {
	$('#hadouken-sound') [0].volume = 0.5;
	$('#hadouken-sound') [0].load();
	$('#hadouken-sound') [0].play();
}