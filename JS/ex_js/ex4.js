const numero = Number(prompt('Seu numero é: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;










// let numero2 = Number(numero)
// let raiz = Math.sqrt(numero2);
// let inteiro = numero2.IS;
// let NaNa = numero2.isNaN(numero2);
// let roundDown = Math.floor(numero2);
// let roundUp = Math.ceil(numero2);
// let decimalCase = numero2.toFixed(2);
// document.body.innerHTML = `Seu número é ${numero} <br />`;
// document.body.innerHTML = `Raiz quadrada: ${raiz} <br />`;
// document.body.innerHTML = `${numero} é inteiro: ${inteiro} <br />`;
// document.body.innerHTML = `É NaN: ${NaN} <br />`;
// document.body.innerHTML = `Arredondando para baixo: ${roundDown} <br />`;
// document.body.innerHTML = `Arredondando para cima: ${roundUp} <br />`;
// document.body.innerHTML = `Com duas casas decimais ${decimalCase} <br />`;