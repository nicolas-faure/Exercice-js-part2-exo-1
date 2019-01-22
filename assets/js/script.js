(function($){
    $(".action").mouseover(function(){
        $(this).attr("src", "assets/img/image1.jpg");
    }).mouseout(function(){
        $(this).attr("src", "assets/img/image1_2.jpg");
    });
})(jQuery);
