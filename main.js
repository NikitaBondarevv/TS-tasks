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
const printNames = (items) => {
    items.forEach(item => console.log(item.name));
};
printNames([{ name: 'ook' }]);
printNames([{ age: 2, name: 'ook' }]);
printNames([{ lastName: 'test', name: 'ook' }]);
const getTextLength = (value) => {
    if (typeof value === "object")
        return value.name.length;
    return value.length;
};
getTextLength('test');
getTextLength({ name: 'test' });
// 3
const getMiddleArray = (arr) => {
    const middleElement = Math.floor(arr.length / 2);
    let result = arr[middleElement];
    if (typeof result === "string")
        return result += result;
    if (typeof result === "number")
        return result += result;
    return false;
};
getMiddleArray([1, 2, 3]);
getMiddleArray([1, 2, 3, 4]);
getMiddleArray(['a', 'b', 'c']);
getMiddleArray(['a', 'b', 'c', 'd']);
getMiddleArray([{}, {}, {}]);
