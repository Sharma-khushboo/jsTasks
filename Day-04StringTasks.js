/*33. Write a JavaScript function to parameterize a string.
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"*/

let mystring = 'my name is khushboo sharma';

const parameterize = (i)=>{
   let arr = i.replace(/ /g, "-");
   console.log(arr);
}

console.log(parameterize(mystring));

/*
Q34. Write a JavaScript function to capitalize the first letter of a string.
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"  */
const firstLetter = (i)=>{
    let arr = i.split(' ');
    console.log(arr);
    let arr2 = arr[0].slice(0,1).toUpperCase();
    let arr3 = arr[0].slice(1);
    let arr4 = arr.slice(1).toString().replace(/,/g,' ');
    console.log(`${arr2}${arr3} ${arr4}`);
}
console.log(firstLetter(mystring));

// Q35. Write a JavaScript function to capitalize the all first letter of a word in a string.
const capitalize = (i)=>{
   let arr = i.split(' ');
   //console.log(arr);
   let arr2 = arr.map((i)=> `${i[0].toUpperCase()}${i.slice(1)}`);
   return console.log(arr2.toString().replace(/,/g , ' '));
}
const capitalizeString = capitalize(mystring);
console.log(capitalizeString);
