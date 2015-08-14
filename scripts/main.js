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
	$('.js-nav-item').on('click', function() {
	  var content = $(this).text();

	  $('#title').html(content);
	  
	  $("nav").removeClass('is-visible');
	})
	// $('.course-list').click(function(){
	// 	console.log('clicked')
	// })
})



// The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 90);
    }
}

// This will capture hash changes while on the page
$(window).on("hashchange", function () {
    offsetAnchor();
});

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(function() {
    offsetAnchor();
}, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).