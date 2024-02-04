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
    let strName=String(fname);
    strName=strName.toLowerCase();
    let stringNew1="";
    let ran="";
    let count=0;
    for(let i=0;i<strName.length;i++){ 
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
const prop=properCase1("KUBER KATHAYAT");
console.log(prop);
/*
//2)

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
    ab=abc.replaceAll(c++,MERN);
    return ab;
};
const ka=abc(raktim is c++ teacher. he is teaching us c++ course from 20th jan);
console.log(ka);*/


//write a js function that validate is the user input string is email or not
//that counts number of vowels used in the string

const email=(em)=>{
    const ema=em.toLowerCase();
    if(ema.includes("@")){
        console.log("it is an email");
    }
};
email("k@gmail.com");

const vowels1=(a)=>{
    let count=0;
    const ab=a.toLowerCase();
    for(let i=0;i<=ab.length;i++){
        if(ab[i]=="a"||ab[i]=="e"||ab[i]=="i"||ab[i]=="o"||ab[i]=="u"){
            count++;
        }

    }
    return count;
};
const ret=vowels1("kuber");
console.log(ret);

//types of functions
//default 
//parametarized
//implicit 
//explicit
//anonymous function
//IIFE
//Closer
//inline function
//Callback function

//implicit
// const sum=(a,b)=>a+b;

// //explicit
// const sum1=(a,b)=>{
//     return a+b;
// };

// //anonymous
// (function (){
//     return "helloKk";
// });
// //inline
// const a=function(){};

// //IIFE immediately invoked functional expression

// (function (){
//     return "helloKk";
// })();
// //ex-scripts for devOps engeenirng

// //closure

// const getEnvVariables=()==>{

//};

//Callback function

const print=(name1)=>{
    return `print is ${name1}`;
};

const mainFnc=(fname1,lname1,cb)=>{
    const name1=fname1.concat(" ",lname1);
    return cb(name1);
};

const resu=mainFnc("kuber","kathayat",print);
console.log(resu);


//write a js function that checks if the password is valid or not
//validate rules are
//at eleast 1 lowercase character  //KUBER > kuber Kkuber
//1 uppercase
//1 number, 1 sumbol, length>=8
//output: true or false

// const pw=(p)=>{
//     let pp=p.toLowerCase();
//     let count=0;
//     for(let i=0;i<pp.length;i++){
        
//         if(p[i]==pp[i]){
//            count++;
            
//         }
//            else
//            {
//             count++;
            
//         }
//         if(count==2){
//             return true;
//         }
//         if(count<2&&count>2){
//             return false;
//         }

//     }
   
    
    
// };
// const pass=pw("KUBER");
// console.log(pass);

const palind=(strp)=>{
    let newS=strp;
    for(let i=strp.length-1;i<=strp;i--){
        newS+=strp[i];
    }
    if(newS===palind){
        console.log("its palindrome");
    }
    else{
        console.log("not palindrome");
        }

};
palind("kub");


const temp=(temp,type="c")=>{
    if(type=="f"){
        return (temp-32)*5/9;
    }
    else{
        return temp*(9/5)+32;
    }
};
const t1=temp(20);
console.log(t1);
const t2=temp(60,"f");
console.log(t2);

//CRUD(create,read,update,delete);

const person={
    name:"kuber kathayat",
    birthyear:2040,
    isMale:true,
    age:function(){
        return 2080-this.birthyear;
    },
    calcAge:()=>{
        return 2080-person.birthyear;
    },
};
console.log(person.name);
console.log(person.age());
console.log(person.calcAge());

//create your own objects for car,laptop,tv and doCRUD operation
// const kuber={
//     name:"kuber",
//     car:()=>{
//         color="red";
//         wheels=4;
//         nameC="Tesla";
//         return color;
//     },
//     laptop:()=>{
//         name="acer";
//         color="grey";
//     },
//     tv:()=>{
//         type="LED";
//         name="CG";
        
//     },



// };
// console.log(kuber.car());


let prod={
    name:"headphones",
    price:83.7,
    discount:"7%",
};
const checkDiscount=(obj)=>{
    return Object.hasOwn(obj,"discount")?`already discounted by ${obj.discount}`:"no discount found";
    ;
};
const res=checkDiscount(prod);
console.log(res);
const findDiscount=(obj)=>{
    delete obj.discount;
    const discountPercent=obj.price>100?10:7;
    obj.discount=`${discountPercent}%`;
    obj.price>100?(obj.discount="10%"):(obj.discount="7%");
    obj.price=obj.price-(discountPercent/100)*obj.price;
    return obj;
};
console.log(findDiscount(prod));

//ARRAY
//CRUD

const newAr=[];

//read
const cars=["bmw","tesla","toya"];
console.log({first:cars[1]});

//update
cars[0]="djbc";
console.log(cars);

//delete

delete cars[0];
console.log(cars);



const ob={
    name:"kuber",
    pw:"1234",
    email:"k@gm.com",
};
//spread operator
const {pw,...rest}=ob; //object destructuring
console.log({rest});

const kk={
    name:"dkcn",
    nn:"dcds",

};
const{name}=kk;
console.log(kk.name);

const userRole=["user","vendor"];
const sysRole=["admin","vendor"];
const checkRole=(ur,sr)=>sr.some((role)=>ur.includes(role));
    console.log(checkRole(userRole,sysRole));

    let food=['noodle','pasta','icecream'];
    let foods=['fries','ice-cream','pizza'];
    const checkFood=(f,fs)=>fs.some((role)=>f.includes(role));
    console.log(checkFood(food,foods));
    //compare two arrays and return bool result
    //some()->boolean
    //includes()->bolean

// const checkRole=(userRole,sysRole)=>{
//     const result=master.map((e1)=>{
//         // aVal && sysRole[aIndex]);
//         return sysRole.includes(e1);
    
//     //const a=console.log(userRole[0]==sysRole[0]);
//     //const b=console.log(userRole[1]==sysRole[1]);
//     //console.log(result);
//     //console.log(a,b);
// });
// return result;
// };
// console.log(checkRole(userRole,sysRole));

//const slugger=(sentence)=>sentence.toString().toLowerCase().replaceAll(/?@#$%^&)
//write a js function that creates a sum of numbers from 1 to 10
//eg [1,2,3,4,5,6,7,8,9,10]=>55


const arr=[1,2,3,4,5,6,7,8,9,10];
let sum =0;
arr.forEach((el)=>sum+=el);
console.log(sum);

//reduce mathi hai apply

const getSum=(arr)=>arr.reduce((prev,curr)=>prev+curr,0);
    const resp=getSum([1,2,3,4,5,6,7,8,9,10]);
    console.log({resp});


//write a js function that works as a pagination

const arrr=["kuber","ruchi","anima","sumit","samundra","raktim"];
const page=1; //dynaimc
const limit=2; //dynamic

//example 
//page 1=>["kuber","ruchi"]
//page 2=>["anima","sumit"]
//page 3=>["samundra","raktim"]
//page 4=>[]



//immutable js
//Map,filter,reduce,every,some

//write a js function that checks username and password in the database and check if the password match or not;return bool CSSMathValue

// const db=[{username:"kuber",password:"pass1"},
//         {username:"raktim",password:"pass2"},
//         {username:"binita",password:"pass3"},
//         {username:"santosh",password:"pass4"},
//         {username:"aditya",password:"pass5"},
// ];
// const logIn=(un,pw)=>{
//     const result=db.find((username)=>data.username===un);
//     if (!result)




//Date

const now=new Date();
const kk123=now.toISOString();
const kk124=now.toUTCString();
const kk125=now.toTimeString();
console.log(kk123,kk124);
console.log(kk125);



