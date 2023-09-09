
/*Q28. Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"*/


//     let date =  new Date();
// console.log(date.getFullYear(),(date.getMonth()+1).toString().padStart(2,0), (date.getDate()).toString().padStart(2,0),date.getHours(),date.getMinutes(),date.getSeconds());

   let clock =  setInterval(() => {
        let date =  new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let time = `${hour}: ${minute}:${second}`;
        return console.log(time);
    }, 1000);


//console.log(clock);
