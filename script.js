 $(document).ready(function(){   


    $('ul.tabs').delegate('li:not(.current)', 'click', function() {
        $(this).addClass('current').siblings().removeClass('current')
            .parents('.section').find('.box').hide().eq($(this).index()).fadeIn(150);
    })



  function setBigImage(foto) {
    document.getElementById("bigimg").src = foto.src;
  }


	$('.spoiler_links').click(function(){
  $(this).next('.spoiler_body').toggle('normal');
  
	});




  $('.slider').slick({
  infinite: true,
  slidesToShow: 4,
  prevArrow:'.prev',
  nextArrow:'.next'
});

});