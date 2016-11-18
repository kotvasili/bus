$(document).ready(function() {

$(".bars").click(function(){
    togglMenu()
});
function ScrollToSlide(){
    var items = $('.main_menu').find('a');

    items.each(function(){
        var t = $(this);
        t.on('click', function(){
            var _ = $(this),
            target = _.data('goto');
            togglMenu();
            $(".main").moveTo(target);
        })
    })
}ScrollToSlide();
$(".main").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "cubic-bezier(.82,.25,.43,.94)",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 800,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {
        colorpick()
    },   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: 544,        // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });
function MoveSlide(){
    var trigger = $('.nav-link');
    trigger.on('click', function(){
        var _ = $(this);
        _.hasClass('top') ? $(".main").moveUp() : $(".main").moveDown()
    })
}MoveSlide();
//end of document ready
});
//end of document ready
function colorpick(){
    var tpareent = $('.main'),
        cont = tpareent.find('section.active'),
        target = $('header'),
        tborder =$('.cls-2'),
        tfill =$('.cls-1'),
        color = cont.data('color'),
        border = cont.data('border'),
        fill = cont.data('fill');
    if(!color){
        var color = cont.parent().data('color'),
            border = cont.parent().data('border'),
            fill = cont.parent().data('fill');
        target.css('border-color', color);
        tfill.css('fill',fill);
        tborder.css('fill',border);
    }else{
      target.css('border-color', color);
      tfill.css('fill',fill);
      tborder.css('fill',border);
    }
}
function togglMenu(){
    $(".main_menu").delay(150).toggleClass('show');
    $(".bars").toggleClass('close');
    $(".black_owerlay").toggleClass('show');  
}