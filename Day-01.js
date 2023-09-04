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
