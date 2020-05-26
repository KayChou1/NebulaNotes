function makeNegative(n){
   if (n > 0 ){
    return -n
   } else{
     return n  
   }
   return n;
   
};

// console.log(makeNegative(1)); // return -1
// console.log(makeNegative(-5)); // return -5
//console.log(makeNegative(0)); // return 0
//console.log(makeNegative(0.12)); // return -0.12


var str = ''
var thing = {}
var arr = []


function myfunct(){
    return 'hello world'
}
console.log(myfunct())



function myfunct(param){
    return param
}
console.log(myfunct('hello world'));
console.log(myfunct('goodbye world'));


// Function Array Maniplulation examples:
//   var arr = ['Desmond', 'Mitsie', 'Kaya', 'Geo'];
//console.log(arr)
//arr.push('Debbie');// [ 'Desmond', 'Mitsie', 'Kaya', 'Geo', 'Debbie' ]
//  console.log(arr)
//  function Apple(){
//     arr.push('Debbie')
//      return 
//  }
//     Apple()
//     console.log(arr)



//Question 1

//  function opposite(number) {
//      return -number
//  }  
//     console.log(opposite(-1))
//     console.log(opposite(21))  
//     console.log(opposite(0))
//     console.log(opposite(3))

// //Question 2
// function makeNegative(n){
//    if (n > 0 ){
//     return -n
//     } else{      return n  
//     }
//     return n;


// console.log(makeNegative(1)); 
// console.log(makeNegative(-5));
// console.log(makeNegative(0)); 
// console.log(makeNegative(0.12)); 



//Question 3

// function bluesky(blue) {
//  if (Blue) {
//  return 'Yes';
//  } else{ 
//    return'No';
// }
// }

// Iterate over the array & count each TRUE sheep.
// More specifically if a sheep is TRUE add to the count.

// function countSheeps(arrayOfSheep) {
//     var num = 0;
//     for (var i = 0; i < arrayOfSheep.length; i++) {
//         var current = arrayOfSheep[i]
//         if (current === true){
//             num += 1;
//         }
//     }

//     return num;
// }

// var array1 = [true,  true,  true,  false,true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
// var array2 = [true,  true,  true,  false,true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, false, false];

// console.log(countSheeps(array1))
// console.log(countSheeps(array2))

//console.log('Hello From Functions')

// Generic Function Below

// function testfunk(){
//     var str ='Hello World'
//     var splitstr = str.split(' ').join('-')
//     return(splitstr);
// }
// console.log(testfunk());


// Function with one paramiter below (a)

// function testfunk(a){
//     var splitstr = a.split(' ').join('-')
//     return(splitstr);
// } 
// // The following lines invoke testfunk with unique areguments ('Hello world') and ('Hello Kaya')
                                                             
// console.log(testfunk('hello world'));
// console.log(testfunk('hello kaya'));



















// Q1:

// Write a function that takes in a string and turns it into an array based on where it has dashes

// Input: var string = "Pizza-Pizza-Give-Me-All-The-Pizza!"

// Output: ["Pizza","Pizza","Give","Me","All","The","Pizza!"]

// Declare a function that takes in a string and converts it to an array

// var pizzaStr =["Pizza","Pizza","Give","Me","All","The","Pizza!"]

// // The function will iterate through the array and remove and remove the dash



// console.log(stringtoarray(pizzaStr));



//Q2:

// Write a function that takes in an array of strings and joins it all together without spaces

// Input: var arr = ["I","Can","Not","Wait","For", "Warm", "Weather!"]

// Output: "ICanNotWaitForWarmWeather!"



// Q3:

// Write a function that takes in a string and removes all of its dashes

// Input: var str = "I-Love-To-Code!"

// Output: "ILoveToCode!"

// Hint: this is the previous two questions combined

//________________________________________________________________________________________________________________

// Level 0:

    // Write out 3 functions which don’t require an argument or parameter. 
    //     They return:
    //         Hello World!
    //         Good Morning World!
    //         Goodnight World!

//          var str = 'Hello World!'

//          function greeting(param){
//              return param;
//          }
//          console.log(greeting(str));


//          var str = 'Good Morning World!'

//          function greeting(param){
//              return param;
//          }
//          console.log(greeting(str));

         
//          var str = 'Goodnight World!'

//          function greeting(param){
//              return param;
//          }
//          console.log(greeting(str));

       
//     // // Level 1:

//     // // Write out 3 functions which take in a number and perform a mathematical operation and return the result
//     //     // Add
//     //     // Multiply
//     //     // Divide
         
//         function addNumbers(x, y){
//             return (x + y);
//         }
//            console.log(addNumbers(6, 4))



//         function Multiplynum(x, y){
//             return (x * y);
//         }
//            console.log(Multiplynum(4, 4))


//         function Dividenum(x, y){
//             return (x / y);
//         }
//             console.log(Dividenum(4,2))

        
// // Write out 3 functions which take in a string and return 
// //         The first character 
// //         The last character
// //         The middle character

//         var str = 'HEY-YOU!';

//         function getfirstCharacter(strparam){
//             var start = 0;
//             var end = 1;
//             var itemOne = strparam.slice(start, end);
//             return itemOne;
//         }

//         console.log(getfirstCharacter(str));

      
//         var str = 'HEY-YOU!';

//         function getlastCharacter(strparam){
//             var start = strparam.length - 1;
//             var end = strparam.length;
//             var itemOne = strparam.slice(start, end);
//             return itemOne;
//         }

//         console.log(getlastCharacter(str));

        
//         var str = 'HEY-YOU!';

//         function getmiddleCharacter(strparam){
//             var start = strparam.length ;
//             var end = strparam.length;
//             var itemOne = str.slice(start, end);
//             return itemOne;
//         }

//         console.log(getmiddleCharacter(str));

    
//     // Create 3 functions which take in an array and return 
//     //     The first element 
//     //     The last element 
//     //     The middle element

//         var arr = ['HELLO', 'WORLD'];
//         var arr1 = ['GOODMORNING' ,'WORLD']
//         var arr2 = ['GOODBYE','WORLD']

//         function getfirstelement(arrparam){
//             var first = arrparam[0]
    
//             return first
                
//         }





// //         console.log(getfirstelement(arr));
// //         console.log(getfirstelement(arr1));
// //         console.log(getfirstelement(arr2));
        
// //         var arr = ['HELLO MIKE'];

// //         function getlastelement(array){
// //             var itemOne = array.shift();
// //             return 'D';
// //         }

// //         console.log(getlastelement(arr));


// //         var arr = ['HELLO WORLD'];

// //         function getmiddleelement(array){
// //             var itemOne = array.shift();
// //             return 'O';
// //         }

// //         console.log(getmiddleelement(arr));






// // level 0
// // create and invoke a "hello world" function that will always say hello world

//     var str = 'hello world'

//     function greet(strparam){
//         return strparam;
//     }
//      console.log(greet(str));


//      function sayHello(name){
 
//         console.log("Hello " + name + "!");
//         }
        
//         sayHello('Nic');

    
// // // level 1 
// // // Q1:
// // // create and invoke a function that takes in a name and produces hello + givenName + !
// //  // input: 'Kaya'
// // // output: Heyy Kaya



var str = "Goodbye"
var greet = "Hello"
function greet(strparam){
    return string 
}



console.log(geeat(str))







// // Q2: 
//  // create afunction that takes in one number and doubles it

// var num = 10
// function doublenum(param){
//     return param * 2
// }
//  console.log(doublenum(num))

// // Q3:
// // create a function that takes in a number and triples it
    








    
 // level 2
// Q1: 
// create a function that takes in a number and tells us if it is divisible by 2
 // requires an if statement





 // Q2: 
 // create and invoke a function that takes in a first and last name and produces hello + firstName
    
   
    
    
    






    
// level 3:
 // Q1: 
 // create a function that takes in a number and tells us if it is divisible by both 2 & 3
  // requires an if statement

    
        
    // level 4:
 // Q1: 
 // create a function that returns an array of all the smaller positive numbers that are divisible by either 2 or 3 
 // requires an if statement
    
    
    

















 // level 0
 // Q0.1 create a function that always greets us ( Hello World Function )
 // example:
 // no input
 // output: "Hello!"
 


// function greet(param){
//     return "Hello!"
// }


// console.log(greet());


// // level 1:
//  // Q1.1 
//  // Create a function that takes in a string and returns the second character
 

// function secondchar(param){
//   return param.slice(1,2)
// }

// console.log(secondchar('helloworld'))


// //  Q1.2
// //  Create a function that takes in an array and returns the second element
 

// var arr = ['Hello World', 'Good Morning' , 'How Are You']

// function getsecond(param){
//     return param.slice(1,2)
// }

// console.log(getsecond(arr))

 


// // Q1.3
//  // Create a function that takes in an array of birds and adds three birds
//  // the birds get added one to the front, one to the back, and one at the second index
 
//  // let initialBirds = ['Bald Eagle', 'Robin', 'Blue Jay'];
//  // let bird1 = 'Quaker';
//  // let bird2 = 'Cockatoo';
//  // let bird3 = 'Kingfisher';
 

// var arrofbirds =  ['Bald Eagle', 'Robin', 'Blue Jay'];
// var bird1 = 'Quaker';
// var bird2 = 'Cockatoo';
// var bird3 = 'Kingfisher';

// function Addthree(param){
//     // Adding a bird to the front of the array.
//     param.unshift(bird1) 
//     // Add a bird to the end of the array.
//     param.push(bird2)
//     // Add a bird to the second index.
//     param.splice(1,0, bird3)

//     // Return our array after adding all three birds.
//     return param
//  }
 
//  console.log(Addthree(arrofbirds))

 
 
//  // Q1.4
//  // Create a function that takes in a string and gives us the first three letters
 







//  // Q1.5
//  // Create a function that takes in an array and combines the elements into a string
 








// // level 2:
//  // Q2.1
//  // Create a function that takes in a string and returns the last character
 
//  // Q2.2
//  // Create a function that takes in an array and returns the last element
 
// // level 3:
//  // Q3.1
//  // Create a function that takes in a string and returns the central character


 

// // Q3.1
//  // Create a function that takes in an array and returns the central element
//  var colors = ['blue','purple','pink','silver','gold','orange','white']

//  function colorpicker(paramarr){
//     var middlecolor = paramarr.slice(paramarr.length / 2,(paramarr.length / 2)+1);
//     return middlecolor
//  }
// console.log(colorpicker(colors))




// level 4:
 // Create a function that searches for all numbers inside strings in a given array and removes them 
 // input = ['B12', 'RTX3000', 'Hello World', 'H3110 W041D']
 // output = ['B', 'RTX', 'Hello World', 'HWD']








// Create a function which takes in an array which only contains strings. 
// The function will iterate over a given array and return the last character of every element. 
    // input: let seasons = ['Winter', 'Autumn', 'Spring', 'Summer'];
    // output: ['r', 'n', 'g', 'r'];

    
    // var arr = ['Winter', 'Autumn', 'Spring', 'Summer'];         // create our variable array.
    
    // function returnlastchar(arrparam){                        // create our function and its given parameter.
    //     var returnlast = [];                                  // setting up a new variable for the last letters.
    //     for(var i = 0; i > arrparam.length; i++){            // create a loop to iterate to each element from i,0 to i.length.
    //         var currentarr = arrparam[i];
    //         let newArr = arrparam.slice(-1)                 // looking at each element by iself
    //                                                         // grab the last letter 
    //                                                         // fill the new array with each last letter.

 
    //     }

    // }   
     
    //     console.log(returnlastchar(arrparam))




    // Create a function which takes in an array which only contains strings. 
// The function will iterate over a given array and return the last character of every element. One element will be an empty string.












