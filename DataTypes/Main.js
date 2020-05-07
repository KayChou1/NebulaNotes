//this is my first github practice
//console.log() is used to print (AKA log) information to the command Line Interface (CLI)
    //console.log("Hello World!")

//var x = 2;
//console.log(1+x);  
// var name =  'kaya'
// console.log('Hello, I am '+name)


//JavaScript Data types
//1.Strings
//A set of characters surrounded by quotes "", '',``
// var name = "Kaya";
// console.log("My name is Kaya") 
// var singleQuote = 'single quoted';
// var doubleQuote = "double quoted";
// var backticks = `backticks`;
//back ticks can be used for more complicated stuff 
// var multiplePeople = `Desmond
// Geo 
// Nat 
// `
// console.log(`My name is ${name} )
// console.log(multiplePeople)

//Wecan reference a single letter by its index
//var str = "Hi";
//console.log(str[0]); //H
//hi
//012 <- indices


//str[0] = "h"; // wont work
//console.log(str)
//strings are imutable, which means that they cannot be chnanged ( the varible can)
//var newStr = "f" + str [1]

//var alphabet = `abcdefghijklmnopqrstuvwxyz` ;
//console.log(alphabet[10] + alphabet[0] + alphabet[24] + alphabet[0] )

//a b c d e f g h i j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
//0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

//getting string length and last character

//var str = "Hello"; // length of 5, the o is at index 4
//Hello <- 5 characters = length of 5
//var lengthOfStr = str.length;
//var lastStrChar = str[lengthOfStr - 1];
//console.log(lastStrChar);

//var fullName = 'Kaya;Chouprouta'
//var divider = fullName.indexOf(';');
//var first = fullName.slice(0, divider)
//var last = fullName.slice(divider +1, fullName.length)
//console.log(first);
//console.log(last);


//var fullName = 'Kaya Chouprouta'
//var divider = fullName.indexOf(';'); 
//console.log(divider);


//var meme = 'tHis is a MEme'
//var smallMeme = meme.toLowerCase();
//var bigMeme = meme.toUpperCase();

//console.log(meme)
//console.log(smallMeme)
//console.log(bigMeme);



//var fullName = 'Kaya Chouprouta';
//var divider = fullName.indexOf(' ');
///var fixedFirst = 'K' + fullName.slice(1, divider);
//var fixedLast = 'C' + fullName.slice(divider + 2, fullName.length);
//var fixedName = fixedFirst + ' ' + fixedLast;
//console.log(fixedName);






//var fullText1 = ('Computer:' + 'MAN67584758' + 'Human;'+ 'Manchester Piccadilly' )
//var fullText2 = ('Computer:' + 'GNF5767465' + 'Human;'+ 'Greenfield')
//var fullText3 = ('Computer:' + 'LIV5hg65hd737' + 'Human;'+ 'Liverpool Lime Street' )
//var fullText4 = ('Computer:' + 'SYB4f' + 'Human;'+ 'Stalybridge')
//var fullText5 = ('Computer:' + 'HUD5767ghtyfyr45' + 'Human;'+ 'Huudersfeild')

//console.log (fullText1)
//console.log (fullText2)
//console.log (fullText3)
//console.log (fullText4)
//console.log (fullText5)



var fullText1 = 'MAN67584758 : Manchester Piccadilly';
var bacon = fullText1.indexOf(' : ');
var bacon0 = fullText1.slice(0,bacon);
var baconplane0 = fullText1.slice(bacon+1, fullText1.length);
console.log('Computer: '+bacon0 +' Huamn:'+baconplane0);

var fullText2 = 'GNF5767456 : Greenfeild';
var bacon0 = fullText2.indexOf(' : ');
var bacon1 = fullText2.slice(0,bacon0);
var baconplane1 = fullText2.slice(bacon0+1,fullText2.length);
console.log('Computer: '+bacon1 +'Human:'+baconplane1);

var fullText3 = 'LIV5hg65hd7374 : Liverpool Lime Street';
var bacon1 = fullText3.indexOf(' : ');
var bacon2 = fullText3.slice(0,bacon1);
var baconplane2 = fullText3.slice(bacon1+1, fullText3.length);
console.log('Computer:'+bacon2 + ' Human:' +baconplane2)

var fullText4 = 'SYB4f : Stalybridge';
var bacon2 = fullText4.indexOf(' : ');
var bacon3 = fullText4.slice(0,bacon2);
var baconplane3 = fullText4.slice(bacon2+1, fullText4.length);
console.log('Computer:'+bacon3+' Human:' +baconplane3);

var fullText5 = 'HUD5767ghtyfyr45 : Huudersfeild'
var bacon3 = fullText5.indexOf(' : ');
var bacon4 = fullText5.slice(0,bacon3);
var baconplane4 = fullText5.slice(bacon3+1,fullText5.length);
console.log('Computer:' +bacon4+ ' Human:' + baconplane4);





















