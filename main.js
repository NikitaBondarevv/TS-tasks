"use strict";
const profile = { name: "Bob", age: 25, single: true };
const tree = { high: true, leaves: 1265, trunk: true, title: "Aspen" };
function reverseString(text) {
    return text.split("").reverse().join("");
}
function getProductInfo(product) {
    if (!product)
        return "There is no product";
    return `The ${product.title} price is ${product.price}`;
}
getProductInfo();
getProductInfo({ title: 'toy', price: 1.5 });
function getInfo(data) {
    if ("name" in data)
        console.log(data.name);
    else
        console.log(data.title);
}
getInfo({ name: "Nikita", age: 21 });
getInfo({ title: "Nikita", id: "1" });
