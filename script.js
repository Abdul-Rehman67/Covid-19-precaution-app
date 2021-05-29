$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times')
        $('.navbar').toggleClass('nav-toggle');
    })
})
$('section').each(function(){
    let height = $(this).height();
    let offset = $(this).offset().top - 200;
    let top = $(window).scrollTop();
     
    let id = $(this).attr('id');
    if(top > offset && top < offset +height){
        $('.navbar ul li a ').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active')
    }

});