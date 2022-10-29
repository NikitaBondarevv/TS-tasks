const profile: { name: string, age: number, single: boolean } = { name: "Bob", age: 25, single: true };
const tree: { high: boolean, leaves: number, trunk: boolean, title: string } = { high: true, leaves: 1265, trunk: true, title: "Aspen"};

function reverseString(text: string) {
  return text.split("").reverse().join("");
}

function getProductInfo(product?: { title: string, price: number }) {
  if(!product) return "There is no product";

  return `The ${product.title} price is ${product.price}`; 
}

getProductInfo();
getProductInfo({ title: 'toy', price: 1.5 });

// 1
interface Address {
  city: string
  country: string
  outside?: string
  index: number | string
}

// 2
/*interface User {
  name: string
  age: number
  mail: string
  address?: Address
  gender?: "f" | "m"
  role: "guest" | "manager" | "staff" | "admin" | "owner"
}*/

// 3
interface User {
  name: string
  age: number
}

interface Client {
  title: string
  id: string
}

function getInfo(data: User | Client) {
  if ("name" in data) console.log(data.name);
  else console.log(data.title);
}

getInfo({name: "Nikita", age: 21 });
getInfo({title: "Nikita", id: "1" });

// 4
/*interface Product {
  price: number
  id: number
}

interface Toy extends Product {
  name: string
}

interface Electronics extends Product {
  children: boolean
}*/

type Product = {
  price: number,
  id: number
}

type Toy = Product & {
  name: string
}

type Electronics = Product & {
  children: boolean
}
