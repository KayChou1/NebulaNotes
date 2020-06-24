// higher order function practice
// Map

// level 0: using .map() do the following
    // double the values of any array of numbers

    let numArr = [1,2,3,4,5,6,7];

    let doubleValue = numArr.map( ele => ele * 2)

    console.log(doubleValue)


// level 1: using .map() do the following
    // grab the first letter of an array of strings

    // let strArr = ['hello','world','!'];

    // let getFirst = strArr.map(ele => ele[0])

    // console.log(getFirst)

// console.log(strArr[1][0])
// console.log(strArr[0][0])
// console.log(strArr[2][0])


// grab the first element of an array of arrays


//  let arrOfArr = [['blue','green'],['pink','gold'],['yellow','black']]

//  let getFirst = arrOfArr.map(ele => ele[0])

//  console.log(getFirst)



// level 2: using .map() do the following
    
// grab the last letter of an array of strings

    let arrOfStr = ['hello','world','whats','goin','on','today','!'];

    let getLast = arrOfStr.map(ele => ele[4])

    console.log(arrOfStr.length -1)
    console.log(arrOfStr[arrOfStr.length -1])
    console.log(arrOfStr[6])




    // grab the last letter of an array of arrays





// level 3: using .map() do the following
    // create a new array of fullNames from an array of objects where ONE object looks similar to this:{first: 'Nic', last: 'Leask'};
    // Input: [{first: 'Ro', last: 'Pili'}, {first: 'Nic', last: 'Leask'}];
    // Output: ['Ro Pili', 'Nic Leask'];

// level 4: using .map() do the following
    // create a new array of objects from an array of objects where ONE object looks similar to this:{first: 'Nic', last: 'Leask'};
    // Input:  [{first: 'Ro', last: 'Pili'}, {first: 'Nic', last: 'Leask'}];
    // Output: [{first: 'Ro', last: 'Pili', fullName: 'Ro Pili', initials: 'RP'}, {first: 'Nic', last: 'Leask', fullName: 'Nic Leask', initials: 'NL'}];