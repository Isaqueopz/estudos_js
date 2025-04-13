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
    //push() colocar algo dentro no final do array
    //unshift() colocar algo no começo do array
    //pop() remove algum elemento do fim do array
        // pode salvar a constante removido do pop const removido = alunos.pop()
    //shift() remove o primeiro elemento do array 

// FUNCTION
    // abaixo do return nada é executado
    //fuction soma (x,y){
    // essa é a forma de declarar uma função
    //}
    //arrow fuction
    // const raiz = n => n ** 0.5;

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
        //