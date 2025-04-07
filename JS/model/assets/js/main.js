function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado'); // mantém referência ao elemento
  
    function recebeEventoForm(evento) {
      evento.preventDefault();
      const peso = parseFloat(form.querySelector('.peso').value);
      const altura = parseFloat(form.querySelector('.altura').value);
  
      if (!peso || !altura || altura === 0) {
        resultado.innerHTML = 'Por favor, preencha peso e altura corretamente.';
        return;
      }
  
      const imc = peso / (altura ** 2);
      let mensagem = '';
  
      if (imc < 18.5) {
        mensagem = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
      } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem = `Seu IMC é ${imc.toFixed(2)} (Peso Normal)`;
      } else if (imc >= 25 && imc <= 29.9) {
        mensagem = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
      } else if (imc >= 30 && imc <= 34.9) {
        mensagem = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`;
      } else if (imc >= 35 && imc <= 39.9) {
        mensagem = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`;
      } else {
        mensagem = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`;
      }
  
      resultado.innerHTML = mensagem; 
    }
  
    form.addEventListener('submit', recebeEventoForm); 
  }
  
  meuEscopo();
  