// przeliczenie kata w stopniach na radiany
var degreesToRadians = function(degrees) {
    return degrees * (Math.PI / 180);
}

// przeliczenie kata w radianach na stopnie
var radiansToDegrees = function(radians) {
    return radians * (180 / Math.PI);
}   

// sinus dla wartosci w stopniach
var sinDegrees = function(degrees) {
    return Math.sin(degrees * (Math.PI / 180));
}

// cosinus dla wartosci w stopniach
var cosDegrees = function(degrees) {
    return Math.cos(degrees * (Math.PI / 180));
}

// tangens dla wartosci w stopniach
var tanDegrees = function(degrees) {
    return Math.tan(degrees * (Math.PI / 180));
}

// cotangens dla wartosci w stopniach
var cotDegrees = function(degrees) {
    return 1 / Math.tan(degrees * (Math.PI / 180));
}


// funnkcje odwrotne do funkcji trygonometrycznych
// arcsinus dla wartosci w stopniach
var asinDegrees = function(degrees) {
    return Math.asin(degrees) * (180 / Math.PI);
}

// arcsinus dla wartosci w stopniach
var asinDegrees = function(degrees) {
    return Math.asin(degrees) * (180 / Math.PI);
}

// arccosinus dla wartosci w stopniach
var acosDegrees = function(degrees) {
    return Math.acos(degrees) * (180 / Math.PI);
}

// arctangens dla wartosci w stopniach
var atanDegrees = function(degrees) {
    return Math.atan(degrees) * (180 / Math.PI);
}

// arccotangens dla wartosci w stopniach
var acotDegrees = function(degrees) {
    return Math.atan(1 / degrees) * (180 / Math.PI);
}


import {Chart, FunctionData} from "../../Charts/chart.js";


const chart = new Chart("sineFunction", {
    pixelsPerUnit: 20,
    unitScale: 1,
    precision: 0
});

chart.setFunctions([
    new FunctionData(
        x => Math.sin(x),
        "red",
        "sin(x)"
    )
]);

chart.draw();