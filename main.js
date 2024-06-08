$(document).ready(function(){
    $('#meuFormulario').validate({
      rules: {
        email: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        mensagem: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        nome: {
          required: "Por favor, insira seu nome",
          minlength: "Seu nome deve ter pelo menos 2 caracteres"
        },
        email: {
          required: "Por favor, insira seu email",
          email: "Por favor, insira um email válido"
        },
        mensagem: {
          required: "Por favor, insira uma mensagem",
          minlength: "Sua mensagem deve ter pelo menos 10 caracteres"
        }
      },
      submitHandler: function(form) {
        alert("Formulário enviado com sucesso. Obrigado!");
        form.submit();
        event.preventDefault();
    }
    
    });
});