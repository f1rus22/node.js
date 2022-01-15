const colors = require("colors")


let arr=[];

const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);

/**
 * функция получает число и проверяет делится ли оно без остатка  
 * @param {number} num 
 * @returns 
 */
function isPrime(num){
    if(num<=1){
        return false;
    };
    for(let i=2; i<num; i++){
        if(num % i==0){
            return false;
        }
    }return true;
};

for(let j=arg1; j<=arg2; j++){
    if(isPrime(j)==true){
        arr.push(j)
    }
};

if(isNaN(arg1) && isNaN(arg2)){
    console.log("Диапозон не задан или задан не числами".yellow);
    return
} else if(arr.length==0){
    console.log("В коллекци чисел нет простых чисел".red)
} else{ 
    changeColor(arr);
}

function changeColor(arr) {
    let string=""
    for (let k = 0; k < arr.length; k++){
    if (k%3==0){
        output = `${arr[k]} `.green;
        string+=output;
        
    } else if ((k-1)%3==0){
        output = `${arr[k]} `.yellow;;
        string+=output;
        
    } else {
        output = `${arr[k]} `.red;
        string+=output;
        }
    }return console.log(string)
}

