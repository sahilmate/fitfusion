// scripts.js
// You can add JavaScript functionality here if needed
// scripts.js

// This function could be used for any interactive features or event handling
document.addEventListener('DOMContentLoaded', () => {
    const calorieTrackerButton = document.querySelector('.button[href*="calorie-deficit-tracker"]');
    const bmiCalculatorButton = document.querySelector('.button[href*="weight-converter-bmi-calculator"]');

    if (calorieTrackerButton) {
        calorieTrackerButton.addEventListener('click', (event) => {
            // Optional: Add any functionality here, e.g., tracking clicks or showing a message
            console.log('Calorie Tracker button clicked!');
        });
    }

    if (bmiCalculatorButton) {
        bmiCalculatorButton.addEventListener('click', (event) => {
            // Optional: Add any functionality here, e.g., tracking clicks or showing a message
            console.log('BMI Calculator button clicked!');
        });
    }
});
