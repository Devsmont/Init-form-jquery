var em ="0"
var ph ="0"


$(document).ready(function(){
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $(".phone").mask('(00) 00000-0000');
});


$("#btn-email").click(function(){
    em++;
    var cloneEmail = $("#campo-email").clone(true).appendTo("#ademail");
    cloneEmail.attr("id",`email${em}`);
    cloneEmail.find(".email").val("");
    var campoE = cloneEmail.find(".inputE");
    campoE.attr('id', `email${em}`);

    cloneEmail.find("#email-label").text(`Email ${em}`)
});

$("#btn-email-minus").click(function(){
    $(`#email${em}`).remove();
    em = em -1;
});


$("#btn-phone").click(function(){
    ph++
    var divOriginal = $("#campo-phone")
    var clonePhone = divOriginal.clone()
    clonePhone.attr("id",`phones${ph}`);  
    
    var inputClone = clonePhone.find(".phone");

    inputClone.attr('id', `phone${ph}`);
    inputClone.unmask();
    inputClone.mask('(00) 00000-0000');

    clonePhone.find("#phone-label").text(`Phone ${ph}`);

    clonePhone.insertAfter(divOriginal);
});
    
$("#btn-phone-minus").click(function(){
    $(`#phones${ph}`).remove();
    ph = ph - 1;
});

