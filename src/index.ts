import promptSync from 'prompt-sync';

const prompt = promptSync();


// Zadacha 1

let price: number = parseFloat(prompt('Enter the price of the product: '));
let taxRate: number = parseFloat(prompt('Enter the tax rate: '));
if (price < 0 || taxRate < 0 || taxRate > 100) {
    console.log('Invalid input. Price and tax rate must be non-negative, and tax rate must not exceed 100%.');
} else {
    let totalPrice: number = price + (price * (taxRate / 100));
    console.log(`The total price including tax is: ${totalPrice.toFixed(2)}`);
}

// Zadacha 2

let mark: number = parseFloat(prompt('Enter the mark (0-100): '));
if (mark < 0 || mark > 100) {
    console.log('Invalid input. Mark must be between 0 and 100.');
} else if (mark >= 90) {
    console.log('Grade: A');
}
else if (mark >= 70 && mark < 90) {
    console.log('Grade: B');
}
else if (mark >= 50 && mark < 70) {
    console.log('Grade: C');
}
else {
    console.log('Grade: F');
}




// Zadacha 3

let number: number = parseInt(prompt('Enter a number: '));
let numberString: string = number.toString();
if (numberString.includes('3')) {
    console.log('The number contains the digit 3.');
} else {
    console.log('The number does not contain the digit 3.');
}

// Zadacha 4

let checkNumber: number = parseInt(prompt('Enter a number: '));
if (checkNumber % 3 === 0 && checkNumber % 5 === 0) {
    console.log('The number is divisible by both 3 and 5.');
}
else if (checkNumber % 3 === 0) {
    console.log('The number is divisible by 3.');
}
else if (checkNumber % 5 === 0) {
    console.log('The number is divisible by 5.');
}
else {
    console.log('The number is not divisible by 3 or 5.');
}

// Zadacha 5

const birthYear: number = parseInt(prompt('Enter your birth year: '));
const registrationLogin: string = prompt('Enter your login for registration: ');
const registrationPassword: string = prompt('Enter your password for registration: ');
const currentYear: number = new Date().getFullYear();
const age: number = currentYear - birthYear;

if (age < 18) {
    console.log('You are not eligible to register. You must be at least 18 years old.');
}
else {
    const login: string = prompt('Enter your login: ');
    const password: string = prompt('Enter your password: ');
    if (login === registrationLogin && password === registrationPassword) {
        console.log('Login successful!');
    }
    else {
        console.log('Invalid login or password.');
    }
}

