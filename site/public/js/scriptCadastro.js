
const senha = document.querySelector(".senha");
const olho = document.querySelector(".btn");
const olho1 = document.querySelector(".btn1");
const senha1 = document.querySelector(".senha1");


// fechar alerts personalizados, tela de cadastro 1


// function Closeerro1() {
//   modalcontainer1.style.display = 'none';
// }

// function Closeerro2() {
//   modalcontainer2.style.display = 'none';
// }

// function Closeerro3() {
//   modalcontainer3.style.display = 'none';
// }

// function Closeerro4() {
//   modalcontainer4.style.display = 'none';
// }

// function Closeerro5() {
//   modalcontainer5.style.display = 'none';
// }

// function Closeerro6() {
//   modalcontainer6.style.display = 'none';
// }

// function Closeerro7() {
//   modalcontainer7.style.display = 'none';
// }

olho.onclick = () => {
  if (senha.type === "password") {
    senha.type = "text";
    olho.src = "./assets/icon/blind.png";
  } else {
    senha.type = "password";
    olho.src = "./assets/icon/eye.png";
  }

    olho1.onclick = () => {
        if(senha1.type === 'password'){
            senha1.type = 'text';
            olho1.src = './assets/icon/blind.png';
        }else{
            senha1.type = 'password';
            olho1.src = './assets/icon/eye.png';
        }
    }

};
function verify() {
  var nome = inpNome.value;
  var senha = inpSenha.value;
  var confirmacao = confirmSenha.value;
  var email = inpEmail.value;
  var campos_validos = "no";
  if(nome == "" && senha == "" && confirmacao == "" && email == ""){
    // alert("Preencha todos os campos!");
    // modalcontainer1.style.display = 'block';
    swal("Por favor preencha todos os campos!","","warning")

  }
  else if (nome == "") {
    // alert("Digite seu nome!"); 
    // modalcontainer2.style.display = 'block';       
    swal("Nome inválido","Digite seu nome!","warning");  
  } else if (email == "") {
    // alert("Digite o seu email");
    swal("Email vazio", "Digite seu email!","warning")

  } else if (!email.includes("@") && !email.includes(".")) {
    // alert("Digite um email válido!");
    swal('Campo email inválido','Digite um email válido!','warning');

    inpEmail.placeholder = "Digite seu e-mail";
  } else if (senha == "") {
    // alert("Digite sua senha.");
    // modalcontainer5.style.display = 'block';
    swal('Campo senha vazio!','Por favor digite sua senha','warning')

  } else if (confirmacao == "") {
    // alert("Não se esqueça de confirmar sua senha.");
    // modalcontainer6.style.display = 'block';
    swal('Campo confirmação vazio!','Por favor confirme sua senha','warning')

  } else if (senha != confirmacao) {
    // alert("A senha e a confirmação não coincidem!");
    // modalcontainer7.style.display = 'block';
    swal('Senhas não coincidem!','Por favor digite a mesma senha nos dois campos','warning')
  } else {
    campos_validos = "yes";
  }
if (campos_validos == "yes") {
        cadastrar();
    }
}

