//basic and operators
let a=10;
let b="10";
console.log(a==b);
console.log(a===b);
console.log(a+5);
console.log(a>5 && a<20);
// example 1 if/else
let marks=75;
if(marks>=90){
    console.log("grade a");
}
else if(marks>=60){
    console.log("grade b");
}
else{
    console.log("grade c");
}
//example 2 loops
for(let i=1;i<=5;i++){
    console.log(i);
}
let num=0;
while(num=10){
    console.log(num);
    num+=2;
}
//func declaration & expression
function add(x,y){
    return x+y;
}
console.log(add(4,5));
const greet=(name="guest") => `hello,${name}!`;
console.log(greet());
console.log(greet("aman"));
const numbers=[1,2,3,4,5];
const doubled = numbers.map(n=>n*2);
const even = numbers.filter(n=> n%2 ===0);
const sum=numbers.reduce((total,n)=> total + n,0);
console.log(doubled);