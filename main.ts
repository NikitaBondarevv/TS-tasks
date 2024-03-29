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

// 1
interface IName {
  name: string
}

const printNames = <T extends IName>(items: T[]) => {
  items.forEach(item => console.log(item.name));
}

printNames([{ name: 'ook' }]);
printNames([{ age: 2, name: 'ook' }]);
printNames([{ lastName: 'test', name: 'ook' }]);

// 2
type getTextLength = (value: string | { name: string }) => number | { name: string };

const getTextLength: getTextLength = (value) => {
  if (typeof value === "object") return value.name.length;

  return value.length;
}

getTextLength('test');
getTextLength({ name: 'test' });

// 3
type getMiddleArray = <T>(arr: T[]) => number | string | boolean;

const getMiddleArray: getMiddleArray = (arr) => {
  const middleElement = Math.floor(arr.length / 2);
  let result = arr[middleElement];

  if (typeof result === "string") return result + result;
  if (typeof result === "number") return result ** 2;

  return false;
}

getMiddleArray([1, 2, 3]);
getMiddleArray([1, 2, 3, 4]);
getMiddleArray(['a', 'b', 'c']);
getMiddleArray(['a', 'b', 'c', 'd']);
getMiddleArray([{}, {}, {}]);

// 1
interface IResponse<Error, Body> {
  status: { loaded: boolean, error?: Error },
  body?: Body
}

const response1: IResponse<undefined, { users: string[] }> = {
  status: { loaded: true },
  body: {
    users: ['Jhon', 'Donald']
  }
}

const response2: IResponse<{ message: string }, undefined> = {
  status: { loaded: false, error: { message: 'Server does not respond' } },
}

const response3: IResponse<undefined, { name: string, age: number, id: string }> = {
  status: { loaded: true },
  body: {
    name: 'Jhon',
    age: 25,
    id: '6s7df95sd7df',
  }
}
