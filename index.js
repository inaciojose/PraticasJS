let numberOne = prompt("Digite um número:");
let numberTwo = prompt("Digite o segundo número:");

let sum = Number(numberOne) + Number(numberTwo);

if (!isNaN(sum)) {

    if (numberOne === numberTwo) {
        alert("Os números são iguais")
    } else {
        alert("Os números são diferentes")
    }

    if (sum % 2) {
        alert("A soma dos números é " + sum + ", e é par.");     
    } else {
        alert("A soma dos números é " + sum + ", e é ímpar.");
    }

    alert("A subtração dos números é " + (Number(numberOne) - Number(numberTwo)));

    alert("A multiplicação dos números é " + (Number(numberOne) * Number(numberTwo)));

    alert("A divisão dos números é " + (Number(numberOne) / Number(numberTwo)));

    alert("O resto da divisão é " + (Number(numberOne) % Number(numberTwo)))
    
} else {
    alert("Digite números válidos");
    window.location.reload(true);
}
