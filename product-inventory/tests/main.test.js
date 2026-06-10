
const { calculateDiscount, sortInventory,filterProducts } = require("../main.js");

//Task 1:calculateDiscount -positive, negative, and edge cases.
test("applies a valid discount rate", () => {
    expect(calculateDiscount(100,0.10)).toBe(90);
});

test("handles an invalid discount rate gracefully", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
});

test("handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
});


// task 2 -filterProducts -positive, negative, and edge cases.
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

// task 3 - sortInventory -positive, negative, and edge cases.
const inventory = [
    { name: "bella", category: "project Developer" },
    { name: "ani", category: "frontEnd Developer" },
    { name: "nancy", category: "dataAnalyst" }]

test("Sort inventory - test valid case", () => {
    console.log(sortInventory(inventory, "name"));
    expect(sortInventory(inventory, "name")).toEqual
    ([
        { name: "ani", category: "frontEnd Developer" },
        { name: "bella", category: "project Developer" },
        { name: "nancy", category: "dataAnalyst" }
    ]);
});


test("Sort inventory - test invalid case", () => {
    console.log(sortInventory(inventory, "age"));
    expect(sortInventory(inventory, "name")).toBe(0);
});
    
test("Sort inventory - test Edge case", () => {
    console.log(sortInventory(inventory, ""));
    expect(sortInventory(inventory, "name")).toBe(0);
});
    
