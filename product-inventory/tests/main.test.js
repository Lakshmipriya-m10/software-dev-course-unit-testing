
const  { calculateDiscount, filterProducts, sortInventory } = require('../main.js');

test("applies a valid discount rate", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
});

test("handles an invalid discount rate gracefully", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
});

test("handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
});

test("Valid Filtered array will be", () => {
 
const productPrice = [20, 30, 40, 60, 80, 100, 450];

const highPrice = filterProducts(productPrice, price => price > 100);

expect(highPrice[0]).toBe(450);

});

test("invalid case with no item found", () => {
 
const productPrice = [20, 30, -40, 60, 80];

const highPrice = filterProducts(productPrice, price => price < 0);

expect(highPrice[0]).toBe(-40);

});

test("handles edge case with no item found", () => {
 
const productPrice = ["apple"];

const highPrice = filterProducts(productPrice, price => price > 200);

expect(highPrice[0]).toBe(undefined);

});

