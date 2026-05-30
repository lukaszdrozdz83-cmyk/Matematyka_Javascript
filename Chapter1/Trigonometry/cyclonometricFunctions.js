import {Chart, FunctionData} from "../../Charts/chart.js";


const chart = new Chart("arcsinFunction", {
    pixelsPerUnit: 20,
    unitScale: 1,
    precision: 0
});

chart.setFunctions([
    new FunctionData(
        x => Math.asin(x),
        "red",
        "arcsin(x)"
    )
]);

chart.draw();