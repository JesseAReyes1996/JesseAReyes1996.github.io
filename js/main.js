// Animate smooth scolling
$('#view-projs').on('click', function(){
	const images = $('#images').position.top();

	$('html, body').animate(
		{
			scrollTop: images
		},
		1000
	);
});
