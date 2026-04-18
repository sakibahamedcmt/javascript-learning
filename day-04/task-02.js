// Sum Function

function sum(i, num){
    total = 0;
    for(i; i<=num; i++){
        total = total+i;
    }
    return total;
}
console.log(sum(1, 10));


// Max Number 

function max(num1, num2){
    if(num1>num2){
        return num1;
    } else{
        return num2;
    }
}
console.log(max(10, 25));


// Temperature Check

function checkTemp(temp){
    if(temp>30){
        return "Hot";
    } else if (temp>=20 && temp<=30){
        return "Warm";
    } else{
        return "Cold";
    }
}
console.log(checkTemp(31));

// Arrow function দিয়ে isOdd বানাও

const isOdd = (a) => a%2 === 0; 

console.log(isOdd(20));