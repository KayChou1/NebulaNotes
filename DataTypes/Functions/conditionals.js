// Conditionals

// level 0
    // Q0.1
        // Create a function which takes in a string. 
        // If the string length is greater than 0 return 'The string exists'. 
        // Else return, 'The string doesn't have characters'.

// var str = 'Hello World'


// function getstrlength(param){
//     if (param.length > 0){ 
//         return 'The string exists'
//     } else{ 
//         'The string doesnt have characters'

//     }

// }   

// console.log(getstrlength(str))


// level 1
    // Q 1.1  
        // Create a function which takes in two numbers 
        // If number one is larger than number two return 'Number one is greater than number two.'
        // If number two is larger than number one return 'Number two is greater than number one.'

 
    
        // function getnum(param, param2){
        //     if (param < param2){ 
        //         return 'Number one is greater than number two.';
        //     } else { 
        //         return 'Number two is greater than number one.'
        //     }
        //  }   
        
        //  console.log(getnum(8))
        //  console.log(getnum(10))
         


// level 2
    // Q 2.1
        // Create a function which takes the following array: [99, 'Long Island', 'Hello World']; 
        // If the array contains the string 'Hello World' the function returns 'Hello World!'.
        // If 'Hello World doesn't exist return 'Goodnight World'.  
            // Once you think you have the solution also try and invoke the function with a different array: ['red', 'green', 'periwinkle']; 
    
// let arr =  [99, 'Long Island', 'Hello World'];
// let arr2 =  ['red', 'green', 'periwinkle']; 

// function takeinarr(arr){
//     if (arr.includes('Hello World')){ 
//         return 'Hello World!'
//     } else{ 
//         return 'Goodnight World'
//     }

// }
//     console.log(takeinarr(arr))
//     console.log(takeinarr(arr2))



    // Q 2.2
        // Create a function which takes in a car object.
        // If the object contains a key of carName with a value of 'Ferrari'
        // and the object contains a key of color with a value of 'Red'.
        // return 'Whoa, a classic Ferrari!'.
        // else return 'Meh, it's just a car'.





// level 3
    // Q 3.1
        // Create a function which takes in a car object.
        // If the object contains a key of carName with a value of 'Lamborghini'
        // and the object contains a key of color with a value of 'yellow'.
        // return 'Whoa, a classic Lamborghini!'.
        // If the carName is 'Lamborghini' and the color isn't 'yellow' then return, 'That's an interesting Lamborghini.'
        // else return 'Meh, it's just a car'.

    






// Write a function that takes in two parameters
// and checks how often an the second parameter appears in an array (the first parameter)



let arr = ["red", "blue", "red", "yellow", "red","green"];
 
function howOften(array,color){
 
 let count = 0;
 count++
 for(let i = 0; i < array.length;i++){
 // arr
 if(array.includes(color)){
 
 }
 }
}
console.log(howOften(arr,"red"))

















// These notes describe some scenarios when we are utilizing conditionals and loops together

// Write a function that checks strings within an array for a number 
// let colors = ['b1ue', 'pink', 'yellow', 'purple', 'red', 'O3range'];
// let cars = ['Porche', 'BMW', 'Toy0ta', 'O3range'];

// function redChecker(arr){
//     let colorsWithNums = [];

//     for(let i = 0; i < arr.length; i++){
//         let element = arr[i];

//         if( element.indexOf('0') > -1 
//         || element.indexOf('1') > -1 
//         || element.indexOf('2') > -1 
//         || element.indexOf('3') > -1 
//         || element.indexOf('4') > -1 
//         || element.indexOf('5') > -1 
//         || element.indexOf('6') > -1 
//         || element.indexOf('7') > -1 
//         || element.indexOf('8') > -1 
//         || element.indexOf('9') > -1 ){
//             colorsWithNums.push(element);
//         }
//     }

//     return colorsWithNums;
// }

// console.log(redChecker(colors));
// console.log(redChecker(cars));






