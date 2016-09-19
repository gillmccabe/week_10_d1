// Episode 1
var name = 'Keith';
var printName = function() {
    console.log('My name is ' + name );
}
printName();

// will print to console "My name is Keith" because variable is declared outside of function 


// Episode 2
score = 5;
var result = function() {
    var score = 3;
    return score;
}
console.log(result());

// will print to console 3, because the variable within the scope of the function will be given preference


// Episode 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
var listAnimals = function() {
    myAnimals = ['Ducks', 'Dogs', 'Lions'];
    for(var i=0;i<myAnimals.length; i++){
      console.log(i + ": " + myAnimals[i]);
    }
}
listAnimals();

// will print to console 
// 1: 'Ducks'
// 2: 'Dogs'
// 3: 'Lions'
// myAnimals is a global variable so it will be update the values in the array 


// Episode 4
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';
var allSuspects = function() {
    var suspectThree = 'Harvey'
    console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}
allSuspects();
console.log( 'Suspect three is:' + suspectThree )
// prints to console 
// 'Suspects include: Jay, Val, Harvey, Rick'
// 'Suspect three is: Keith'
// outside of the function the variable suspectThree is defined as "Keith"


//Episode 5
var detective = {
        name : 'Ace Ventura',
        pet : 'monkey'
    }
var printName = function(detective) {
    return detective.name
}
var detectiveInfo = function() {
    detective['name'] = 'Poirot'
    return printName(detective);
}
console.log(detectiveInfo());
// prints to console 'Poirot'
// the detectiveInfo function updates the detective variable name value. Then within the detectiveInfo function the printName function is called which returns the name property of the detective (which has been updated to Poirot)


//Episode 6
var murderer = 'rick';
var outerFunction = function(){
    var murderer = 'marc';
    var innerFunction = function(){
        murderer = 'valerie';
    }
    innerFunction();
}
outerFunction();
console.log('the murderer is ', murderer);
// prints to console 'the murderer is Rick'
// the function outerFunction doesn't print anything to the console when called. The final console log gets the value for murderer from the variable that is declared at the top (outside the function) 
