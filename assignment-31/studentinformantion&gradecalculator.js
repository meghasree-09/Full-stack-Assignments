// let student_name=prompt("Enter student name")
// let roll_numbaer=prompt("Enter student roll number")
// let course=prompt("Enter the course")
// let Age=prompt("Enter the age")
// let total_marks=0
// let avg_marks=0
// let percentage=0
// for (let i=0;i<5;i++){
// let Marks=Number(prompt("Enter the marks")); 
// total_marks=total_marks+ Marks;
// }

// avg_marks= total_marks/5
// percentage= (total_marks/500) *100
// console.log(student_name)
// console.log(roll_numbaer)
// console.log(course)
// console.log(Age)
// console.log(total_marks)
// console.log(avg_marks)
// console.log(percentage)
// if(percentage>=90){
//     console.log("A+")
// }
// else if(percentage>=80 && percentage<=89){
//     console.log("A")
// }
// else if(percentage>=70 && percentage<=79){
//     console.log("B")
// }
// else if(percentage>=60 && percentage<=69){
//     console.log("C")
// }
// else if(percentage>=50 && percentage<=59){
//     console.log("D")
// }
// else{
//     console.log("Fail")
// }
// if (percentage>=85){
//     console.log("Eligible for scholarship")
// }
// else{
//     console.log("Not eligible for scholarship")
// }
// if(percentage>=50){
//     console.log("Pass")
// }
// else{
//     console.log("Fail")
// }
// for(j=1;j<=20;j++){
//     console.log(j)
// }
// for(k=1;k<=50;k++){
//     if(k % 2 == 0){
//         console.log(k)
//     }
// }
// for(l=1;l<=50;l++){
//     if(l % 2 != 0){
//         console.log(l)
//     }
// }
// let v=2
// for(let h=1;h<=10;h++){
//     console.log(`${v} x ${h} = ${v*h}`)
// }
// let n=Number(prompt("Enther the number"))
// let sum=0
// for(let g=1;g<=n;g++){
//     sum+=g
// }
// console.log(sum)
// let a=10
// let b=20
// let c=0
// c=a
// a=b
// b=c
// console.log(a,b)
// let year=Number(prompt("Enter the year"))
// if(year%400==0 || year%100!=0 && year%4==0){
//     console.log("Leap year")
// }
// else{
//     console.log("Not a leap year")
// }
// let s=Number(prompt("Enter a number"))
// if(s<0){
//     console.log("Negative")
// }
// else{
//     console.log("Positive")
// }
// d=Number(prompt("enter the first number"))
// c=Number(prompt("enter the second number"))
// z=Number(prompt("enter the third number"))
// if(d>c && d>z){
//     console.log("First number is greater one ")
// }
// else if(c>d && c>z){
//    console.log("Second number is greater one ") 
// }
// else if(z>d && z>c){
//     console.log("Third number is greater one ") 
// } 
// g=Number(prompt())
// fact=1
// for(let v=g;v>=1;v--){
//     fact=fact*v
// }
// console.log(fact)
// let t=Number(prompt());
// let reverse=0;
// while(t>0){
//     let digit=t%10;
//     reverse=reverse*10+digit;
//     t=Math.floor(t/10);
// }
// console.log(reverse)
// let num=Number(prompt())
// let original=num;
// let reverse=0;
// while(num>0){
//     let digit=num%10
//     reverse=reverse*10+digit
//     num=Math.floor(num/10)
// }
// if (original==reverse){
//     console.log("Palindrome")
// }
// else{
//     console.log("Not palindrome")
// }
// let f=Number(prompt())
// let x=0;
// let y=1;
// console.log(x)
// console.log(y)
// for(let h=3;h<=f;h++){
//     let z=x+y;
//     console.log(z);
//     x=y
//     y=z
// }
//d let o=Number(prompt());
// let count=0;
// while(o>0){
//     count++;
//     o = Math.floor (o/10);
// }
// console.log(count);
let r=Number(prompt())
let sum=0
while(r>0){
    let s=r%10;
    sum= sum + s;
    r=Math.floor(r/10);
}
console.log(sum)