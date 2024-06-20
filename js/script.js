document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const calculationTextarea = document.getElementById('calculation');
    const convertBtn = document.getElementById('convertBtn');
    const resetBtn = document.getElementById('resetBtn');
    const reverseBtn = document.getElementById('reverseBtn');

    let isCtoF = true;

    function convertTemperature() {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = parseFloat(fahrenheitInput.value);

        if (isCtoF) {
            if (!isNaN(celsius)) {
                const fahrenheitResult = (celsius * 9/5) + 32;
                fahrenheitInput.value = fahrenheitResult.toFixed(2);
                calculationTextarea.value = `${celsius}°C * (9/5) + 32 = ${fahrenheitResult.toFixed(2)}°F`;
            }
        } else {
            if (!isNaN(fahrenheit)) {
                const celsiusResult = (fahrenheit - 32) * (5/9);
                celsiusInput.value = celsiusResult.toFixed(2);
                calculationTextarea.value = `(${fahrenheit}°F - 32) * (5/9) = ${celsiusResult.toFixed(2)}°C`;
            }
        }
    }

    function reset() {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        calculationTextarea.value = '';
    }

    function toggleConversion() {
        isCtoF = !isCtoF;
        if (isCtoF) {
            convertBtn.textContent = 'Konversi ke Fahrenheit';
        } else {
            convertBtn.textContent = 'Konversi ke Celcius';
        }
    }

    convertBtn.addEventListener('click', convertTemperature);
    resetBtn.addEventListener('click', reset);
    reverseBtn.addEventListener('click', toggleConversion);
});
