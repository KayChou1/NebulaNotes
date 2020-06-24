// Use bracket or dot notation to answer the questions below.  
// Some questions will involve writing functions
// let stringArr = ["first", "second", "middle", "last"]; 
//1) console.log the first element of the 'stringArr' array

let stringArr = ["first", "second", "middle", "last"]; 
console.log(stringArr[0])

//2) console.log the last element of the 'stringArr' array

let stringArr = ["first", "second", "middle", "last"]; 
console.log(stringArr[3])

//3) add a new element to the end of the 'stringArr' array called "new last"

let stringArr = ["first", "second", "middle", "last"]; 
stringArr.push('newlast');
console.log(stringArr)


//4) console.log the last element of the 'stringArr' array. 
// note: your solution should work for both questions 2 & 4. 

let stringArr = ["first", "second", "middle", "last"]; 
console.log(stringArr[3])

//5) console.log the middle element of the 'stringArr' array
// note: extra points if you use a dynamic solution (hint: Math.floor) 
// your console should read "middle" 

let stringArr = ["first", "second", "middle", "last"];
console.log(stringArr[2])

// 6) add a new element to the beginning of the 'stringArr' array called "new first"
let stringArr = ["first", "second", "middle", "last"]; 
 stringArr.unshift("new first")
 console.log(stringArr)

//  7) console.log the 2nd index of the 'stringArr' array 

let stringArr = ["first", "second", "middle", "last"]; 
console.log(stringArr[1])

// 8) console.log the 0 index of the 'stringArr' array

let stringArr = ["first", "second", "middle", "last"]; 
console.log(stringArr[0])

// //9) console.log the length of the 'stringArr' array

let stringArr = ["first", "second", "middle", "last"]; 
console.log(stringArr.length)

//10) console.log the length of every string within the 'stringArr' array.  
//note: use only one console.log to achieve this... you will need to write a function. 

// *** had issues with this one *** //

//11) within a console.log, add the first and last index values of 'numArr' array
//ex. console.log(firstIndex + lastIndex); 

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(numArr[0]+ numArr[9])

//12) remove the last index value of the 'numArr' array 

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
numArr.splice([9])
console.log(numArr)

//13) add the number 0 to the beginning of the 'numArr' array

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numArr.unshift(0)
console.log(numArr)

//14) remove the last index value from the 'numArr' array

let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
numArr.splice([8])
console.log(numArr)

//15) console.log the middle index dynamically.  
//hint(Math.floor) 

//  *** had issues with this one *** //
// let arrOfArr = [['this', 'is', 'an', 'array'], 
//                 [1, 2, 3, 4, 5], 
//                 ['another', 'array', 'of', 'strings'],
//                 [6, 7, 8, 9, 0] ]


//16) console.log the numbers 1 & 6 from the 'arrOfArr' array. 
//note: do NOT console.log(1, 6) <- this is not the answer. 


let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]

                console.log(arrOfArr[1][0])
                console.log(arrOfArr[3][0])


// //17) console.log both 'array' strings from the 'arrOfArr' array

let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]

     console.log(arrOfArr[0] ,arrOfArr[2])    
    
//18) console.log the two arrays that contain only numbers
//note: your console should contain 2 arrays 

let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]

console.log(arrOfArr[1],arrOfArr[3])


//19) console.log the two arrays that contain only strings
//note: your console should contain 2 arrays 

let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]

console.log(arrOfArr[0],arrOfArr[2])


//20) console.log the word "strings" from the 'arrOfArr' array

let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]

console.log(arrOfArr[2][3])



//21) console.log the number 0 from the 'arrOfArr' array


let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]


                console.log(arrOfArr[3][4])


//22) console.log the word "is" from the 'arrOfArr' array

let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]

console.log(arrOfArr[0][1])

//23) console.log the number 3 from the 'arrOfArr' array

let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]

                console.log(arrOfArr[1][2])

//24) console.log only the strings that begin with a from the 'arrOfArr' array
// // *** had issues with this one *** //

// let arrOfArr = [['this', 'is', 'an', 'array'], 
//                 [1, 2, 3, 4, 5], 
//                 ['another', 'array', 'of', 'strings'],
//                 [6, 7, 8, 9, 0] ]

//  console.log('another','array','an','array')


//25) console.log the number 8 from the 'arrOfArr' array

let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]


console.log(arrOfArr[3][2])


//26) console.log the word 'of' from the 'arrOfArr' array

let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]

  console.log(arrOfArr[2][2])              

//27) console.log the 1st occurence of the word 'array' from the 'arrOfArr' array


let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]

                console.log(arrOfArr[0][3])

//28) console.log the 2nd occurence of the word 'array' from the 'arrOfArr' array


let arrOfArr = [['this', 'is', 'an', 'array'], 
                [1, 2, 3, 4, 5], 
                ['another', 'array', 'of', 'strings'],
                [6, 7, 8, 9, 0] ]

                console.log(arrOfArr[2][1])


//29) write a function that returns the first elements of EACH array from the 'arrOfArr' array
//result: (['this', 1, 'another', 6])


//30) write a function that returns the last elements of EACH array from the 'arrOfArr' array 
//result: (['array', 5, 'strings', 0])





