function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        
        const pessoa = criaPessoa(nome,sobrenome,peso,altura)
        pessoas.push(pessoa)

        resultado.innerHTML += `<p>${nome} ${sobrenome} | Peso: ${peso} | Altura: ${altura}</p>`;

        console.log(pessoas);
    }
    
    function criaPessoa (nome,sobrenome,peso,altura) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        };

   
    }

    
    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();