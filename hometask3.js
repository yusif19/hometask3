 //TASK 1 - Ədəddəki ən böyük rəqəmi çap edin. Məsələn 43192 ədədində ən böyük rəqəm 9-dur və 9 çap edilməlidir.
 var x=1235067,x1,max=0;
 while (x>0) {
        x1=x%10;
        if (x1>max) {
            max=x1;
        }
        x/=10;
        
 }   
 console.log(Math.floor(max));
//TASK 2 - Ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. Bu cəmlərin hasilini tapın. Məsələn, 1243 ədədində tək yerdə duran 1 və 4ün cəmi və cüt yerdə duran 2 və 3ün cəmini tapıb bu cəmlərin hasilini ekrana yazdırın.
var n = 2375;
var sum1 = 0;
var sum2 = 0;
var c = 0;

while (n >= 1) {
    let dig = n % 10;
    n = Math.floor(n  / 10);
    if(c % 2 == 0){
        sum1 += dig;
    }
    else{
        sum2 += dig;
    }
    c++;
  
}

console.log(sum1*sum2);
 

//TASK 3 - Verilmiş ədədin 2nin qüvvəti olub-olmadığını tapın. Məsələn 8 daxil olunarsa true, 5 daxil olunarsa false çap etməlidir.
let a = 8;
let count = 0;
for(let i = 0;i<=a; i++){
    if(a == 2 ** i){
        count++;
    }
}
if(count == 1){
    console.log(true);
}
else{
    console.log(false);
}
//TASK 4 - Verilmiş ədədin sadə və ya mürəkkəb olduğunu tapın. (Sadə ədədlər sadəcə 1ə və özünə bölünən ədədlərdir). Əgər sadə ədəddirsə "prime", mürəkkəb ədəddirsə "composite" çap olunsun ekrana. 
let b = 29;
let counter = 0;
if (b==2) {
    console.log("prime");
}
else{
for(let i = 3;i<b; i++){
    if(b%i==0){
        counter++;
    }
}
if(counter == 0){
    console.log("prime");
}
else{
    console.log("compositive");
}
}
//TASK 5 - 1-dən M-ədək ədədlər içərisində 15-ə bölünən ədədlərin sayını tapan alqoritm.

var sum=0,m=30;
for(i=1;i<m;i++){
    if(i%15==0){
    sum+=i;
    }
}
console.log(sum);

           
        