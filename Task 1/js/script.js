'use strict'
let area = [];
const arrStr =  ['длину', 'ширину', 'высоту'];
let quantityPaints = 1;

for (let i = 0; i < arrStr.length; i++) {
    const value = +prompt(`Введите ${arrStr[i]} в метрах`);

    if ((isNaN(value)) || (value > 1000) || (value < 0)) {
        alert('Не допустимое значение, попробуйте еще раз')
        i--;
    } else {
        area.push(value);
        quantityPaints *= area[i];
    }
}

const cansPaint = Math.ceil(quantityPaints / 16); 

alert(cansPaint + ' банок краски понадобится для текущего обьекта');


