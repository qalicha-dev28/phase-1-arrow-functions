function appendOutput(message) {
    console.log(message);
}

function greetDeclaration(name) {
    return `Hello, ${name}! (from function declaration)`;
}
appendOutput(greetDeclaration('Alice'));

const greetExpression = function(name) {
    return `Hello, ${name}! (from function expression)`;
};
appendOutput(greetExpression('Bob'));

const divide = function(numerator, denominator) {
    return numerator / denominator;
};
appendOutput(`Result of division 2000 / 100: ${divide(2000, 100)}`);


const double = x => x * 2;
appendOutput(`Double of 5: ${double(5)}`);

const add = (a, b) => a + b;
appendOutput(`Sum of 10 and 20: ${add(10, 20)}`);

const square = x => x * x;
appendOutput(`Square of 7: ${square(7)}`);

const getPI = () => Math.PI;
appendOutput(`Value of PI: ${getPI()}`);

const calculateArea = (length, width) => {
    appendOutput(`Calculating area for length: ${length}, width: ${width}`);
    const area = length * width;
    return `Area: ${area}`;
};
appendOutput(calculateArea(7, 8));

const numbers = [1, 2, 3, 4, 5];
appendOutput('Original numbers: ' + numbers.join(', '));

const squaresMapped = numbers.map(num => num * num);
appendOutput('Squares using .map() with arrow function: ' + squaresMapped.join(', '));

const messages = ['hello', 'world', 'javascript'];
const capitalizedMessages = messages.map(msg => {
    const firstChar = msg.charAt(0).toUpperCase();
    const rest = msg.slice(1);
    return firstChar + rest;
});
appendOutput('Capitalized messages: ' + capitalizedMessages.join(', '));