//say hello, say bye
function sayHelloBye(name, num) {
    if (num == 1){

        return "Hello " + name.charAt(0).toUpperCase() + name.slice(1)
    }else{
        return "Bye " + name.charAt(0).toUpperCase() + name.slice(1)
    }
}
// //Given two integers, a and b, return true if a can be divided evenly by b.
function dividesEvenly(a, b) {
    return a % b === 0
}
//correct the syntax
function squared(b) {
    var a = b;
    return a * a
}
//Return the Next Number from the Integer Passed
function addition(num) {
    return num++ + 1
}

//Get absolute sum
function getAbsSum(arr) {
    var sum = 0
    for (var i = 0; i <arr.length; i++) {
        sum += Math.abs(arr[i]);
    }
    return sum

}

//convert hours into seconds
function howManySeconds(hours) {
    return hours*(60 * 60)


}

//football points
function footballPoints(wins, draws, losses) {
    return (wins * 3) + draws
}

//total amount of legs
function animals(chickens, cows, pigs) {
    return (chickens * 2) + (cows * 4) + (pigs * 4)
}

//get area of triangle

function triArea(base, height) {
    return (base * height) / 2
}

//return something
function giveMeSomething(a) {
    return "something" + " " + a
}

//profitable game
function profitableGamble(prob, prize, pay) {
    if (prob * prize > pay){
        return true
    }else{
        return false
    }
}

//equality check
function checkEquality(a, b) {
    if(a === b){
        return true
    }else{
        return false
    }

}

//less than 100
function lessThan100(a, b) {
    if(a + b < 100){
        return true
    }else{
        return false
    }
}

//find the index
function search(arr, item) {
    return arr.indexOf(item)
}

//compare strings by count of characters
function comp(str1, str2) {
    if(str1.length === str2.length){
        return true
    }else{
        return false
    }
}

//Return the Next Number from the Integer Passed
function addition(num) {
    return num++ + 1
}

//sum of cubes
function sumOfCubes(nums) {
    var sumn = 0;
    for (var i = 0; i < nums.length; i++) {
        sumn += Math.pow(nums[i], 3);
    }
    return sumn
}

//convert hours and minutes into seconds
function convert(hours, minutes) {
    return (hours*60*60) + (minutes*60)
}

//recursion: lenght of a string
