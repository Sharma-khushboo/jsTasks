// 10. Write a JavaScript function that takes a string with both lowercase
// and upper case letters as a parameter. It converts upper case letters to
// lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"



const stringChange =  (i) =>{
    let arr = i.replace(/([a-z])+|([A-Z])+/g, (match,chr)=>{ /* match--finds--lowercase--chr=defined, match--finds--uppercase--chr=undefined,if chr defined it convert lowercase to uppercase else, uppercase to lowercase*/ 
        return chr ? match.toUpperCase() : match.toLowerCase() ;
    });
   console.log(arr);
}
//stringChange('hello This is Khushboo');

// 11. Write a JavaScript function to convert a string into camel case.

// camel-case-the-isOk

// my my name // kebab case

const camalize = (i)=>{
   let arr = i.replace(/\W+(.)/g, (match,chr)=>{
        return chr.toUpperCase();
   });
   //console.log(arr);
    return arr.charAt(0).toLowerCase() + arr.slice(1);
};
//console.log(camalize('This is camel caase test'));

// 12. Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

const uncamelize =(i)=>{
    let result = i.replace(/([a-z])([A-Z])/g, '$1 $2'); //$1 references the text captured by the first capture group (([a-z]))  $2 references the text captured by the second capture group (([A-Z]))
    return result.toLowerCase();
};
//console.log(uncamelize('thisIsCamelCaaseTest'));

// let upper = 'thisIsCamelCaaseTest';
// let result = (match,chr)=>{
//     if (chr === 'undefined'){
//        match.toLowerCase();
//    };
//    return;
// }
//console.log(upper.replace(/([a-z])([A-Z])/g, '$1 $2'));


// 13. Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

// sanjit, 5

const repeatString = (input, count) => {
     if(typeof count == 'undefined'){
        return input
     }
     return count<1 ? console.log('enter a positive value'): new Array(count +1).join(input);
  };
let repeat = repeatString('Hey!' ,6);
//console.log(repeat);

// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));

let myString = 'We are doing some exercises.';
let mynum = 'This is a test string';
let result = myString.split(' ');
let newArr = result.push(mynum);
console.log(newArr);

