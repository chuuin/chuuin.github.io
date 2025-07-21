let height = document.querySelector('.height');
let weight = document.querySelector('.weight');
let calc = document.querySelector('.calc');
let clear = document.querySelector('.clear');
let answer = document.querySelector('.answer');

calc.addEventListener('click', function () {

    let height1 = parseInt(height.value);
    let weight2 = parseInt(weight.value);
    if (isNaN(parseInt(height.value)) || isNaN(parseInt(weight.value))) {
        alert('貴婦險中求');
    } else {
        calc(height1, weight2);
    }
   


    function calc(height1, weight2) {
        answer.value = (weight2 / ((height1 / 100) * (height1 / 100))).toFixed(1);
    }
});

clear.addEventListener('click', function () {
    
        height.value = '';
        weight.value = '';
        answer.value = '';
    
});

