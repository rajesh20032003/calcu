let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Replace mathematical constants and functions
        let expression = display.value
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/sqrt/g, 'Math.sqrt')
            .replace(/log/g, 'Math.log10')
            .replace(/π/g, 'Math.PI');
        
        // Evaluate the expression
        let result = eval(expression);
        
        // Check if result is valid
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = Number(result.toFixed(8));
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function applyFunction(func) {
    try {
        let currentValue = parseFloat(display.value) || 0;
        let result;
        
        switch(func) {
            case 'sin':
                result = Math.sin(currentValue * Math.PI / 180); // Convert to radians
                break;
            case 'cos':
                result = Math.cos(currentValue * Math.PI / 180);
                break;
            case 'tan':
                result = Math.tan(currentValue * Math.PI / 180);
                break;
            case 'sqrt':
                result = Math.sqrt(currentValue);
                break;
            case 'log':
                result = Math.log10(currentValue);
                break;
        }
        
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = Number(result.toFixed(8));
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function memoryStore() {
    memory = parseFloat(display.value) || 0;
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/\d/.test(key)) {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '(' || key === ')') {
        appendToDisplay(key);
    }
});