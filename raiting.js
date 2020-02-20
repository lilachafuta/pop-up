$(document).ready(function(){
    $(".rating label").click(function(){
        $(this).parent().find("label").css({"color": "#D8D8D8"});
        $(this).css({"color": "#16296f"});
        $(this).nextAll().css({"color": "#16296f"});
    });
});
