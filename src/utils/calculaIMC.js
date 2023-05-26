export const calculaIMC = (peso, altura) => {
    altura = altura / 100;
    const imc = peso / ( altura * altura);

    return imc.toFixed(2);
}