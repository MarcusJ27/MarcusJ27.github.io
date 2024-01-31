function appendToExpression(value) {
    document.getElementById("expression").value += value;
}

function deleteLast() {
    let expression = document.getElementById("expression").value;
    document.getElementById("expression").value = expression.slice(0, -1);
}

function clearInput() {
    document.getElementById("expression").value = "";
    document.getElementById("result").innerText = "";
}

function calculate() {
    let expression = document.getElementById("expression").value;
    if (expression) {
        try {
            let result = eval(expression);
            document.getElementById("result").innerText = `${expression} = ${result}`;
            document.getElementById("expression").value = `${expression} = ${result}`;
        } catch (error) {
            document.getElementById("result").innerText = "Error";
        }
    }
}


