'use strict'
let ticketNumber;

while (!ticketNumber) {
    const userValue = prompt('ticket number');

    if ( userValue.length == 6 && !isNaN(userValue) ) {
        ticketNumber = userValue;
    } else {
        alert('there are no such tickets');
    }
}

const firstPart = Number(ticketNumber[0]) + Number(ticketNumber[1]) + Number(ticketNumber[2]);
const secondPart = Number(ticketNumber[3]) + Number(ticketNumber[4]) + Number(ticketNumber[5]);

if (firstPart == secondPart){
    alert('YES!!!!');
} else {
    alert('No!');
}




