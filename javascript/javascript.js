console.log("hello world");
//  1--> variable can be declare by using var,let,const
let age=8;
let drink= age<=8?"milk":"coffee"
console.log(drink);

// guessing game
// missing number is 19 
// if you guess 19 then your guess is right 
// if you guess 17 then you guess too low
// if you guess 20 then your guess is too high

//  let winning_number=19;
//  let userguess= +prompt("guess a number");
  
//  2----> console.log(typeof userguess, userguess);
   
//  if( winning_number == userguess){
//     console.log("guess is right");
//  }
//  else{
//     if(winning_number >= userguess){
//         console.log("guesses too low number");
//     }
//     else{
//         console.low("guessed number is too high");
//     }
//  }
 
let i=0;
console.log(typeof i , i);
while(i<10){
    console.log(i);
    i++;
}

// 3----> types of loops in java Script 1. for loop 2. for in loop 3. for of loop 4. while 5. do while
// but in java we generally use for loop and for of loop we are avoid to use for in loop in java Script


//4-----> clone of an array 
// let array1=["item1", "item2" , "item3"];
// let array2=["item3" , "item4"];
// array2=[... array1,... array2];
// console.log(array2);
// array2=array1.slice(0);
// console.log(array2);
// array2=array1.concat();
// console.log(array2);

// let fruits=["apple" , "banana" , "orange" , "grapes"];
// for(let i=0 ; i<fruits.length;i++){
//     console.log(fruits[i].toUpperCase());
// }
// we use cons variable during the declaration of an array in java script
//  destructuring of an array

// const myarray=["v1", "v2" ,"v3" , "v4"];
// let [var1 , var2,...myvar3]= myarray;
// console.log(var1);
// console.log(var2);
// console.log(myvar3);

// creating an object 
// in object we  use key value pair
// we can access the element of the object by using dot operator and by using [] 

// 5-------->>>>>difference b/w dot operator and the [] 
// if we want to property of any object with single word then we use dot operator like age ex: person.age ;
// if we want to access the property with more then word then we use the []for access the property of the Object
// for person hobbies  ex console.log(person["person hobbies"]);  
const person={
    name:"shivani", 
    age:22, 
  "person hobbies":["to play badminton" ," studying"]
}
console.log(person); 
console.log(person["person hobbies"]);  
