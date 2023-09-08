//Q21: How do you remove an element from an array in JavaScript?

//splice is used to delete element form an array.

//Q22.  Write a JavaScript program to list the properties of a JavaScript object.

var name = "fullName";
var student = {
  [name]: "David Rayy",
  sclass: "VI",
  rollno: 12
};

console.log(Object.keys(student)); //this will print keys in an array;
console.log(Object.values(student));//this will print values in an array;
//console.log(student.fullName);

for (const key in student) {
    //console.log( `${key} : ${student[key]} `);
}

//Q23  Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

var person = {};

person.age = 30;
person.class = 12; // these will add the property in an object.
//console.log(person);


delete person.age ; // this will remove the property form an object.
//console.log(person);

Object.defineProperty( person, 'firstName', {
    value : 'john',
    writable: true,
    enumerable: true,
    configurable: true,
})

//console.log(person);

console.log(Object.entries(student));   //- Returns an array of an object's own enumerable property [key, value] pairs.
console.log((Object.entries(student)).map((i)=> i));  //Doubt? 

/*Object.assign(target, ...sources) - Copies the values of all enumerable properties from one or more source objects to a target object.
Object.create(proto, [propertiesObject]) - Creates a new object with the specified prototype object and optional property descriptors.
Object.defineProperty(obj, prop, descriptor) - Defines a new property or modifies an existing property's attributes on an object.
Object.getOwnPropertyDescriptor(obj, prop) - Returns an object describing the configuration of a specific property.
Object.getOwnPropertyNames(obj) - Returns an array of all own property names (enumerable and non-enumerable) of an object.
Object.getOwnPropertySymbols(obj) - Returns an array of all own symbol properties of an object.
Object.freeze(obj) - Freezes an object, preventing new properties from being added, existing properties from being removed, and the values of existing properties from being changed. */

console.log(Object.getOwnPropertyDescriptor(student , 'rollno'));
console.log(Object.getOwnPropertyNames(student ));
console.log(Object.getOwnPropertySymbols(student ));

//Q24. Write a JavaScript program to get the length of a JavaScript object.

var student2 = {
name : "vinay",
class : "VI",
rollno : 19 
};

console.log(Object.getOwnPropertyNames(student2).length);
console.log(Object.keys(student2).length);

//Q25. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

  console.log(library.map((i)=> i.readingStatus ));
  console.log(library.map((i)=> i.author));
  console.log(library.map((i)=> i.title));

 /* Q26. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.*/

class cylinder {
    constructor( r, h ){
        this.r = r;
        this.h = h;
    }
    getvolume(){
        return Math.PI*this.r*this.r*this.h;
    }
}

const volume = new cylinder(4,10);
console.log(volume.getvolume().toFixed(4));

/*27. Write a JavaScript program that returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]

Q28. Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"*/




