$(document).ready(function(){
    var main = $('main');
    main.append("<p id='test'>Test Animate!</p>");
    main.append("<button id='downbtn'>SlideDown</button>");
    main.append("<button id='upbtn'>SlideUp</button>");
    main.append("<button id='togglebtn'>SlideToggle</button>");
    var test = $("#test");
    test.css("border","1px solid green");
    test.css("width","600px");
    test.css("height","80px");
    test.css("text-align","center");

    $('#downbtn').click(function () {
        $('#test').slideDown();
    });

    $('#upbtn').click(function () {
        $('#test').slideUp();
    });

    $('#togglebtn').click(function () {
        $('#test').slideToggle();
    });
});