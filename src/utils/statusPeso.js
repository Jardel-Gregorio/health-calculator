const imagens = {
    homem: {
        source1: require('health-calculator/src/assets/images/man-1.jpg'),
        source2: require('health-calculator/src/assets/images/man-2.jpg'),
        source3: require('health-calculator/src/assets/images/man-3.jpg'),
        source4: require('health-calculator/src/assets/images/man-4.jpg'),
        source5: require('health-calculator/src/assets/images/man-5.jpg'),
        source6: require('health-calculator/src/assets/images/man-6.jpg')
    }, 
    mulher: {
        source1: require(`health-calculator/src/assets/images/woman-1.jpg`),
        source2: require('health-calculator/src/assets/images/woman-2.jpg'),
        source3: require('health-calculator/src/assets/images/woman-3.jpg'),
        source4: require('health-calculator/src/assets/images/woman-4.jpg'),
        source5: require('health-calculator/src/assets/images/woman-5.jpg'),
        source6: require('health-calculator/src/assets/images/woman-6.jpg')
    }
};


export const statusPeso = (imc, sexo) => {
    const { homem, mulher } = imagens; 
    const imagemResultado = ((sexo === 'Homem') ? homem : mulher);
    if (imc < 18.5) {
        return [ imagemResultado.source1 , 'Abaixo de Peso' ]
    }
    if ((imc >= 18.5) && (imc < 25)) {
        return [ imagemResultado.source2 , 'Peso Normal' ]
    }
    if ((imc >= 25) && (imc < 30)) {
        return [ imagemResultado.source3 , 'Sobrepeso' ]
    }
    if ((imc >= 30) && (imc < 35)) {
        return [ imagemResultado.source4 , 'Obesidade Grau I' ]
    }
    if ((imc >= 35) && (imc < 40)) {
        return [ imagemResultado.source5 , 'Obesidade Grau II' ]
    }
    
    return [ imagemResultado.source6 , 'Obesidade Mórbida' ]  
}