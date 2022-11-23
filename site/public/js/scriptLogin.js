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

    // fechar alerts personalizados, tela de login

function Closeerro1() {
    modalcontainer1.style.display = 'none';
  }
  
  function Closeerro2() {
    modalcontainer2.style.display = 'none';
  }
  
  function Closeerro3() {
    modalcontainer3.style.display = 'none';
  }
  