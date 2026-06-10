
const { calculateDiscount, sortInventory,filterProducts } = require("../main.js");

//Task 1:calculateDiscount -positive, negative, and edge cases.
describe("calculateDiscount", () => {
test("applies a valid discount rate", () => {
    expect(calculateDiscount(100,0.10)).toBe(90);
});

test("handles an invalid discount rate gracefully", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
});

test("handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
});
});


// task 2 -filterProducts -positive, negative, and edge cases.
describe("filterProducts", () => {
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
});
// task 3 - sortInventory -positive, negative, and edge cases.
const inventory = [
    { name: "banana", quantity: 3},
    { name: "apple", quantity: 5 },
    { name: "kiwi", quantity: 6 }];

describe("sortInventory", () => {
test("Positive Test Case: Sort inventory - test valid case", () => {
    
    expect(sortInventory(inventory, "name")).toEqual([
  { name: "apple", quantity: 5 },
  { name: "banana", quantity: 3 },
  { name: "kiwi", quantity: 6 }
]);
});



test("Negative Test Case: Sort inventory - test invalid case:", () => {
    
    expect(sortInventory("inventory", " ")).toEqual([]);
});
    
test("Sort inventory - test Edge case with invalid key", () => {
    
    expect(sortInventory(inventory, 1234)).toBe("Invalid input.");
});
 
});