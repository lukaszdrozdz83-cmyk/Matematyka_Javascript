// w javascript jest tylko funkcja obliczania pierwiastka drugiego stopnia
// Math.sqrt(liczba) - zwraca pierwiastek drugiego stopnia z liczby
// Math.pow(podstawa, wykladnik) - zwraca podstawe podniesiona do wykladnika
// Math.sqrt(liczba) jest rownowazne Math.pow(liczba, 0.5)
// aby obliczyć pierwiastek 5 stopnia należy użyc Math.pow(liczba, 1/5) lub Math.pow(liczba, 0.2)

// obliczanie pierwiastka 5 stopnia z liczby 32
let liczba = 32;
let pierwiastek5Stopnia = Math.pow(liczba, 1/5);
console.log(pierwiastek5Stopnia); // wynik to 2, ponieważ 2^5 = 32

// logarytmy w javascript
let mathLog10E = Math.LOG10E;
console.log(mathLog10E); // wynik to 0.4342944819032518, ponieważ logarytm dziesiętny z e jest równy 0.4342944819032518

let mathLog2E = Math.LOG2E;
console.log(mathLog2E); // wynik to 1.4426950408889634, ponieważ logarytm dwójkowy z e jest równy 1.4426950408889634    

let mathLn10 = Math.LN10;
console.log(mathLn10); // wynik to 2.302585092994046, ponieważ logarytm naturalny z 10 jest równy 2.302585092994046

let mathLn2 = Math.LN2;
console.log(mathLn2); // wynik to 0.6931471805599453, ponieważ logarytm naturalny z 2 jest równy 0.6931471805599453

let mathPi = Math.PI;
console.log(mathPi); // wynik to 3.141592653589793, ponieważ pi jest równe 3.141592653589793

let mathE = Math.E;
console.log(mathE); // wynik to 2.718281828459045, ponieważ e jest równe 2.718281828459045

let logX = Math.log(10);
console.log(logX); // wynik to 2.302585092994046, ponieważ logarytm naturalny z 10 jest równy 2.302585092994046

// logarytm naturalny z b
var ln = function(b) {
    return Math.log(b);
}

console.log(ln(10)); // wynik to 2.302585092994046, ponieważ logarytm naturalny z 10 jest równy 2.302585092994046

// logarytm dziesiętny z b
var log10 = function(b) {
    return Math.log10(b);
}

console.log(log10(100)); // wynik to 2, ponieważ logarytm dziesiętny z 100 jest równy 2

// logarytm dwójkowy z b
var log2 = function(b) {
    return Math.log2(b);
}

console.log(log2(8)); // wynik to 3, ponieważ logarytm dwójkowy z 8 jest równy 3

// logarytm o dowolnej podstawie a z b
var logBase = function(a, b) {
    return Math.log(b) / Math.log(a);
}

console.log(logBase(2, 8)); // wynik to 3, ponieważ logarytm o podstawie 2 z 8 jest równy 3