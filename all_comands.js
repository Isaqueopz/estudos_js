//NaN -> Not a number
//parseInt('5') faz a conversão de uma string para um int
//parseFloat('5') faz a conversão de uma string para um int
//Number('5') faz a conversão de uma string para um int ou float


// STRING 
    //charAt  retorna o elemento de determinado indice de alguma posição desejada
    //indexof  retorna o indice de alguma posição desejada
    //lastIndexOf retorna o ultimo indice de algo 
    //match usado para expressão regular 
    //replace para trocar algo por outra coisa
    //length saber o tamanho da string
    //slice usado para fatiamento 
    //split separar as strings por algum atributo e colocar eles em um array 
    //toUpperCase | toLowerCase  -> tudo maiusculo e tudo minusculo 


// NUMBER
    //toString()  converte um numero para uma string (temporariamente) se eu quiser um numero binario por exemplo é so colocar o 2 dentro do toString
    //toFixed() setar quantidade de casas decimais
    //isInterger() retorna se um numero é inteiro ou não
    //isNaN() retorna se um numero/conta é inválida
    //Math
        //math.floor arredondo um valor quebrado para baixo
        //math.ceil arredondo um valor quebrado para cima
        //math.round se for da metade, ele arredonda para cima, caso contrario para baixo
        //math.max() pega o maior numero da sequência
        //math.min() pega o menor numero da sequência
        //math.random() gera um valor aleatório
        
        
// ARRAY
    //push() colocar algo no final do array

    //pop() remove algum elemento do fim do array
        // retorna o elemento removido (caso queira)

    //shift() remove o primeiro elemento do array (Desloca todos os índices do array)
        // retorna o elemento removido (caso queira)

    //unshift() colocar algo no começo do array

    //spread -> espalhar os elementos de um array para outro, é como se fosse uma cópia de um array para outro, sem afetar no array original caso eu faça alguma alteração no original

    //slice(n,n-1) - fatiamento de arrays

    //split - separdor de strings convertendo em arrays
    //join - reune as strings separadas

    //splice(indice atual,delete, elem for add) - retorna um array do que for removido

    //concat - metódo de concatenação de arrayas
        // a1.concat(a2)
        //ou usar o spread
        //[...a1,'luiz',...a2]
    
    //FILTER (filtrador de array sem alterar o original) - ela requer o return booleano da função callback, sempre retornara um array com a mesma quantidade de elementos ou menos
        // numeros.filter(
        //   fuction(valor,indice,array) {
        //   return valor > 10;}  
        // );

        // ou com arrow fuction 

        // numeros.filter(
        //   (valor,indice,array) => {
        //   return valor > 10;}  
        // );
    
    //endsWith - função que verifica se uma string termina com determinado parametro

    //MAP 
        //praticamente a mesma coisa de filter porém no retorno final, eu retorno um array modificado do original, alterando também o original
        // em vez de retornar um bool retorna o valor modificado 
    
    //REDUCE (recebe o acmulador como parametro tbm) (reduzir o array a um elemento só)
        // ex: some todos os números

    //FOR EACH -> só itera sobre os valores
        //

// FUNCTION
    // abaixo do return nada é executado
    //fuction soma (x,y){
    // essa é a forma de declarar uma função
    //}
    //arrow fuction
    // const raiz = n => n ** 0.5;
        // a função pode ser tratada como dado, ou seja, atribuida a uma variável 
        // arguments -> pega todos os parametros passados na função e atribui a um array
        // REST OPERATOR como parametro -> ...numeros
    // callback
        // função que chama outra função dentro dela mesmo, meio que esperando a execução da mesma para a primeira ser executada
// OBJETOS
    // cada objeto carrega um atributo e metodos
    // o uso de this é indispensavel quando utilizado de partes do objeto em algum metodo 

// OPERADORES 
    // COMPARAÇÃO
        // > >= < <= == === (igualdade estrita, valor e tipo) != () !== (diferente estrito, valor e tipo)
    // LÓGICOS
        // && || !()
    //FALSY VALUES
        // 0 '' "" `` null / undefined NaN
    
// OPERAÇÃO TERNARIA
    // (condicao) ? 'Valor para verdadeiro' : 'Valor para falso '
    // const nivelUsuario = pontuacaoaUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

// DATE
    // data = new Date (ano,mês,dia,hora,minuto,segundos,milésimos)
    // o mês começa do 0 
    // ('2019-04-20 20:20:59') -> pode utilizar assim 
    // dia da semana 0 - domingo , 6 - sábado 

// SWITCH CASE
    // alternativa para casos específicos 
    // switch () {
    //     case 0:
    //         ...
    //     break;
    // }

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO 
    // ARRAYS
        // const numeros = [1000,2000,3000,4000,5000];
        // const [primeiroNumero, segundoNumero, ...resto] = numeros;
        // const [primeiroNumero, , terceiroNumero, ...resto] = numeros;
        // rest operator || spread operator 
    // OBJETOS
        // const pessoa = {
        //    nome: 'Luiz',
        //    sobrenome: 'Miranda',
        //    idade: 30,
        //    endereco: {
        //       rua: 'Av Brasil',
        //       numero: 320
        //    }
        // }
        // const {nome  = 'Valor Padrão ', sobrenome, idade} = pessoa;
        // const {endereco: {rua, numero}}
        // console.log(nome,sobrenome, rua, numero);
        // console.log (nome, ...resto) = pessoa; #REST

// ESTRUTURAS DE REPETIÇÃO
    // FOR #OBTÉM O VALOR DO ÍNDICE
        // (i += 10) # espaçamento
        // let i = 500; i >= 400; i -= 10 # inversão de condição
    // FOR IN #OBTÉM O VALOR DO ÍNDICE
        //VETOR
            // for (let i in frutas) { # ele lê os índices do vetor
            // console.log(frutas[i]);
            // }
        // OBJETOS
            // const pessoa = {
            //     nome: 'Luiz',
            //     sobrenome: 'Otávio',
            //     idade: 30
            // };
            // for (let chave in pessoa){
            //     console.log(chave,pessoa[chave]);  
            // }
            
    // FOR OF # NÃO OBTÉM O VALOR DO ÍNDICE
        // for (let valor of nome) {
        // console.log(valor);
        // }
   //RESUME:
   // For clássico - Geralmente com iteráveis (array ou strings)
   // For in - Retorna o índice ou chave (string, array ou objetos)
   // For of - Retorna o valor em si (iteráveis, arrays ou strings)

   // WHILE / DO WHILE
       // O do while, executa pelo menos uma vez sempre e depois faz a checagem de condição

// BREAK / CONTINUE
    // continue -> pula a condição 
    // break -> finaliza o codigo em um ponto de checagem

// TRY(tentar), CATCH(capturar), THROW(lançar), FINALLY (finalmente)
    // try{
        //tenta executar
    // } catch (err) {
        //executado quando há erros
    // }

    // throw -> lança um erro 

    // finally -> sempre será executado 
        // console.log('fechei o arquivo');
    

// QuerySelectorAll('p')
        // pega todos os elementos Ps de um local do DOM

// setInterval
    //função vai ser executada de tempos em tempos || setInterval(fuction, tempo)

// setTimeout com clearInterval -> para o evento 
    // setTimeout(function(){
    //     clearInterval(timer);
    // }, 10000);
    //função que vai executar com um tempo limite e depois parar

// como capturar o click de algum botao? 
    // primeiro você seleciona o botão
    // const addTask = document.querySelector('.addTask');
        //depois você captura o evento adicionando o um addEventListener
            // addTask.addEventListener('click', function() {
            // });
    
//PROMISES
    // new Promise (resolve,reject)
    //resolve - utiliza-se do then
    //reject - utiliza- se do catch (captura erros)

    //PROMISE.ALL
        // resolve todas as promessas e depois traz todos os valores de volta
    //PROMISE.RACE
        // entrega a primeira coisa a ser resolvida 
    //PROMISE.RESOLVE
        // entrega a promessa resolvida de cara
    //PROMISE.REJECT
        // entrega a promessa rejeitada de cara

    // ASYNC -> serve para rodar códigos de forma assíncrona
        // AWAIT -> aqui ele vai esperar a promise ser resolvida ou rejeitada

    // pending -> promessa pendente porque não nem capturada por then nem por catch 
    // fullfiled -> promessa resolvida
    // rejected -> promessa rejeitada 
    
    // fetch ('url',) O fetch é uma função do JavaScript que faz requisições HTTP (como GET ou POST) para um servidor. Ele serve para buscar ou enviar dados, como informações de uma API.
        // retorna promises
    
