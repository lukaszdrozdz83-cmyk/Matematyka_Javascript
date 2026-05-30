import { Chart, FunctionData } from "../../Charts/chart.js";

var tanh = function(x) {
    const ePos = Math.exp(x);
    const eNeg = Math.exp(-x);
    return (ePos - eNeg) / (ePos + eNeg);
}

var chartanh = new Chart("tanhFunction");

chartanh.setFunctions([
    new FunctionData(
        x => tanh(x),
        "orange",
        "tanh(x)"
    )
]);

chartanh.draw();
