/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
      constructor(){
        this.result = 0;
      }

      calculate(expression) {
        // Remove multiple continuous spaces
        expression = expression.replace(/\s+/g, '');
    
        // Validate expression for invalid characters
        if (!expression.match(/^[0-9+\-*/(). ]+$/)) {
          throw new Error("Invalid characters in the expression");
        }
        if (expression.includes('/0')) {
          throw new Error("Cannot divide by zero");
        }
    
        // Evaluate the expression
        try {
          this.result = eval(expression);
        } catch (e) {
          throw new Error(`Error in evaluating expression: ${e.message}`);
        }
      }

      add(value){
        this.result = this.result + value;
      }

      subtract(value){
        this.result = this.result - value;
      }

      multiply(value){
        this.result = this.result * value;
      }

      divide(value){
        if (value !== 0) {
          this.result = this.result / value;
        } else {
          throw new Error("Cannot divide by zero");
        }  
      }

      clear(){
        this.result = 0 ;
      }
      
      getResult(){
        return this.result;
      }

}

let obj1 = new Calculator();
obj1.add(10);
obj1.getResult();


module.exports = Calculator;
