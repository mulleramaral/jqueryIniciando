$(document).ready(function () {
    $('form').submit(function () {
        var nome = $(':input[name=nome]').val();
        var email = $(':input[name=email]').val();
        var tel = $(':input[name=tel]').val();
        var termo = $(':input[name=termo]').is(':checked');

        var errors = '';
        var errorsHtml = $('#errors');
        errorsHtml.html("");

        if(nome === ""){
            errors += "<p>Nome é obrigatório</p>";
        }

        if(email === ""){
            errors += "<p>Email é obrigatório</p>"
        }

        if(tel === ""){
            errors += "<p>Telefone é obrigatório</p>"
        }

        if(!termo){
            errors += "<p>Aceite os termos</p>"
        }

        if(errors){
            errorsHtml.html(errors);
            return false;
        }
    });
});