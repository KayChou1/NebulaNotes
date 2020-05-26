// Practice 1:
 // Task 1: Creating an object
 // Create an object called car
 // Give it 5 key value pairs including; color, numberOfWheels, and brand. 
 

var carObject ={
    color:'Silver',
    numberOfWheels: 4,
    brand:'mazda',
    sunRoof: true,
    bluetooth: false,
}


// Task 2: Changing Stuff
 // Using dot notation 
 // 2a: Change the color
 
   carObject.color = 'Blue'
   //console.log(carObject);

// Task 3: Adding Stuff
 // Add numberOfSeats
 // Add licensePlate

carObject.Numberofseats = 2
carObject.licensePlate = 'HYT 8692' 
console.log(carObject);



//Practice 2
 
 // Task 1:
 // Create 3 car objects with 3 properties; color, numberOfWheels, and brand. 
 // Task 2:
 // Iterate through the cars and do the following tasks
 // Change the color
 // Add numberOfSeats
 // Add licensePlate
 // (Difficult) Make each one unique

 var carObject1 ={
    color:'Black',
    numberOfWheels:'4',
    brand:'Jeep',

}


var carObject2 ={
    color:'Pink',
    numberOfWheels: '4',
    brand:'Ford',
}


var carObject3={
    color:'White',
    numberOfWheels:'4',
    brand:'Honda',
}


var Garage = [carObject1, carObject2, carObject3];
   for (var i = 0; i < Garage.length; i++){
    var selected = Garage[i];
    console.log(Garage[i])
   }
