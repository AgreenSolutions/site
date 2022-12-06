// // fechar alerts personalizados, tela de cadastro 2

// function Closeerro1() {
//     modalcontainer1.style.display = 'none';
//   }
  
//   function Closeerro2() {
//     modalcontainer2.style.display = 'none';
//   }
  
//   function Closeerro3() {
//     modalcontainer3.style.display = 'none';
//   }
  
//   function Closeerro4() {
//     modalcontainer4.style.display = 'none';
//   }
  
//   function Closeerro5() {
//     modalcontainer5.style.display = 'none';
//   }
  
//   function Closeerro6() {
//     modalcontainer6.style.display = 'none';
//   }
  
//   function Closeerro7() {
//     modalcontainer7.style.display = 'none';
//   }
  
//   function Closeerro8() {
//     modalcontainer8.style.display = 'none';
//   }

function cadastrar2() {
    var cep = ipt_cep.value
    var numero = ipt_numero.value
    var logradouro = ipt_logradouro.value
    var complemento = ipt_complemento.value
    var cidade = ipt_cidade.value
    var campos_validos = 'no'

    if (cep == '') {
        // alert('Digite seu CEP!')
        // modalcontainer1.style.display = 'block';
        swal("Digite seu CEP!","","error");
    }
    else if (cep.length < 8 || cep.length > 8) {
        // alert('O CEP deve conter 8 números')
        // modalcontainer2.style.display = 'block';
        swal("O CEP deve conter 8 números","","error");
    }
    else if (numero == '') {
        // alert('Digite o número!')
        // modalcontainer3.style.display = 'block';
        swal("Digite o número!","","error");
    }
    else if (isNaN(numero)) {
        // alert('Por favor digite um número válido!')
        // modalcontainer4.style.display = 'block';
        swal("Por favor digite um número válido!","","error");
    }
    else if (logradouro == '') {
        // alert('Digite o Logradouro!')
        // modalcontainer5.style.display = 'block';
        swal("Digite o Logradouro!","","error");
    }
    else if (complemento == '') {
        // alert('Digite o complemento!')
        // modalcontainer6.style.display = 'block';
        swal("Digite o complemento!","","error")
    }
    else if (cidade == '') {
        // alert('Digite sua Cidade!')
        // modalcontainer7.style.display = 'block';
        swal("Digite sua Cidade!","","error")
    }
    else{
        // alert('Cadastro efetuado com sucesso!')
        // modalcontainer8.style.display = 'block';
        swal("Cadastro efetuado com sucesso!","","success")
        campos_validos = 'yes'
    }

    if (campos_validos == 'yes') {
    window.location.replace("login.html")        
    }
}

