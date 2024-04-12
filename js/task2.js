// Задача 2: Напишіть програму для обчислення середнього балу студента. Програма має мати можливість вводити інформацію про студента, таку як його ім'я, прізвище та оцінки з різних предметів. Для обчислення середнього балу необхідно використовувати прототипне наслідування.

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.addGrade = function(grade) {
    this.grades.push(grade);
};

Student.prototype.calculateAverageGrade = function() {
    if (this.grades.length === 0) {
        return 0;
    }
    
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
};

const student1 = new Student("John", "Doe");
student1.addGrade(99);
student1.addGrade(60);
student1.addGrade(60);

console.log(`${student1.firstName} ${student1.lastName}: середній бал - ${student1.calculateAverageGrade()}`);