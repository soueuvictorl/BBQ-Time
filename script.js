let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular() {
  console.log('calculando...')

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  
  let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);

  let qntTotalCerveja = cervejaPP(duracao) * adultos;

  let qntTotalBebidas = bebidasPP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);

  resultado.innerHTML = `<h3>Você vai precisar de:</h3>`
  resultado.innerHTML += 
  `<div class="resultado-txt">
    <img src="./assets/steak_icon.svg">
    <p>${qntTotalCarne/1000} Kg de Carne</p>
  </div>`

  resultado.innerHTML += 
  `<div class="resultado-txt">
    <img src="./assets/beer_icon.svg">
    <p>${Math.ceil(qntTotalCerveja/355)} latas de Cerveja</p>
  </div>`
  
  resultado.innerHTML += 
  `<div class="resultado-txt"> 
    <img src="./assets/bottle_icon.svg">
    <p>${Math.ceil(qntTotalBebidas/1000)} garrafas de 1L de Bebidas</p>
  </div>`
   
}

function carnePP (duracao) {
  let carne = 400;

  if (duração => 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP (duracao) {

  if (duração => 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP (duracao) {

  if (duração => 6) {
    return 1500;
  } else {
    return 1000;
  }
}