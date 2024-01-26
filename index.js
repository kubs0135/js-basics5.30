console.log("hello world"); //prints the msg
//variables
//var(es5)
var kuberDada ="kubs"; //always use camelCase for joining two or more words for variables
kuberDada="kk"; //second or more xoti data type dinupardaina
console.log(kuberDada);

//let,const(es6)
let teacher="sir";
teacher="reactsir";
console.log(teacher);
const teach="sir";
console.log(teach);


//create 4 variables using const keyword for table ,fan, chair and pen
/* 
multi-line comment

const kuberClass="dhvch";
const rollStudent="11";

*/
const tableBlack="ab";
const fanKk="tyo";
const chair="4 khutte";
const pen="cello";
console.log(tableBlack);
console.log(fanKk);
console.log(chair);
console.log(pen);
console.log(fanKk,chair,pen,tableBlack);

//using var and let hw for 4 variables

var nepalKtm="capital";
nepalKtm="Rajdhani";
console.log(nepalKtm);
let firstName="Kuber";
firstName="kk";
console.log(firstName);
fNamme="kkk";
console.log(fNamme);
var helloKk="hello";
helloKk="hlo";
console.log(helloKk);
let mobilePhone="iphun";
mobilePhone="android";
console.log(mobilePhone);
var lapAcer="latop";
lapAcer="my laptop";
console.log(lapAcer);
const id="ncc kuber";
console.log(id);
const naxsax="sir";
console.log(naxsax);

/*const isAdult=confirm("are you an adult");
console.log(isAdult);
const name=prompt("what's your name");
console.log(name);
alert("hello from kubs");
const nam=prompt("what's your age");
console.log(nam);*/

/*
    if ko bela gender==="m";
*/


/*const gender=prompt("what is your gender");
switch(gender){
    case "m":
    alert("you are male");
    break;
    case "f":
    alert("you are female");
    break;
    default:
        alert("invalid input");
} */

/*const name=prompt("what is your name");
const pw=prompt("what is your pawwword");
if(name===pw){
    alert(`welcome ${name}`);   // `` backtick
}
else{
    alert("invalid");
} */


/*const name="kuber",password="kk";
const kk=prompt("what is your name?");
const k=promt("what is pw");
if(kk===name && password===k){
    alert("welcome");

}
else{
    alert("invalid");
}



//wap that asks user for
//addition of 2 numbers and alert the result

const numberOne=parseInt(prompt("give me 1st number"));
const numberSecond=parseInt(prompt("give me 2nd number"));
const add=numberOne+numberSecond;
alert(`the sum of  ${numberOne} and ${numberSecond} is ${add}`);
*/

/*
const namek=prompt("enter name");
alert(`the user is ${namek}`);

const sch=prompt("enter school name is");
alert(`your school name is ${sch}`);
*/

//type conversion /type casting

//ternary operator(ES6)

//condition?true:false;

/*const n11=prompt("name");
const pwww=prompt("pw");
n11===pwww?alert("welcome"):alert("invalid");*/

/*const month=prompt("enter month");
month==="jan"?alert("january"):month==="feb"?alert("fabruary"):month==="mar"?alert("march"):alert("not jan,feb,mar");
*/
/*const name=prompt("enter name");
const number=parseInt(prompt("enter time")); 
number>=5 && number<=12?alert(`good morning ${name}`):number>=1 && number <3?alert('good afternoon ${name}'):alert(`good evening ${name}`);
*/
//wap for multiplicatuion tale for 2,3,5

/*let i=1;
let j=2;
console.log("the multiplication table for 2 is:");
for(i=1;i<=10;i++){
    console.log(i*j);
}

let i1=1;
let j1=3;
console.log("Multiplication table for 3 is:");
while(i1<=10){
    console.log(i1*j1);
    i1++;
}

let i2=1;
const j2=5;
console.log("Multiplication table for 5 is:");
do{
    console.log(i2*j2);
    i2++;
}while(i2<=10);
*/

//const kkkk=prompt("enter a number");
//kkkk%3===0?alert("its multiple of 3"):kkkk%7===0?("its multiple of 7"):alert("its not multiple of both")


const a=parseInt(prompt("enter 1st number"));
const b=parseInt(prompt("enter 2nd number"));
let sum=a+b;
if(a===b){
    sum=sum*3;
    alert(`its tripled is:${sum}`);
}
else{
    alert(`${sum}`);
}