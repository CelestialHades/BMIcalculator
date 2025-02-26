// 1. Get DOM elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const result = document.getElementById('result');

// 2. Function to calculate BMI
function calculateBMI() {
  // 3. Get input values
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value) / 100; // Convert cm to meters
  
  // 4. Validate inputs
  if (isNaN(weight) || weight <= 0) {
    result.textContent = 'Please enter a valid weight!';
    return;
  }
  if (isNaN(height) || height <= 0) {
    result.textContent = 'Please enter a valid height!';
    return;
  }
  
  // 5. Calculate BMI
  const bmi = weight / (height * height);
  
  // 6. Determine BMI category
  let category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }
  
  // 7. Display result
  result.textContent = `BMI: ${bmi.toFixed(1)} - ${category}`;
  
  // 8. Clear inputs
  weightInput.value = '';
  heightInput.value = '';
}

// 9. Allow Enter key to trigger calculation
weightInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    calculateBMI();
  }
});
heightInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    calculateBMI();
  }
});