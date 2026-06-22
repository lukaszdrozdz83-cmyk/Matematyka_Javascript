var button = document.getElementById("convertButton");

button.addEventListener("click", function () {
    let base = document.getElementById("type").value;
    let value = document.getElementById("numberInput").value;
    let result;

    if (base === "10") {
        // z dziesiętnego na binarny
        let numberValue = parseInt(value, 10);

        if (isNaN(numberValue)) {
            alert("Podaj poprawną liczbę dziesiętną");
            return;
        }

        let bits = 16;
        result = numberValue.toString(2).padStart(bits, '0');
        alert("Wartość binarna: " + result);
    }
    else {
        // z binarnego na dziesiętny
        let numberValue = parseInt(value, 2);

        if (isNaN(numberValue)) {
            alert("Podaj poprawną liczbę binarną");
            return;
        }

        result = numberValue;
        alert("Wartość dziesiętna: " + result);
    }
});