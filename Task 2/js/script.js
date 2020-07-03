'use strict'
 
let sandPrices = new Array(3);
let containers = new Array(3);
let money = 0;

for (let i = 0; i < sandPrices.length; i++ ){
    sandPrices[i] = inputUser();
}

for (let i = 0; i < containers.length; i++ ){
    containers[i] = inputUser();
}

sandPrices.sort();
containers.sort();

for (let i = 0; i < 3; i++) {
    money += containers[i] * sandPrices[i];

}

alert(money + '$');

function inputUser() {
    let userValue;
    while(!userValue){
        let tempValue = +prompt('Введите число');
        
        if ((!isNaN(tempValue)) && (tempValue < 100) && (tempValue > 0)) {
            userValue = tempValue;
            return userValue;
        } else {
            alert('Не допустимое значение, попробуйте еще раз');
        }
    }
}


