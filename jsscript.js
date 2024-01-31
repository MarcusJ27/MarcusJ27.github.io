document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");

    document.getElementById("add").onclick = function() {
        display.value += '+';
    };

    document.getElementById("subtract").onclick = function() {
        display.value += '-';
    };

    document.getElementById("multiply").onclick = function() {
        display.value += '*';
    };

    document.getElementById("divide").onclick = function() {
        display.value += '/';
    };

    document.getElementById("openParenthesis").onclick = function() {
        display.value += '(';
    };

    document.getElementById("closeParenthesis").onclick = function() {
        display.value += ')';
    };

    document.getElementById("zero").onclick = function() {
        display.value += '0';
    };

    document.getElementById("one").onclick = function() {
        display.value += '1';
    };

    document.getElementById("two").onclick = function() {
        display.value += '2';
    };

    document.getElementById("three").onclick = function() {
        display.value += '3';
    };

    document.getElementById("four").onclick = function() {
        display.value += '4';
    };

    document.getElementById("five").onclick = function() {
        display.value += '5';
    };

    document.getElementById("six").onclick = function() {
        display.value += '6';
    };

    document.getElementById("seven").onclick = function() {
        display.value += '7';
    };

    document.getElementById("eight").onclick = function() {
        display.value += '8';
    };

    document.getElementById("nine").onclick = function() {
        display.value += '9';
    };

    document.getElementById("decimal").onclick = function() {
        display.value += '.';
    };

    document.getElementById("delete").onclick = function() {
        display.value = display.value.slice(0, -1);
    };

    document.getElementById("clear").onclick = function() {
        display.value = '';
    };

    document.getElementById("equals").onclick = function() {
        display.value = eval(display.value);
    };
});
