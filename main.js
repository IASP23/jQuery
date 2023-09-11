$(document).ready(function () {
    $('.p1').click(function () {
        arriba = Math.random() * (400 - 1) + 1;
        abajo = Math.random() * (609 - 1) + 1;
        $(this).css('top', arriba);
        $(this).css('left', abajo);
    });


    $(".p2").click(() => {
        document.getElementById('si').style.display = 'flex';
    })

});
/* 
function solution(inputString) {
    var len = inputString.length;
    var izq = [];
    var der = [];
    for (let i = 0; i < len; i++) {

        if (inputString[i] !== inputString[len - 1 - i]) {
            return false;
        }

    }

    return true;
}

var result = solution('zzzazzazz');
console.log(result) */


//Comparacion de resultados dentro de un arreglo, numeros adyacents 

/* function solution(inputArray) {
    let pro = [];
    let may = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        pro[i] = inputArray[i] * inputArray[i + 1];

        if (i == 0) {
            may = pro[i]
        }
        else if (may < pro[i]) {
            may = pro[i];
            console.log(may)
        }
    }
    console.log(pro)
    return may;
} 


inputArray = [-23, 4, -3, 8, -12]

console.log(solution(inputArray));

*/

// Pareja
/* function solution(n) {
    if (n === 1) {
        return 1;
    } else {
        return (n * n) + ((n - 1) * (n - 1));
    }

} */



//3.

function solution(statues) {
    if (statues.length === 0) {
        return 0; // Si no hay estatuas, no se necesitan adicionales.
    }
    statues.sort((a, b) => a - b); // Ordenamos las estatuas en orden ascendente.

    let additionalStatues = 0;
    /* 
        for (let i = 1; i < statues.length; i++) {
            let difference = statues[i] - statues[i - 1]
            console.log(i, difference)
            if (difference > 1) {
                additionalStatues++;
            }
    
        } */

    for (let i = 1; i < statues.length; i++) {
        const difference = statues[i] - statues[i - 1] - 1;
        //   additionalStatues += Math.max(0, difference);
        if (difference > 0) {
            additionalStatues++;
        }
    }

    return additionalStatues;

}

statues = [5, 4, 6]
console.log(solution(statues));
