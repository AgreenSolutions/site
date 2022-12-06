    var senha = document.querySelector('.senha');
    var olho = document.querySelector('.btn');

    olho.onclick = () => {
        if(senha.type === 'password'){
            senha.type = 'text';
            olho.src = './assets/icon/blind.png';
        }else{
            senha.type = 'password';
            olho.src = './assets/icon/eye.png';
        }
    }

    function verify(){
        var email = inpEmail.value
        var senha = inpSenha.value
        var campos_validos = false
        if (email == "") {
            swal("Email vazio", "Digite seu email!","warning")
        }
        else if(senha == ""){
            swal("Senha vazia", "Digite sua senha!","warning")
        }
        else if (!email.includes("@") && !email.includes(".")) {
            // alert("Digite um email válido!");
            swal('Campo email inválido','Digite um email válido!','error');
        }
        else{
            campos_validos = true
        }
        if (campos_validos){
            entrar();
        }
    }

    // fechar alerts personalizados, tela de login

// function Closeerro1() {
//     modalcontainer1.style.display = 'none';
//   }
  
//   function Closeerro2() {
//     modalcontainer2.style.display = 'none';
//   }
  
//   function Closeerro3() {
//     modalcontainer3.style.display = 'none';
//   }
  