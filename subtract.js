function subtract() {
    let firstNumber = document.getElementById(`firstNumber`).value;
    let secondNumber = document.getElementById(`secondNumber`).value;

    let result=(Number(firstNumber-secondNumber));
    document.getElementById(`result`).textContent = result;
}