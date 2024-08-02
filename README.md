# FitFusion

Welcome to **FitFusion**—your all-in-one fitness hub designed to help you track your caloric intake, convert weights, and calculate BMI. This project combines multiple fitness tools into a unified platform with a visually appealing landing page.

## Project Overview

**FitFusion** includes:

- **Calorie Tracker**: Keep track of your daily caloric intake.
- **BMI Calculator & Weight Converter**: Calculate your Body Mass Index (BMI) and convert weights between units.
- **Landing Page**: A beautifully designed dashboard that provides health tips and links to the fitness tools.

## Features

- **Interactive Dashboard**: Provides an overview of fitness tools with attractive buttons and health tips.
- **Separate Applications**: Each tool runs on a different port for easy access and testing.
- **Responsive Design**: Ensures a good user experience across different devices and screen sizes.

## Directory Structure

```plaintext
FitFusion/
├── calorie-deficit-tracker/
│   ├── index.html
│   ├── styles.css
│   ├── scripts.js
├── weight-converter-bmi-calculator/
│   ├── index.html
│   ├── styles.css
│   ├── scripts.js
├── dashboard/
│   ├── index.html
│   ├── styles.css
│   ├── scripts.js
```

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Setup and Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/fitfusion.git
   ```

2. **Navigate to Project Directory:**

   ```bash
   cd fitfusion
   ```

3. **Install Dependencies for Each Application:**

   Each tool uses Live Server to run on different ports. Navigate to each directory and start the server:

   - **Calorie Tracker:**
     ```bash
     cd calorie-deficit-tracker
     npx live-server --port=5501
     ```

   - **BMI Calculator & Weight Converter:**
     ```bash
     cd ../weight-converter-bmi-calculator
     npx live-server --port=5502
     ```

   - **Dashboard:**
     ```bash
     cd ../dashboard
     npx live-server --port=5500
     ```

### Access the Applications

- **Calorie Tracker:** [http://localhost:5501](http://localhost:5501)
- **BMI Calculator & Weight Converter:** [http://localhost:5502](http://localhost:5502)
- **Dashboard:** [http://localhost:5500](http://localhost:5500)

## How It Works

### Calorie Tracker

The **Calorie Tracker** application helps users monitor their caloric intake and maintain a caloric deficit to achieve weight loss goals. Here's how it works:

1. **Base Metabolic Rate:**
   - Your body burns a certain amount of calories at rest, known as your base metabolic rate. For instance, if your base metabolic rate is 2000 kcal/day, this is the number of calories you burn just by living.

2. **Caloric Intake and Exercise:**
   - You consume calories through food and burn additional calories through exercise. The goal is to maintain a net caloric deficit, where you burn more calories than you consume, leading to weight loss.

3. **Deficit Tracking:**
   - **Caloric Goal:** You set a daily caloric deficit goal. For example, if you aim for a 500 kcal/day deficit, this translates to a weekly deficit of 3500 kcal, which is roughly equivalent to losing 1 pound of fat.
   - **Tracking Interface:** The application features two counters that display your current caloric deficit and your goal. Use the +100 kcal and -100 kcal buttons to adjust the counter based on your caloric intake and exercise.

4. **Usage:**
   - When you eat, press the +100 kcal button for each 100 kcal consumed. For instance, eating a Big Mac (500 kcal) requires pressing the button 5 times.
   - When you exercise, press the -100 kcal button to account for the calories burned. For example, a 30-minute run burning 400 kcal requires pressing the button 4 times.

5. **Customization:**
   - Adjust your base metabolic rate and deficit goal by editing the variables in `index.html`:
     ```javascript
     const hourlyCalorieBurn = 2000 / 24.0; // burned per hour
     const hourlyCalorieTargetDeficit = 500 / 24.0; // target deficit per hour
     ```

   - Simply open `index.html` in your browser to start using the tracker.

### BMI Calculator & Weight Converter

The **BMI Calculator & Weight Converter** application offers two functionalities:

1. **BMI Calculation:**
   - **Formula:** BMI is calculated using the formula:
     \[
     \text{BMI} = \frac{\text{weight (kg)}}{\text{height (m)}^2}
     \]
   - Users enter their weight and height, and the application computes their BMI.
   - The result is classified into categories such as Underweight, Normal weight, Overweight, and Obesity.

2. **Weight Conversion:**
   - **Conversions:** Users can convert weights between different units, such as kilograms to pounds and vice versa.
   - The conversion formulas are:
     - Kilograms to Pounds: \( \text{weight (lbs)} = \text{weight (kg)} \times 2.20462 \)
     - Pounds to Kilograms: \( \text{weight (kg)} = \text{weight (lbs)} \div 2.20462 \)

**Key Features:**
- Input fields for weight and height with real-time BMI calculation.
- Conversion options for weight units.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create a pull request or open an issue on GitHub.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.


## Acknowledgments

- **Live Server**: Used for serving files and testing locally.
- **HTML5 & CSS3**: For building the responsive design and styling.
- **JS**: For added user functionality.
