// Q1: Create a loop that greets us 5 times! 

//Over here i am telling the CLI that we want something to come up 5 times.
for (var index = 0; index <5; index++){ 
//Over here i am telling the CLI  that the variable is Hi!
console.log('Hi!'); 
} 


// Q2: Create a loop which tells us what loop number it is on 
              
// Over here i am telling the CLI we need the word loop count 5 times numbered 1-5 
for (var i = 0; i < 5; i++) { 
// Over here i am telling the CLI i need the word Loop Count to be numbered (ex: loop count 1)
console.log(`Loop Count ${i + 1}`);                                          //(loop count 2) etc to 5
}                 




// Q3: Loop over the following array and console.log the current index value 

      // Over here i am telling the CLI i need these names to pop up one after the other stoping with poseidon
       var arr = ['Zeus', 'Hades', 'Hermies', 'Poseidon']; 
       //Over here i am telling the CLI that we need the names to be in order starting with 1 as Zeus ending in 4 as poseidon
        for (var index = 0; index < arr.length; index++){ 
        //over here i am telling the CLI to give me whats in the array as well as using index to get the certain number attached to the name to get our answer.
        console.log(arr[index]); 
    } 







































