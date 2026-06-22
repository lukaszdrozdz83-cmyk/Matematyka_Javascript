var liczbaStanowUkladu = function (liczbaElementow, liczbaStanowElementu) {
    return Math.pow(liczbaStanowElementu, liczbaElementow);
}

var roznorodnosc2 = function (liczbaStanowUkladu) {
    return Math.log2(liczbaStanowUkladu);
}

var roznorodnosc10 = function (liczbaStanowUkladu) {
    return Math.log10(liczbaStanowUkladu);
}

//entropia w ditach
var entropiaD = function(tabl) {
    var sum = 0;
    for (var i = 0; i < tabl.length; i++) {
        sum += tabl[i] * Math.log10(tabl[i]);
    }
    return -sum;
}

// entropia w bitach
var entropiaB = function(tabl) {
    var sum = 0;
    for (var i = 0; i < tabl.length; i++) {
        sum += tabl[i] * Math.log2(tabl[i]);
    }
    return -sum;
}

// srednia entropia w bitach
var sredniaEntropia = function(tabl) {
    var sum = 0;
    for (var i = 0; i < tabl.length; i++) {
        sum += tabl[i] * Math.log2(1 / tabl[i]);
    }
    return -sum;
}