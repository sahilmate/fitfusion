// User configuration ------
let calorieCount = 0;
const hourlyCalorieBurn = 2000 / 24.0; // burned per hour
let desiredDeficitCount = 0;
const hourlyCalorieTargetDeficit = 500 / 24.0;
// --------------------------

let lastUpdateTime = Date.now();

function updateCalorieCount() {
    const currentTime = Date.now();
    const elapsedHours = (currentTime - lastUpdateTime) / (1000 * 60 * 60);
    calorieCount -= elapsedHours * hourlyCalorieBurn;
    desiredDeficitCount -= elapsedHours * hourlyCalorieTargetDeficit;
    lastUpdateTime = currentTime;
    document.getElementById('calorie-count').innerText = calorieCount.toFixed(2);
    document.getElementById('deficit-count').innerText = "GOAL: " + desiredDeficitCount.toFixed(2);
    let color = calorieCount < desiredDeficitCount ? 'green' : 'red'; // green if met, red otherwise
    document.getElementById('deficit-count').style.color = color;
}

document.getElementById('reset-button').addEventListener('click', () => {
    calorieCount = 0;
    desiredDeficitCount = 0; // reset the goal counter as well
    lastUpdateTime = Date.now();
});

document.getElementById('exercise-button').addEventListener('click', () => {
    updateCalorieCount();
    calorieCount -= 100;
});

document.getElementById('eat-button').addEventListener('click', () => {
    updateCalorieCount();
    calorieCount += 100;
});

setInterval(updateCalorieCount, 500); // update counter every 500ms
