// var array1 =[78,56,232,12,8];
// var array2 =[78,56,232,12,18];
// var array3 =[78,56,232,412,228];
// var array4 =[78,56,232,12,0];
// var array5 =[1,56,232,12,8];

// Given an array, find the smallest integer.

// For example:

// [34, 15, 88, 2] returns 2
// [34, -345, -1, 100]  returns -345
// The supplied array will not be empty.

// function findSmallestInt (arr) {
//     // 1st condition :START
//     // 2st condition :END
//     // 3rd condition : change loop position
//     var placeHolder = 0;
//     for ( var index =0; index < arr.length - 1; index++ ){

//         var currentnum = arr[index]
//         var nextnum = arr[index+1]
        
//         if(nextnum >= currentnum){

//             placeHolder = currentnum;
//         }else {

//             placeHolder = nextnum;
//         }
//     }
//     return 'smallest integer: ' +placeHolder
// }    

// console.log(findSmallestInt(array1))
// console.log(findSmallestInt(array2))  
// console.log(findSmallestInt(array3)) 
// console.log(findSmallestInt(array4))
// console.log(findSmallestInt(array5))





//   Test.describe("Smallest Integer Tests", _ => {
//     Test.it("Fixed Tests", __ => {
//       var sif = new SmallestIntegerFinder();
//       Test.assertEquals(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
//       Test.assertEquals(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
//       Test.assertEquals(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
//       Test.assertEquals(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
//       Test.assertEquals(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
//     });
//   });  





// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
 
 function isDivisible(n, x, y) {
    return n%x==0 && n%y==0;
  }

  var n = 
   x =
   y =
    ( n > 0 && i > 0 && k > 13 ) 
    
Test.assertSimilar(isDivisible(3,3,4),false);
Test.assertSimilar(isDivisible(12,3,4),true);
Test.assertSimilar(isDivisible(8,3,4),false);
Test.assertSimilar(isDivisible(48,3,4),true);










