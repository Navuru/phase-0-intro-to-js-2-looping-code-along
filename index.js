const names = ["Ada", "Brendan", "Ali"];
function writeCards(names, msg) {

    let message = [] 

    for (let i = 0; i < names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${msg} gift!`)
    }
    return message;
}


// function countDown(number){

//     if(number <= 0){
//         return
//     }

//     for (let i = number; i >= 0 ;  i--){
//         console.log(i);
//     }
// }

function countDown (number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}