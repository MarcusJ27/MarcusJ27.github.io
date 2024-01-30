<!DOCTYPE html>
<body style="background-color:rgb(231, 255, 251);"></body>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scientific Calculator</title>
</head>
<body>
    <div class="calculator" style="width: 250px; margin: 50px auto; border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
        <input type="text" id="expression" readonly style="width: calc(100% - 20px); margin-bottom: 10px; padding: 5px;">
        <div class="buttons" style="display: grid; grid-template-columns: repeat(4, 1fr); grid-gap: 5px;">
            <button onclick="appendToExpression('1')" style="padding: 10px; font-size: 16px; border: 1px solid #ccc; border-radius: 5px; cursor: pointer;">1</button>
            <!-- Repeat buttons for other numbers and operators -->
            <button onclick="deleteLast()" style="padding: 10px; font-size: 16px; border: 1px solid #ccc; border-radius: 5px; cursor: pointer;">DEL</button>
            <button onclick="clearInput()" style="padding: 10px; font-size: 16px; border: 1px solid #ccc; border-radius: 5px; cursor: pointer;">C</button>
            <button onclick="calculate()" style="padding: 10px; font-size: 16px; border: 1px solid #ccc; border-radius: 5px; cursor: pointer;">=</button>
        </div>
        <div id="result"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>


