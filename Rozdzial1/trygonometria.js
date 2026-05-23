// przeliczenie kata w stopniach na radiany
var degreesToRadians = function(degrees) {
    return degrees * (Math.PI / 180);
}

console.log(degreesToRadians(180)); // wynik to 3.141592653589793, ponieważ 180 stopni jest równych pi radianów

// przeliczenie kata w radianach na stopnie
var radiansToDegrees = function(radians) {
    return radians * (180 / Math.PI);
}   

console.log(radiansToDegrees(Math.PI)); // wynik to 180, ponieważ pi radianów jest równych 180 stopniom

// sinus dla wartosci w stopniach
var sinDegrees = function(degrees) {
    return Math.sin(degrees * (Math.PI / 180));
}

console.log(sinDegrees(180)); // wynik to 0, ponieważ sinus 180 stopni jest równy 0

// cosinus dla wartosci w stopniach
var cosDegrees = function(degrees) {
    return Math.cos(degrees * (Math.PI / 180));
}

console.log(cosDegrees(360)); // wynik to 1, ponieważ cosinus 360 stopni jest równy 1

// tangens dla wartosci w stopniach
var tanDegrees = function(degrees) {
    return Math.tan(degrees * (Math.PI / 180));
}

console.log(tanDegrees(45)); // wynik to 1, ponieważ tangens 45 stopni jest równy 1

// cotangens dla wartosci w stopniach
var cotDegrees = function(degrees) {
    return 1 / Math.tan(degrees * (Math.PI / 180));
}

console.log(cotDegrees(45)); // wynik to 1, ponieważ cotangens 45 stopni jest równy 1

// funnkcje odwrotne do funkcji trygonometrycznych
// arcsinus dla wartosci w stopniach
var asinDegrees = function(degrees) {
    return Math.asin(degrees) * (180 / Math.PI);
}

console.log(asinDegrees(0.5)); // wynik to 30, ponieważ arcsinus 0.5 jest równy 30 stopniom
