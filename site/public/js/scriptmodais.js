const modal = document.querySelector('.modal-container')

function openModal(idSensor) {
  modal.classList.add('active')
  if(idSensor == 1){
    myChart.style.display = "flex";
  }else if(idSensor == 2){
    myChart2.style.display = "flex";
  }else if(idSensor == 3){
    myChart3.style.display = "flex";
  }else {
    myChart4.style.display = "flex";
  }
  kpi(idSensor)
}

function closeModal() {
  modal.classList.remove('active')
  myChart.style.display = "none";
  myChart2.style.display = "none";
  myChart3.style.display = "none";
  myChart4.style.display = "none";


}


// const modal2 = document.querySelector('.modal-container2')


// function openModal2() {
//   modal2.classList.add('active')
//   kpi(2)
// }

// function closeModal2() {
//   modal2.classList.remove('active')

// }

// const modal3 = document.querySelector('.modal-container3')


// function openModal3() {
//   modal3.classList.add('active')

//   kpi(3)
// }

// function closeModal3() {
//   modal3.classList.remove('active')

// }

// const modal4 = document.querySelector('.modal-container4')


// function openModal4() {
//   modal4.classList.add('active')

//   kpi(4)
// }

// function closeModal4() {
//   modal4.classList.remove('active')

// }



