
const button = document.getElementById('btn');


function getValue() {
    const input = document.getElementById('calculator1');
    const number = input.value;
    
    const input2 = document.getElementById('calculator2');
    const number2 = input2.value;
    let x = Number(number) + Number(number2)

    const result = document.getElementById('result');
    result.innerText = x;


    console.log(number);
    console.log(number2);
    console.log(x);
}
