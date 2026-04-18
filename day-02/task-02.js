let marks = 70;

if(marks>=80 || marks <=100){
    console.log("A+");
} else if(marks>=70 || marks <=79){
    console.log("A");
}else if(marks>=60 || marks <=69){
    console.log("B");
}else if(marks>=50 || marks <=59){
    console.log("C");
} else if(marks>=40 || marks <=49){
    console.log("D");
} else {
    console.log("Fail");
}


//Ternary operator দিয়ে test করো boolean variable

let isPassed = marks >= 50 ? true : false;
console.log("Passed:", isPassed);


let isMember = true;

let message = isMember ? "Welcome Member" : "Please Sign Up";
console.log(message);


let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin); 
console.log(!isLoggedIn);           