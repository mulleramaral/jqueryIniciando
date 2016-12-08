$(document).ready(function(){
    var main = $('main');
    main.append("<p id='test'>Test Animate!</p>");
    main.append("<button id='animatebtn'>Animate</button>");
    var test = $("#test");
    test.css("border","1px solid green");
    test.css("width","100px");
    test.css("text-align","center");

    $('#animatebtn').click(function () {
        $('#test').animate({
            fontSize : '4em', //aceita tambem => 'font-size: '4em' '
            borderWidth : '10px',
            width: '70%'
        },2000, function () {
            $(this).css("border-color","red");
        });
    });
});