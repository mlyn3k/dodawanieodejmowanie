const inputA1 = document.getElementById("A1");
const inputA2 = document.getElementById("A2");
const inputResultValue = document.getElementById("result-value"); 


function addition(A1, A2) {
    return Number(A1) + Number(A2);
}

document.getElementById("calculate").addEventListener("click", function() {
    let A1 = inputA1.value;
    let A2 = inputA2.value;
    let result = addition(A1, A2);
    inputResultValue.value = result;
});

const inputB1 = document.getElementById("B1");
const inputB2 = document.getElementById("B2");
const inputResultValue2 = document.getElementById("result-value2");


function subtratcion(B1, B2) {
    return Number(B1) - Number(B2);
}

document.getElementById("calculate2").addEventListener("click", function() {
    let B1 = inputB1.value;
    let B2 = inputB2.value;
    let result2 = subtratcion(B1, B2);
    inputResultValue2.value = result2;
});