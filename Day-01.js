// Qno.11 From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
let num = [1,2,3,4,5,6,7,8,9,10];
let evenDouble = [];

function evenDoubleSum  (a){
   let arr =  a.map((i)=> {
    if(i%2 == 0){
        evenDouble.push(i*2);
    }
  });
  //console.log(evenDouble);
  return evenDouble.reduce((x,y)=> x+y);
    
}
//evenDoubleSum(num);
console.log(evenDoubleSum(num));

//Q12. Create a new array whose elements is in uppercase of words present in the original array.

const my_name = ["my name is krishna..." , "hyhsf i am krishna..."];
const upperword = my_name.map((item)=> item.toUpperCase());
console.log(upperword);

//Q13. Consider the following array:
//const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
//Write JavaScript statements that will produce the following output:
//["exuberant", destruction", "present"]

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const newarr = inputWords.slice(3);
console.log(newarr);


//Q14. Starting with an array containing the numbers 1 through 10, use filter, map, and reduce to produce the following. 
//Use console.log to display the results.

//An array of odd numbers.
//An array of numbers divisible by 2 or 5.
//An array of numbers divisible by 3 and then squared those numbers.
//The sum of the following: square the numbers divisible by 5.

let numarray = [1,2,3,4,5,6,7,8,9,10];

let odd = numarray.filter((i)=> i%2 !== 0);
console.log(odd);

let multipleOfTwoorFive = numarray.filter((i)=> (i%2 == 0 || i%5 == 0) );
console.log(multipleOfTwoorFive);

let multipleOfThree = numarray.filter((i)=> i%3 == 0 );
let squareOfThree = multipleOfThree.map((i)=> i*i);
console.log(squareOfThree);

let multipleOffive = numarray.filter((i)=> i%5 == 0 );
let squareOffive = multipleOffive.map((i)=> i*i);
let sumOffive = squareOffive.reduce((x,y)=> x+y);
console.log(sumOffive);
