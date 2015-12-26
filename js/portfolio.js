$('document').ready(function(){
    // By default hide all the tbody elements when the page loads
    $(".tbody-visibility").find('tbody').hide();

    // When the user clicks the table make the body visible
    $("table").click(function(){
        if($(this).hasClass('tbody-visibility')){
            $(this).find('tbody').toggle();
        }
    });

    // On hover give the thead element a focus
    $("table").hover(
        function(){
            $(this).find('thead').css("background-color", "#F0F8FF");
        },
        function(){
            $(this).find('thead').css("background-color", "white");
        }
    );
});