$(document).ready(function(){

    /* Exemplo de Seletores
     var bird = $('#bird').html();
     $('#bird').html(bird + ' in the sky');
     $('.classBird').css('color','orange');
     $('.classBird:first').css('color','red');
     $('.classBird:last').css('color','blue');
     $('div').html('Selector DIV')
     */

    //Eventos
    $('#click').click(function () {
        $(this).html('OK');
    });

    $('#dblclick').dblclick(function () {
        $(this).html('OK');
    });

    $('#mouseenter').mouseenter(function () {
        $(this).html('OK');
    });

    $('#mouseleave').mouseleave(function () {
        $(this).html('OK');
    });

    $('#keypress').keypress(function () {
        $('#eventKey').html('keypress ' + $(this).val());
    });

    $('#keydown').keydown(function () {
        $('#eventKey').html('keydown ' + $(this).val());
    });

    $('#keyup').keyup(function () {
        $('#eventKey').html('keyup ' + $(this).val());
    });

    //Trabalhando com Append,prepend,show, hide e toggle
    var main = $('main');
    main.append("<p id='test'>Test Show, Hide and Toggle</p>");
    main.append("<button id='showbtn'>Show</button>");
    main.append("<button id='hidebtn'>Hide</button>");
    main.append("<button id='togglebtn'>Toggle</button>");

    $('#showbtn').click(function () {
        $('#test').show();
    });

    $('#hidebtn').click(function () {
        $('#test').hide();
    });

    $('#togglebtn').click(function () {
        $('#test').toggle();
    });
});