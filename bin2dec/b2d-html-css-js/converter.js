function convertBinary() {
    const binaryInput = document.getElementById('binaryInput').value;
    const result = document.getElementById('result');
    const error = document.getElementById('error');

    if (!/^[01]{1,8}$/.test(binaryInput)) {
        error.textContent = "Invalid binary input. Please enter up to 8 binary digits (0 or 1)";
        result.textContent = '';
        return;
    }

    const decimalEquivalent = parseInt(binaryInput,2);

    result.textContent = `Decimal Equivalent: ${decimalEquivalent}`;
    error.textContent = '';
}