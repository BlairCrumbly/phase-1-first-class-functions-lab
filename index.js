// Code your solution in this file!



function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}

const  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
//!this is a partially applied function that leverages closures
//! so when we invoke the outter function the inner one is returned (not invoked)
//! since the inner one is a closure it will always remember the value of int

const createFareMultiplier = (int) => {
    return (fare) => int*fare

}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = ((arrayOfDrivers, fn) => fn(arrayOfDrivers))


console.log(returnFirstTwoDrivers)
console.log(returnLastTwoDrivers)