$(document).ready(function(){

	// When you click .answer, make sure only the .answer you clicked gets
	// the .is-chosen class
	$('.js-answer').on('click', function() {
		$('.js-answer').removeClass('is-chosen');
		$(this).addClass('is-chosen');
	})
	
	// Hide and show menu
	$('#js-toggle').on('click', function() {
		$("nav").toggleClass('is-visible');
	});


	// when you click on a nav-item, replace #title's content with this nav's content
	// also hide the menu
	// animate scroll to href# and find offset -90
	$('.js-nav-item').on('click', function(e) {
		e.preventDefault();

		var content = $(this).text();

		$('#title').html(content);

		$("nav").removeClass('is-visible');

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 90
		}, 1000)
	
	});


	// $('.course-list').click(function(){
	// 	console.log('clicked')
	// })
})
