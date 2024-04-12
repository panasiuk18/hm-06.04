// Задача 1: Створення простого калькулятора з можливістю обчислення простих математичних операцій, таких як додавання, віднімання, множення та ділення, за допомогою прототипів та прототипного наслідування.

function Calculator() {
    this.result = 0;
}
Calculator.prototype.add = function(num) {
    this.result += num;
};
Calculator.prototype.subtract = function(num) {
    this.result -= num;
};
Calculator.prototype.multiply = function(num) {
    this.result *= num;
};
Calculator.prototype.divide = function(num) {
    if (num !== 0) {
        this.result /= num;
    } else {
        console.log("Ділення на нуль неможливе!");
    }
};
const calc = new Calculator();
calc.add(5);
calc.subtract(2);
calc.multiply(3);
calc.divide(2);

console.log("Результат обчислень:", calc.result);