import "./Chapter1/Trigonometry/trigonometricFunctions.js";
import {Chart, FunctionData} from "./Charts/chart.js";


const chart = new Chart("canvas", {
    pixelsPerUnit: 20,
    unitScale: 1,
    precision: 0
});

chart.setFunctions([
    new FunctionData(
        x => Math.sin(x),
        "red",
        "sin(x)"
    ),

    new FunctionData(
        x => x * x,
        "blue",
        "x²"
    ),

    new FunctionData(
        x => 1 / x,
        "green",
        "1/x"
    )
]);

chart.draw();