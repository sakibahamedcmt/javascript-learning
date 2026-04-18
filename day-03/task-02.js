// 1–20 এর মধ্যে odd numbers print করো

for(let i= 1; i<=20; i++){
   if(i%2 !==0){
    console.log(i);
   }
}

// 1 থেকে 10 পর্যন্ত sum বের করো
let sum = 0;
for(let i=1; i<=10; i++){
    sum = sum+i; 
}
console.log(sum);

// Multiplication Table

let num = 5;
for(let i=1; i<=10; i++){
    console.log(num + "x" + i + "=" + num*i);
}

// Pattern printing:

for(let i=1; i<=5; i++){
    let Pattern = "";

    for(let j=1; j<=i; j++){
       Pattern += "*"; 
    }
    console.log(Pattern);
}