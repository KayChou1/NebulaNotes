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



// let arr = ["red", "blue", "red", "yellow", "red","green"];
 
// function howOften(array,color){
 
//  let count = 0;
//  count++
//  for(let i = 0; i < array.length;i++){
//  // arr
//  if(array.includes(color)){
 
//  }
//  }
// }
// console.log(howOften(arr,"red"))





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













// level 0    no loop
    // Q 0.1
        // If a variable has a length greater than 3 return "lenght greater than 3"

    // Declare a function
    // Name the function 
    // The function will check the length of the parameter
    // IF the length is greater than 3
        // return "length greater than 3" >
    // else 
        // return " less than in three" <
    
// var num = 4 

// function greater(param){
//     if(param > 3){
//     return  "length greater than 3"
//     } else {

//     }return " less than in three"
// } 


// console.log(greater(num))


    // level 1
    // Q 1.1
        // Comparing two arrays, return the longest of the two.
 
 
            // Create two arrays arr = []
            //                  arr2 = []
            // delcare a function(){}
            // set up a parameter (param)
            // write an if statement which returns the longer array (param.length)
            // write an else{} stament declareing the second parameter.
            //console.log(()) your question and invoke.



// arr1 = [1,2,3,4,5,6,7,8,99,10,11,12,13,14,15,16]
// arr2 = [2,4,6,8,10,12,14,16]


// function compare(param, param2){
//     if(param.length > param2.length){
//         return param
//     } else{
//         return param2
//     }


// }

// console.log(compare(arr1, arr2))

// level 2
    // Q2.1
        // In an array of strings, check for the letter j
            // return an array of strings that all contain the letter j


            //Create an array of strings that looks for the letter J
            // DECALRE A FUNCTION
            // Name the function
            // Set up a parameter
            //write an If statement
            // Return array of strings that has the letter J
            // //console.log(()) your question and invoke.


// arr = ['Judgmental','journalist', 'Sky','JUICE', 'Jubilation' ,'Rock' ]

// function arrofstrings(param){
//     for(var i = 0; i < param.length; i++){ 
//         if(param[i].indexOf('J') === -1){
//             param.splice(i,1)
//         }
//     } 
    
//     return param
// }

// console.log(arrofstrings(arr))




// function letterj(params) {
//     let collect = []
//     for (i=0; i < params.length; i++){
//         if(params[i].indexOf('J') > -1){
//             collect.push(params[i])
//         } else if (params[i].indexOf('j') > -1){
//             collect.push(params[i])
//         }
            
//     }
//     return collect
// }
// function letterj(params) {
//     let collect = []
//     for (i=0; i < params.length; i++){
//         if(params[i].indexOf('J') > -1 || params[i].indexOf('j') > -1){
//             collect.push(params[i])
        
//         }
            
//     }
//     return collect
// }
// function letterj(params) {
//     let collect = []
 
//     for (i=0; i < params.length; i++){
//         if(params[i].toUpperCase().indexOf('J') > -1 ){
//             collect.push(params[i])
        
//         }
            
//     }
//     return collect
// }
// console.log(letterj(Jays,thisyear));






// level 3:
    // Q3.1
        // Check an array of strings for the longest string 

     








// loops or conditionals (level 0-2: focus on picking ONE or the other)

// level 0
// loop warmup
    // create a function which iterates over an array of strings 
    // the function returns a new array of captalized strings

//

// let arr = ['hey','how','are','you','today'];
  
    
// function Allcaps(param){
//     let arr2 = [];
    
//     for(i = 0; i < param.length; i++){
//         let element = param[i]; 
//         arr2.push(element.toUpperCase());
//     }
    
//     return arr2;
// }

// console.log(Allcaps(arr));


    // conditional warmup
    // create a function which takes in a number 
    // the function returns 'even' if the number is even and 'odd' if its odd




// function getnum(param){
//     if (false){
//         return "even";
//     }else{
//         return "odd"
//     }
    
// }

// console.log(getnum(4000002));
// console.log(getnum(7));
// console.log(getnum(39));



// level 1
    
    
        // Q1:
        // create a function which takes in a string 
        // the function returns even if the string has an even amount of elements
        // otherwise it returns odd


      
    //   let str = "Hey how are you";  

    //   function getnum(param){
    //     if (param.length % 2 === 0){
    //         return "even";
    //     }else{
    //         return "odd"
    //     }
        
    // }
    
    // console.log(getnum(str));

  
  
        
        // Q2: 
        // create a function which takes in an array
        // the function returns a new array with every other element in the array






        
        
        
        // Q3:
        // create a function which takes in an array 
        // the function returns the first element with the character 'i'

        // let name = ['hey','now','how','sink','tower'];

        // function firstEl(arr){
        //     let iElement = [];
        
        //     for(let i = 0; i <arr.length; i++){
        //         let element = arr[i];
                
        //         if(element.indexOf('i') > -1){
        //             iElement.push(element);
        //         }

        //     }

        //         return iElement;
        // }

            
        // console.log(firstEl(name));

    
        // level 2:
        // Q1:
        // create a function which takes in two numbers
        // it returns 'That was divisible!' if the first number is divisble by the second

        // let numbers = [16, 4];

        // function divNumber(param){
        //     if(param[0] % param[1] === 0){
        //             return 'that was cool'
        //     }else {
        //         return"that was fun"
        //     }
        // }
    
        // console.log(divNumber(numbers))
    
    
        // Q2:
        // create a function which takes in an array and a string
        // it returns the index if the string exists within the array
        // it returns 'not here' if the array doesn't contain the string


    //     let arrOfStr = ['Blue', 'Yellow', 'Pink'];
 
    //     function doesExist(arrParam, strParam){
    //         if( arrParam.indexOf(strParam) > -1 ){
    //             return arrParam.indexOf(strParam);
    //         } else {
    //             return 'not here';
    //     }
        
    // }

    // console.log(doesExist(arrOfStr, 'Pink')); // 2
    // console.log(doesExist(arrOfStr, 'Blue')); // 0
    // console.log(doesExist(arrOfStr, 'White'));// 'not here'




        // level 3:
        // Q1:
        // create a function which searches a string for any elements within an array
        // the function returns an array of elements that do exist
        // for example:
            // input ['abc', 'def', 'llo', ' ', 'o'] & "Hello World" returns ['llo', ' ', 'o']

        
        
        
            // let arr1 = ['abc', 'def', 'llo', 'o', true, 3];
            // let arr2 = ['123', '789', 'llo', 'o', true, 3];
            
            // function simElement(param1, param2){
            // let cntr = [];
            
            // for(let i = 0; i < param1.length; i++){
            // let element = param1[i];
            
            // if( param2.indexOf(element) > -1 ){
            // cntr.push(param1[i]);
            // }
            // }
            
            // return cntr;
            // }
            
            // console.log(simElement(arr1, arr2));
        
        
        
        // Q2: 
        // create a function which takes in two arrays
        // the function will return a new array of any common elements






        // let arr = ['abc', 'def', 'llo', ' ', 'o'];
        // let str = "Hello World";
        
        // function simElement(paramArr, paramStr){
        // let cntr = [];
        
        // for(let i = 0; i < paramArr.length; i++){
        // let element = paramArr[i];
        
        // if( paramStr.indexOf(element) > -1 ){
        // cntr.push(paramArr[i]);
        // }
        // }
        
        // return cntr;
        // }
        
        // console.log(simElement(arr, str));


     // declaring a function called domath and passing through our string param
    // Assining a  var called nums  
    // The variable nums is array of strings
    //  











    //console.log(2 + 3);
// console.log(nums[0]) // nums = 2
 //console.log(nums[1]) // nums = 3 
// console.log(nums[0] + nums[1]);
// console.log('Hello' + ' World')
// console.log(parseInt(nums[1]))
//let nums = ['2','3'];


//parseInt()





// function add(strParam){
//     let nums = strParam.split('+');
//     let sum = 0;
//     for(i = 0; i < nums.length ; i++){
//         sum = sum + parseInt(nums[i]); 
//     }
//     return sum;
// }

// console.log(add('2+3')) //returns 5



// function subtract(strParam){
//     let nums = strParam.split('-')
   
//     let sub = parseInt(nums[0]) - parseInt(nums[1]);
//     return sub

// }


// console.log(subtract('5-3')) //returns 2




// function multiply(strParam){
//     let nums = strParam.split('*')

//     let sum = parseInt(nums[0]) * parseInt(nums[1]);
//     return sum
    
// }

// console.log(multiply('2*3')) //returns 6




// function divide(strParam){
//     let nums = strParam.split('/')
    
//     let quo = parseInt(nums[0]) / parseInt(nums[1]);
//     return quo

// }


// console.log(divide('6/3')) //returns 2



