// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
    if (!isPenceString(penceString)) return "invalid input";
    const penceStringWithoutTrailingP = penceString.substring(
        0,
        penceString.length - 1
    );

    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    const pounds = paddedPenceNumberString.substring(
        0,
        paddedPenceNumberString.length - 2
    );

    const pence = paddedPenceNumberString
        .substring(paddedPenceNumberString.length - 2)
        .padEnd(2, "0");

    return `£${pounds}.${pence}`;
}

function isPenceString(str) {
    if (typeof str !== "string"  || str.slice(-1) != 'p') return false;

    const digits = str.slice(0, -1);
    if(digits === "" || isNaN(Number(digits))) return false;

    return true; 
}
