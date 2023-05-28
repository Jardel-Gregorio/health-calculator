export const calculaIMC = (peso, altura) => {
    altura = Number(altura) / 100;
    const imc = Number(peso) / ( altura * altura);

    return imc.toFixed(2);
}