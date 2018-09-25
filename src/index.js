module.exports = function solveEquation(equation) {
    let result = equation.replace("^2", "");
    result = result.split(' * x ');

    let resultNumber = [];

    for (let i = 0; i < result.length; i++) {
        resultNumber[i] = Number(result[i].replace(' ', ''));
    }

    let x1 = Math.round((-resultNumber[1] + Math.sqrt(Math.pow(resultNumber[1], 2) - 4 * resultNumber[0] * resultNumber[2])) / (2 * resultNumber[0]));
    let x2 = Math.round((-resultNumber[1] - Math.sqrt(Math.pow(resultNumber[1], 2) - 4*resultNumber[0]*resultNumber[2])) / (2 * resultNumber[0]));

    return x1 < x2 ? [x1, x2] : [x2, x1];
}
