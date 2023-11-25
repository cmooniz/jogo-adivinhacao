//variáveis para evitar repetir código
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

//Eventos

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10)
let x = 1;

//Funções
function handleTryClick(e){
   e.preventDefault() // não faça o padrão de reiniciar a página

   const inputNumber = document.querySelector("#inputNumber")

   if(Number(inputNumber.value) == randomNumber){
      toggleScreen()
      
      document.querySelector(".screen2 h2")
      .innerText = `Você acertou em ${x} tentativas`
   }
   else if(Number(inputNumber.value) != randomNumber){
      document.querySelector(".mistake").classList.remove("hide2")
   }
   inputNumber.value = ""
   x++
}

function handleResetClick(){
   toggleScreen()
   x = 1
}

function toggleScreen(){
   screen1.classList.toggle("hide")
   screen2.classList.toggle("hide")
   document.querySelector(".mistake").classList.add("hide2")
   randomNumber = Math.round(Math.random() * 10)
}

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
