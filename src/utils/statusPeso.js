export const statusPeso = (imc) => {
    if (imc < 18.5) {
        return [ 0 , 'Abaixo de Peso' ]
    }
    if ((imc >= 18.5) && (imc < 25)) {
        return [ 1 , 'Peso Normal' ]
    }
    if ((imc >= 25) && (imc < 30)) {
        return [ 2 , 'Sobrepeso' ]
    }
    if ((imc >= 30) && (imc < 35)) {
        return [ 3 , 'Obesidade Grau I' ]
    }
    if ((imc >= 35) && (imc < 40)) {
        return [ 4 , 'Obesidade Grau II' ]
    }
    
    return [ 5 , 'Obesidade Mórbida' ]  
}