
ocument.addEventListener('DOMContentLoaded', function() {
    const toastElement = document.getElementById('toastA');
    const oneToast = new bootstrap.Toast(toastElement);

    setTimeout(function() {
        oneToast.show();
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnToastContato').addEventListener('click', function () {
        const textoAuto = "Olá! Gostaria de saber sobre a disponibilidade das acomodações.";

        const contato = document.getElementById('contato');
        contato.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        document.getElementById('mensagem').value = textoAuto;
    }, 500);
    });
});

$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
})


$('form').validate({
    rules: {
        nome: {
            required: true,
        }, 
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        mensagem: {
            required: true
        },
    },
    messages:{
        nome: 'Por favor insira seu nome',
        email: 'Insira um e-mail válido',
        telefone: 'Insira seu telefone',
        mensagem: 'Escreva uma mensagem'
    },
    submitHandler: function(form) {
        console.log(form)
        form.submit();
    },
    invalidHandler: function(evento, validator) {
        let camIncor = validator.numberOfInvalids();
        if(camIncor) {
            alert(`Existem ${camIncor} campos incorretos`)
        }
    }
})
