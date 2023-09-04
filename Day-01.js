// +++++++++++++++ 01 ++++++++++++++++++++++++++++

// 01. arr = ['sdfd', 'tr', '23'] -- insert "hi" on secend positin
let arr = ['sdfd', 'tr', '23'];
arr.splice(1,0,'hi');
console.log(arr);

// 02. friends = ["don", "srk", "salman"] -- check if srk is present if present "I am SrK"

friends = ["don", "srk", "salman"];
if( friends.filter((item)=> item == "srk")){
    console.log("I am Srk");
}

// 03. arr = [12323, 2343, 974394, 34343, 23434] find the greatest and smallest element

let arrr = [12323, 2343, 974394, 34343, 23434];
let max = Math.max(...arrr);
let min = Math.min(...arrr);
//console.log(min);
//console.log(max);


//Q4. Define a function called cleanNames that accepts an array of strings containing additional 
//space characters at the beginning and end. The cleanNames() function should use the array map 
//method to return a new array full of trimmed names. For example:

function cleanNames (){
    let car = [ " hundai ", " alto ", " maruti ", "  duster "];
    console.log(car.map((item)=> item.trim()));
    return;
}
//cleanNames();


// Task 5
// create an object with details like firstName, lastName, Mobile, address,
//  friends (array), secretDetails (objects), getMySecret (functions)

let user = {
    firstName : 'khushboo',
    lastName : 'sharma',
    Mobile : 03039454358,
    address : 'bahadurgarh haryana',
    friends : [ 'shweta' , 'krishna', 'nighowl', ],
    secretDetails :{
        project: ' not a single project is ready',
        frontend: ' in progress',
    },
     getMySecret : function (){
        return this.secretDetails;
    }
}
//console.log( user.getMySecret().frontend);


// Task 6
// String - paragraph (200 words) - keyword ( 5 times);
// create a function which takes keyword as args 
// countRepeat(keyword) - return x times count 

let para = "Lorem Ipsum khushboo is simply dummy text of khushboo the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown khushboo printer took a galley of type and scrambled khushboo it to make a type specimen book. It has survived not khushboo only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets khushboo containing Lorem Ipsum passages, khushboo and more recently with desktop publishing software khushboo like Aldus PageMaker including versions of khushboo Lorem Ipsum.";



function keyword ( a){
    let StringTo_array = a.split(' ');

    let khushbooOccrance = StringTo_array.filter( (item) => item == 'khushboo' );
    return khushbooOccrance ;
}

const result = keyword(para);
//console.log(result);



// Q7. How to remove duplicate elements from JavaScript Array ?

 let arrDup = ["apple", "mango", "apple", "orange", "mango", "mango"];
 //let ori =   new Set(arrDup);
 //console.log(ori);

let com = []
for (const i of arrDup) {
    if( !com.includes(i)){
        com.push(i);
    } 
}
//console.log(com);


// Q8. Write a function that converts an array of values from miles to kilometres using the map method. 
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.


let miles = [1600, 3200, 2000, 6400, 20 ];
//console.log(miles.map((item)=> item* 1.60934 ));

function unitconsertion (a){
    let b = (a.map((item)=> item* 1.60934 ));
    let totalDistanceInKilometers = b.reduce((x,y)=> x+y);
    return totalDistanceInKilometers ;
    
}

//const total = unitconsertion(miles);
//console.log(`${total} kilometers`);

//Q9. Square and sum the array elements using the arrow function and then find the average of the array.

let num = [1,2,3,4,5,6,7,8];

let arrow = ()=>{
    let square = num.map((item)=> item* item);
    let sum = square.reduce((x,y)=> x+y);
    let average = sum/num.length;
    return average;
}

console.log(arrow());

//Q10. Create a new array using the map function whose each element is equal to the original element plus 4.

let num4 = num.map((item)=> item+4);
//console.log(num4);


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

/*Q15. Consider the following array:
let nums = [11, 22, 33, 46, 75, 86, 97, 98];

Use filter then map functions to filter even numbers then square them. 
Assign the result to a variable named squaredEvenNums and display it. The output should be:

squaredEvenNums: [484, 2116, 7396, 9604]
Use the reduce function to calculate the sum of nums array. The output should be:

Sum of array elements: 468*/
let nums = [11, 22, 33, 46, 75, 86, 97, 98];

let even = nums.filter((item)=> item%2 == 0);
let evensquare = even.map((i)=> i*i);
let evensum = evensquare.reduce((x,y)=> x+y);
console.log(evensum);

//Q16. Write a function Myfunc that takes in an array of numbers and multiply each of the elements by 2.

function Myfunc (a){
    let two = a.map((item)=> item*2);
    return two;
}
console.log( Myfunc(numarray));


