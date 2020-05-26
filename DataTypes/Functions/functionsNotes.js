// Q1:

// Only using comments write a function that gets the first item in an array

// to extract an item from an array you would need to use this ---> array . shift       
// arr.shift()

var arr = [0,1,2,3];
function getFirst(array) {
var FirstItem = array[0];
return FirstItem;
}
console.log(getFirst(arr));


// // Q2:

// // Given a string remove every other letter
// // To remove every other letter in a string, use a loop to remove every other character. --->  

var str = 'Hello World';

function rmvEvryOther(string){
    var finalString = '';

    for(var i = 0; i < string.length; i+=2){
        var currentLetter = string[i];
    
        finalString = finalString +currentLetter;

    
    }
        
    return finalString;

}

console.log(rmvEvryOther(str));





// Q3:

// Given a number minus 5 from it and divide it by 10
// To get a number that needs to be minused by 5 and divided by 10 you need to 
// you need to assign variables and make one variable x and one variable y 
// the x-variable will be 5 and the y-variable will be 10
// you then need to ( - ) subtract and then dived the 10 /  in a function that you console log at the end to give you the answer.




var FullNames = ['Patrick Francois', 'Mitsie Paisley', 'George Francais', 'Deboraht Neal']
function arrNames(FullNamearr){
    var FirstNames = [];
    for (var i = 0; i  <FirstNames.length; i--){
    console.log(FullNamearr)

}
return FullNamearr;


var spliceLast = FullNamesarr.splice (" ");
}
console.log(arrNames(LastName))


