// w javascript jest tylko funkcja obliczania pierwiastka drugiego stopnia
// Math.sqrt(liczba) - zwraca pierwiastek drugiego stopnia z liczby
// Math.pow(podstawa, wykladnik) - zwraca podstawe podniesiona do wykladnika
// Math.sqrt(liczba) jest rownowazne Math.pow(liczba, 0.5)
// aby obliczyć pierwiastek 5 stopnia należy użyc Math.pow(liczba, 1/5) lub Math.pow(liczba, 0.2)

// obliczanie pierwiastka 5 stopnia z liczby 32
let liczba = 32;
let pierwiastek5Stopnia = Math.pow(liczba, 1/5);
console.log(pierwiastek5Stopnia); // wynik to 2, ponieważ 2^5 = 32