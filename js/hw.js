let celsius = 36;
let fahrenheit = (celsius / 9) * 5;
console.log(fahrenheit);

let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth, minutesInMonth);

const health = 100;
const energy = 100;
const damage = 25;
console.log(health - damage, energy - damage);
// Створити змінну totalPrice для зберігання суми покупки в магазині. Застосувати знижку discount в розмірі 10% до цієї суми за допомогою оператора множення. Результат зберегти в змінній discountedPrice та вивести результат в консоль.
const totalPrice = 100;
const discount = 0.1;
const discountedPrice = totalPrice - totalPrice * discount;
console.log(discountedPrice);

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

// Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число. Результат зберегти в змінній parsedFloat та вивести результат в консоль.
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

// Створити змінну const intString = "123" для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній parsedIntта вивести результат в консоль.
const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt);

const Number = 300;
const sqrtNumber = Math.sqrt(300);
console.log(sqrtNumber);

const integer = 42;
const stringNumber = "256";
const Int = parseInt(stringNumber);
console.log(Int);
const convertedInt = integer.toString();
console.log(convertedInt);
