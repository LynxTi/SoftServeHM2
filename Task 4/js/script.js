'use strict'
// №1
    let userAge;
    let str;

    while (!userAge) {
        const tempValue = +prompt('Введите ваш возраст'); 
        if (!isNaN(tempValue) && tempValue >= 0 && tempValue <= 120 ) {
            userAge = tempValue;
        } else {
            alert('Ошибка');
        }
    }

    switch (true) {
        case userAge < 12:
            str = 'ребенoк'; 
            break;
        case userAge < 18:
            str = 'подросток ';
            break;
        case userAge < 60:
            str = 'взрослый ';
            break;

        default:
            str = 'пенсионер ';
            break;
    }

    alert('Вы ' + str);

//  №2
    const UserValue = +prompt('Введите число');

    switch (UserValue) {
        case 1:
            alert('!');
            break;
        case 2:
            alert('@');
            break;
        case 3:
            alert('#');
            break;
        case 4:
            alert('$');
            break;
        case 5:
            alert('%');
            break;
        case 6:
            alert('^');
            break;
        case 7:
            alert('&');
            break;
        case 8:
            alert('*');
            break;
        case 9:
            alert('(');
            break;

        default:
            alert('ОШИБКА');
            break;
    }

//  №3
    let UserValue;

    while (!UserValue) {
        let tempValue = prompt('Введите 3-х значное число')

        if (tempValue.length == 3 && !isNaN(+tempValue)) {
            UserValue = tempValue;
        } else {
            alert('Ошибка');
        }
    }

    switch (true) {
        case UserValue[0] == UserValue[1]:
            alert('ЕСТЬ');
            break;
        case UserValue[1] == UserValue[2]:
            alert('ЕСТЬ');
            break;
        case UserValue[0] == UserValue[2]:
            alert('ЕСТЬ');
            break;

        default:
            alert('нет');
            break;
    }

//  №4
    let year;

    while (!year) {
        let tempValue = prompt('Введите интекресующий вас год значное число')

        if (tempValue.length == 4 && !isNaN(+tempValue)) {
            year = +tempValue;
        } else {
            alert('Ошибка');
        }
    }

    switch (true) {
        case (year % 4 == 0) && (year % 100 !== 0):
            alert('Высокосный');
            break;
        case (year % 400 == 0) && (year % 100 !== 0):
            alert('Высокосный');
            break;
    
        default:
            alert('Не высокосный');
            break;
    }
        
        