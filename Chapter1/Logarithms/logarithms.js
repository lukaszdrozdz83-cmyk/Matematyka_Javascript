import {Chart, FunctionData} from "../../Charts/chart.js";

// w javascript jest tylko funkcja obliczania pierwiastka drugiego stopnia
// Math.sqrt(liczba) - zwraca pierwiastek drugiego stopnia z liczby
// Math.pow(podstawa, wykladnik) - zwraca podstawe podniesiona do wykladnika
// Math.sqrt(liczba) jest rownowazne Math.pow(liczba, 0.5)
// aby obliczyć pierwiastek 5 stopnia należy użyc Math.pow(liczba, 1/5) lub Math.pow(liczba, 0.2)

// obliczanie pierwiastka 5 stopnia z liczby 32
let liczba = 32;
let pierwiastek5Stopnia = Math.pow(liczba, 1/5);

// logarytmy w javascript
let mathLog10E = Math.LOG10E;

let mathLog2E = Math.LOG2E;

let mathLn10 = Math.LN10;

let mathLn2 = Math.LN2;

let mathPi = Math.PI;

let mathE = Math.E;

let logX = Math.log(10);

// logarytm naturalny z b
var ln = function(b) {
    return Math.log(b);
}

// logarytm dziesiętny z b
var log10 = function(b) {
    return Math.log10(b);
}

// logarytm dwójkowy z b
var log2 = function(b) {
    return Math.log2(b);
}

// logarytm o dowolnej podstawie a z b
var logBase = function(a, b) {
    return Math.log(b) / Math.log(a);
}


const chart = new Chart("logarithmEFunction");

chart.setFunctions([
    new FunctionData(
        x => Math.log(x),
        "red",
        "log(x)"
    )
]);

chart.draw();

const chart1 = new Chart("logarithm10Function");

chart1.setFunctions([
    new FunctionData(
        x => Math.log10(x),
        "red",
        "log10(x)"
    )
]);

chart1.draw();


const chart2 = new Chart("logarithm2Function");

chart2.setFunctions([
    new FunctionData(
        x => Math.log2(x),
        "red",
        "log2(x)"
    )
]);

chart2.draw(); 