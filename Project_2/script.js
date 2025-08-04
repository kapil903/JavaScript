const form  = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.innerHTML = 'Please enter valid positive numbers for height and weight.';
        return;
    }
    const bmi = (weight / (height * height)).toFixed(2);
    result.innerHTML = `<span>Your BMI is ${bmi}</span>`;

    if (bmi < 18.5) {
        result.innerHTML += '<span> (Underweight)</span>';
    } else if (bmi < 24.9) {
        result.innerHTML += '<span> (Normal weight)</span>';
    } else if (bmi < 29.9) {
        result.innerHTML += '<span> (Overweight)</span>';
    } else {
        result.innerHTML += '<span> (Obesity)</span>';
    }
    form.reset();
})