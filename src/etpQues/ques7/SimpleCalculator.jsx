import React, { useState } from 'react'

// Create a calculator that can perform basic arithmetic operations
// (addition, subtraction, multiplication, division)

const SimpleCalculator = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    const handleNumClick = (e) => {
        if (operator === '') {
            setNum1(num1 + e.target.value);
        } else {
            setNum2(num2 + e.target.value);
        }
    }

    const handleOperatorClick = (e) => {
        setOperator(e.target.value);
    }

    const handleClearClick = () => {
        setNum1('');
        setNum2('');
        setOperator('');
        setResult('');
    }
    
    const handleCalculateClick = () => {
        let a = parseInt(num1);
        let b = parseInt(num2);
        let res;

        switch (operator) {
            case '+':
                res = a + b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                if (b === 0) {
                    setResult('Division by zero not possible');
                } else {
                    res = a / b;
                }
                break;
            default:
                res = '';
                break;
        }
        setResult(res);
    }

  return (
    <div>
        <h2>Calculator</h2>
        <input type="text" value={num1 + operator + num2 + '=' + result} readOnly /><br />
        <button value="1" onClick={handleNumClick} >1</button>
        <button value="2" onClick={handleNumClick}>2</button>
        <button value="3" onClick={handleNumClick}>3</button>
        <button value="+" onClick={handleOperatorClick}>+</button><br />
        <button value="4" onClick={handleNumClick}>4</button>
        <button value="5" onClick={handleNumClick}>5</button>
        <button value="6" onClick={handleNumClick}>6</button>
        <button value="-" onClick={handleOperatorClick}>-</button><br />
        <button value="7" onClick={handleNumClick}>7</button>
        <button value="8" onClick={handleNumClick}>8</button>
        <button value="9" onClick={handleNumClick}>9</button>
        <button value="*" onClick={handleOperatorClick}>*</button><br />
        <button value="C" onClick={handleClearClick}>C</button>
        <button value="0" onClick={handleNumClick}>0</button>
        <button value="/" onClick={handleOperatorClick}>/</button>
        <button value="=" onClick={handleCalculateClick}>=</button>
    </div>
  )
}

export default SimpleCalculator