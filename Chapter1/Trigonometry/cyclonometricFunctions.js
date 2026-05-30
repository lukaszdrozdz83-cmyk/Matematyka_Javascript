import {Chart, FunctionData} from "../../Charts/chart.js";

// funkcja asin(x) dla wartości w stopniach
var asinDegrees = x => Math.asin(x) * (180 / Math.PI);

// funkcja acos(x) dla wartości w stopniach
var acosDegrees = x => Math.acos(x) * (180 / Math.PI);

// funkcje cyklonometryczne dla wartości w stopniach
var atanDegrees = x => Math.atan(x) * (180 / Math.PI);


// arcsin()
const chart = new Chart("arcsinFunction");

chart.setFunctions([
    new FunctionData(
        x => Math.asin(x),
        "red",
        "arcsin(x)"
    )
]);

chart.draw();

// arcsin()
const arcsinInDegreesFunction = new Chart("arcsinInDegreesFunction",{
    pixelsPerUnit: 20,
    unitScale: 10,
    precision: 0
});

arcsinInDegreesFunction.setFunctions([
    new FunctionData(
        x => asinDegrees(x),
        "red",
        "arcsin(x)"
    )
]);

arcsinInDegreesFunction.draw();

// arccos()
const chart2 = new Chart("arccosFunction");

chart2.setFunctions([
    new FunctionData(
        x => Math.acos(x),
        "blue",
        "arccos(x)"
    )
]);

chart2.draw();

// arccos() dla wartości w stopniach
const arccosInDegreesFunction = new Chart("arccosInDegreesFunction",{
    pixelsPerUnit: 20,
    unitScale: 10,
    precision: 0
});

arccosInDegreesFunction.setFunctions([
    new FunctionData(
        x => acosDegrees(x),
        "blue",
        "arccos(x)"
    )
]);

arccosInDegreesFunction.draw();


// arctan()
const chart3 = new Chart("arctanFunction");
chart3.setFunctions([
    new FunctionData(
        x => Math.atan(x),
        "green",
        "arctan(x)"
    )
]);
chart3.draw();

// arctan() dla wartości w stopniach
const arctanInDegreesFunction = new Chart("arctanInDegreesFunction", {
    pixelsPerUnit: 40,
    unitScale: 40,
    precision: 0
});
arctanInDegreesFunction.addFunction(
    new FunctionData(
        x => atanDegrees(x),
        "green",
        "arctan(x)"
    )
);
arctanInDegreesFunction.draw();

// atan2()
const chart4 = new Chart("atan2Function");
chart4.setFunctions([
    new FunctionData(
        (x) => Math.atan2(1, x),
        "purple",
        "atan2(y, x)"
    )
]);
chart4.draw();
