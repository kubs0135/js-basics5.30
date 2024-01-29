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


/*const a=parseInt(prompt("enter 1st number"));
const b=parseInt(prompt("enter 2nd number"));
let sum=a+b;
if(a===b){
    sum=sum*3;
    alert(`its tripled is:${sum}`);
}
else{
    alert(`${sum}`);
}*/


/*

function multiplication(a){
    for(i=1;i<=10;i++){
        console.log(a*i);
}
}
multiplication(2);

const m=(a)=>{
    for(i=1;i<=10;i++){
        console.log(a*i);
}
}
m(2);


const areak=(l,b)=>{
    return (l*b);
}
const rect=areak(2,3);
console.log({rect});

//WAP 
//123=321
const number=(a)=>{
    const str=String(number);
    let newNum="";
    for(i=str.length;i>=0;i--){   12345
       newNum+=str[i];

    }
    return newNum;
};
const reskkk=number(number(1234));
console.log(reskkk); */

//10000
/*const num=(a)=>{
    const str=String(num);
    let newNum="";
    for(i=str.length;i>=0;i--){
        newNum+=str[i];
        let newString=newNum;
        let counter=0;
        while(counter!=3)
        if(newString==0){
            counter++;
        }}
        if(counter==3){
            newString=newString+",";
            newNum=newString;
        }
    }
    return newNum;
const reskkk=number(num(10000));
console.log(reskkk);
*/

/*
const thousands=(n)=>{
    const string=String(n);
    let newString="";
    let reversestring="";
    counter=0;
    for(let i=string.length-1;i>=0;i--){
        console.log({counter,newString});
        if(counter==3){
            newString+=",";
            counter=0;
        }
        newString+=string[i];
        counter++;
    }
    for(let i=newString.length-1;i>=0;i--){
        reversestring+=newString[i];

}
return reversestring;
};
const reversestring=thousands(1000);
console.log(reversestring);

*/
/*
const kuber=(thou)=>{
    const str=String(thou);
    let newStr="";
    let rev="";
    let countk=0;
    for(let i=str.length-1;i>=0;i--){
    if(countk==3){
        newStr+=",";
        countk=0;
    }
    countk++;
    newStr+=str[i];
}
for(let i=newStr.length-1;i>=0;i--){
    rev+=newStr[i];

}
return rev;
};
const practice=kuber(100000);
console.log(practice);

/*

1)write a js function that converts reglar text to proper case
2)that converts long text to ... format 
3)that replaces c++ to mern ==> 
"raktim is c++ teacher. he is teaching us c++ course from 20th jan"
"raktim is c++ teacher. he is....."*/

const properCase1=(fname)=>{
    let strName=String(properCase1);
    strName=strName.toLowerCase();
    const stringNew1="";
    let ran="";
    let count=0;
    for(let i=0;i<=strName.length;i++){ 
        if(count==0){
            ran=strName[i].toUpperCase();
            stringNew1+=ran;
            count++;
        }
        else{
            stringNew1+=strName[i];
        }
        if(strName[i]==" "){
            count=0;
        }
    }
    return stringNew1;

};
const prop=properCase1(KUBER KATHAYAT);
console.log(prop);

//2)
/*
const class1=(descrip)=>{
    const n=String(class1);
    let newSt="";
    if(n.length>27){
        for(let i=0;i<27;i++){
            newSt+=n[i];
        }
        newSt+="....";
    }
    return newSt;
};
const tyo=class1(raktraktim is c++ teacher. he is teaching us c++ course from 20th janim);
console.log(tyo);

//3)

const abc=(a)=>{
    let abc=String(abc);
    let ab="";
    ab=abc.replace(c++,MERN);
    return ab;
};
const ka=abc(raktim is c++ teacher. he is teaching us c++ course from 20th jan);
console.log(ka);
/*/