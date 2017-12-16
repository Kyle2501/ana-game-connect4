
//when the current player is red:
var currentPlayer = "red";

var slot = $('.slot') //ALL 42 SLOTS


var victories = [
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],
    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [2, 9, 16, 23],
    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41],
    [12, 19, 26, 33],
    [19, 26, 33, 40],
    [18, 25, 32, 39],
    [36, 31, 26, 21],
    [31, 26, 21, 16],
    [26, 21, 16, 11],
    [37, 32, 27, 22],
    [32, 27, 22, 17],
    [38, 33, 28, 23],
    [30, 25, 20, 15],
    [25, 20, 15, 10],
    [20, 15, 10, 5],
    [24, 19, 14, 9],
    [19, 14, 9, 4],
    [18, 13, 8, 3],
];

for (var i = 0; i < victories.length; i++){
    victories[i] = victories[i].map(function(item) {
        return slot.eq(item); //victories will be an array of an array of jquery elements.
    });
}

$('.column').on('click', function(e) {
    var slots = $(e.currentTarget).find('.slot');
    for (var i = 5; i >= 0; i--){
        if (!slots.eq(i).hasClass('red') && !slots.eq(i).hasClass('black')) {
            slots.eq(i).addClass(currentPlayer);
            console.log(currentPlayer);
            break;
        }
    }

//function that pass element and return true is 4 same in the same row or false if not.
    // checkSetForVictory(slots);

    if (checkSetForVictory(slots)){
        alert('you won');
    }else if (checkSetForVictory($('.row'+i))){
        console.log(checkSetForVictory(slots));
        alert('you won');
    }else {
        if(checkSetForVictory(slot)) {
            for (var a=0; a<victories.length; a++) {
                if(checkSetForVictory(victories[i])) {
                    return alert('you won');
                }
            }
        }
    }



//victoria diagonales.

    if(currentPlayer == 'red') {
        currentPlayer = "black";
    }else {
        currentPlayer="red";
    }

});


function checkSetForVictory(slots) {
    var victory = '';
    for (var i = 0; i < slots.length; i++) {
        // console.log(slots[i]);
        if(slots[i].classList.contains(currentPlayer)){
            victory += 'w'
        } else {
            victory += 'l'
        }
    }
    return victory.indexOf('wwww') > -1;
}
