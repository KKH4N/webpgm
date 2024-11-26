onmessage = function (e) {
    let num1 = parseInt(e.data.num1);
    let num2 = parseInt(e.data.num2);
    let sum = num1*num2;
    postMessage(sum);
}