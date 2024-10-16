// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return null;
    }
    return a / b;
}

// Function to handle user input and perform calculations
function calculator() {
    while (true) {
        console.log("Calculator Options:");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Quit");

        let choice = prompt("Enter your choice (1-5):");

        if (choice === '5') {
            console.log("Thanks for using the calculator. Goodbye!");
            break;
        }

        let num1 = parseFloat(prompt("Enter the first number:"));
        let num2 = parseFloat(prompt("Enter the second number:"));
        let result;

        switch (choice) {
            case '1':
                result = add(num1, num2);
                console.log(`Result: ${num1} + ${num2} = ${result}`);
                break;
            case '2':
                result = subtract(num1, num2);
                console.log(`Result: ${num1} - ${num2} = ${result}`);
                break;
            case '3':
                result = multiply(num1, num2);
                console.log(`Result: ${num1} * ${num2} = ${result}`);
                break;
            case '4':
                result = divide(num1, num2);
                if (result !== null) {
                    console.log(`Result: ${num1} / ${num2} = ${result}`);
                }
                break;
            default:
                console.log("Invalid choice. Please enter a number between 1 and 5.");
        }
    }
}

// Start the calculator
calculator();