//object

const person={
    name:"kuber",
    password:"1234",
    createdAt:"2010",
    role:"admin",

}

const{password,role,...rest}=person;
console.log({rest});


const kuber={
name:"kuber",
isMale:"true",
age:function(){

    return"kk";
}
};


//array

const teacher=["kuber","adi","santosh"];
console.log({teacher});

//read
console.log(teacher[0]);

//update
 teacher[0]="kk sir";
 console.log({teacher});

 //delete

teacher.shift();
console.log({teacher});

//method(string,object,array,data)

//array methos
//length,shift,unshift,pop,push,reduce,map,filter,some,every,split

//write a js function that finds the largest sentence in the array

const countries=["nepal","india","japan","ireland","united kingdom"];
const largestCountries=(countries)=>countries.sort((a,b)=>a.length-b.length).pop();

const result=largestCountries(countries);
console.log({result});

const userRole=['user','vendor'];
 const sysRole=['admin','vendor'];
// //result true
const checkRole=(a,b)=>b.some((role)=>a.includes(role));
const res=checkRole(userRole,sysRole)
console.log({res});

//divisible by 5

const numbers=[1,4,5,8];
const div=(numbers)=>numbers.filter((number)=>number%5===0);
const results=div(numbers);
console.log({results});


//return decimal value

const numeral=[1,2,3];
const decim=(numbers)=>
   numbers.map((numbers)=>String(numbers).concat(".00"));
   const res4=decim(numbers);
   console.log({res4});

//returns [1.00,2.00.3.00]


// const data=[1,2,3,4,5,6,7,8,9,10];
// const page=1;
// const limit=2;
// const pagin=(data)=>dhbh;
// const res2=pagin(data);
// console.log(res2);


//write a js function that finds the bird name starting with e character

const birds=["Parrots","Eagles","Emus","Caracaras","egrets"];

//result:['Eagles','Emus','egrets']


