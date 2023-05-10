var favBands = ["band1","band2","band3"];
favBands.push(prompt("please enter your favorite band"));

favBands.forEach(band => console.log(band))


var user = {};

user.name = "John";
user.lastName = "Doe";

user.name = "Chris"
delete user.lastName;


user.intrests = ["reading", "singing", "rugby"]

user.intrests.forEach(intrest => console.log(intrest))

function add8And10(){
    console.log(8+10);
}

add8And10();


function productOfFour(num1, num2, num3, num4){
    var product = (num1*num2*num3*num4);
    return product;
}

productOfFour(5,5,5,5);

function alert(fName, lName, mName){
    return "Hello " + fName + " " + mName + " " + lName
}

console.log(alert("Bilal", "E", "Alsilwadi"))

var globalPopulation = 7900000000;
var usPopulation = 331900000;
var chinaPopulation = 1441000000;
var canadaPopulation = 39240000;


function percentageOfWorld1(population){
    return (population/globalPopulation)*100;
}
var percentageOfWorld2 = function(population){
    return (population/globalPopulation)*100;
}


var usPopulationPercent = percentageOfWorld1(usPopulation)
var chinaPopulationPercent = percentageOfWorld1(chinaPopulation)
var canadaPopulationPercent = percentageOfWorld1(canadaPopulation)

console.log("US population: ",usPopulationPercent);
console.log("China population: ",chinaPopulationPercent);
console.log("Canada population: ",canadaPopulationPercent);



var usPopulationPercent2 = percentageOfWorld2(usPopulation)
var chinaPopulationPercent2 = percentageOfWorld2(chinaPopulation)
var canadaPopulationPercent2 = percentageOfWorld2(canadaPopulation)

console.log("US population: ",usPopulationPercent2);
console.log("China population: ",chinaPopulationPercent2);
console.log("Canada population: ",canadaPopulationPercent2);


const array = ['good', 'bad', 'good', 'bad'];

console.log(array);

const index = array.indexOf('bad');
if (index > -1) { // only splice array when item is found
  array.splice(index); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array); 


function getLargestGap(number){
    let binaryArr = number.toString(2).split('')
console.log(binaryArr)
let zeroCounter = 0;
let first1 = false;
let binaryGaps = [];
for(let i = 0; i < binaryArr.length; i++){

    if(binaryArr[i] === '1' && first1 === false) first1 = true;
    else if(first1 === true && binaryArr[i] === '0') zeroCounter++;
    else {
        binaryGaps.push(zeroCounter)
        zeroCounter = 0;
    }
}
return binaryGaps.sort()[binaryGaps.length-1]
}

console.log(getLargestGap(529))


function arrayByCondition(arr, conditionFunction){
    const newArr = [];
    for(let i = 0; i<arr.length;i++){
        if(conditionFunction(arr[i])) newArr.push(arr[i])
    }
    return newArr;
}
console.log(arrayByCondition([1,2,3], function(num){return num % 2 === 0}));







 