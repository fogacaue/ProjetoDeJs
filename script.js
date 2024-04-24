

/*1

let value1 = 10;
let value2 = 100;
alert(`Soma: ${value1+value2}`);
alert(`Subtracao: ${value1-value2}`);
alert(`Multiplicacao: ${value1*value2}`);
alert(`Divisao: ${value1/value2}`);

*/

/* 2

console.log("Ex 2");
do {
console.log(value1);
value1++;
} while (value1 <= 100);

*/

/*3

console.log("Ex 3");
let value3 = 5;
let i3 = 1;
do {
console.log(`${value3}x${i3}=${value3 * i3}`);
i3++;
} while (i3 <= 10);

*/

/* 4

console.log("Ex 4");
let value4 = parseInt(prompt("Digite um numero:"));
let i4 = 1;
do {
console.log(`${value4}x${i4}=${value4 * i4}`);
i4++;
} while (i4 <= 10);

*/

// 5

const ex5func = () => {
    let valueCalc1 = document.getElementById("n1").value;
    let valueCalc2 = document.getElementById("n2").value;
    let operacoes = ["+", "-", "*", "/"]
    let operador = document.getElementById("op").value;
    
    if (operacoes.find((op) => op === operador)) {
    let result = eval(`${valueCalc1}${operador}${valueCalc2}`);
    document.getElementById("result").value = result;
    }
    return "Operador invalido";
    };


/* 6
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
if (array[i] % 2 === 0) {
    alert(array[i]);
}
}
*/
