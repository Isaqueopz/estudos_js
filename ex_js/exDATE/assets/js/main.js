const textDay = document.querySelector('.text-day')



function daysOfWeek () {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
    const diaDaSemana = data.getDay(); 

    return `${solveDayOfWeek(diaDaSemana)}, ${dia} de ${solveDayOfMonth(mes)} de ${ano} ${hora}:${min}:${seg}`
} 

function solveDayOfWeek (diaDaSemana){
    switch (diaDaSemana) {
        case 0:
            diaDaSemana = 'domingo'
            return diaDaSemana;
        case 1:
            diaDaSemana = 'segunda-feira'
            return diaDaSemana;
        case 2:
            diaDaSemana = 'terça-feira'
            return diaDaSemana;
        case 3:
            diaDaSemana = 'quarta-feira'
            return diaDaSemana;
        case 4:
            diaDaSemana = 'quinta-feira'
            return diaDaSemana;
        case 5:
            diaDaSemana = 'sexta-feira'
            return diaDaSemana;
        case 6:
            diaDaSemana = 'sábado'
            return diaDaSemana;
    }
    
}

function solveDayOfMonth (mes){
    switch (mes) {
        case 1:
            mes = 'janeiro'
            return mes;
        case 2:
            mes = 'fevereiro'
            return mes;
        case 3:
            mes = 'março'
            return diaDaSemana;
        case 4:
            mes = 'abril'
            return mes;
        case 5:
            mes = 'maio'
            return mes;
        case 6:
            mes = 'junho'
            return mes;
        case 7:
            mes = 'julho'
            return mes;
        case 8:
            mes = 'agosto'
            return mes;
        case 9:
            mes = 'setembro'
            return mes;
        case 10:
            mes = 'outubro'
            return mes;
        case 11:
            mes = 'novembro'
            return mes;
        case 12:
            mes = 'dezembro'
            return mes;
    }
    
}

const result = daysOfWeek();

textDay.innerHTML = result;