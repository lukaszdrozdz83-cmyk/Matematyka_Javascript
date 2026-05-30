import {Chart, FunctionData} from "../../Charts/chart.js";


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
