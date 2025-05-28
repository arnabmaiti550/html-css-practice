// console.log("Hello, World!"); console.log("This is a simple JavaScript file.",);

const num = 5;
const str = "Hello, JavaScript!";
// console.log(`
//     This is a multi-line string.
//     The value of num is: ${num}
//     `)

// console.log("The number is: " + num);
// console.log("The number is:", num);

let str2 = "This is another string.";
// console.log(str2);
str2 = 7578;
// console.log("The new value of str2 is:", str2);
// num = 10;

let obj = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zip: "12345"
    },
    isStudent: false
}
// const newObj=obj;
// const newObj = Object.assign({}, obj);

const newObj = { ...obj };
obj.name = "Arnab";

// console.log("Object: ", newObj);

// console.log("Object Keys", Object.keys(obj), "Values", Object.values(obj), "Entries", Object.entries(obj));

// console.log(`Student's name: ${obj.name}, student's age: ${obj.age}, is student: ${obj.isStudent}`);

// for (let i = 0; i < obj.hobbies.length; i++) {
//     console.log(`Hobby ${i + 1}: ${obj.hobbies[i]}`);
// }

// for (const temp of obj.hobbies) {
//     console.log(`Hobby: ${temp}`);
// }

const arrObj = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
]

// for (const item of arrObj) {
//     console.log(`ID: ${item.id}, Name: ${item.name}`);
// }

// const keys = Object.keys(obj);
// const values = Object.values(obj);
// keys.forEach((key, i) => {
//     if (typeof obj[key] == 'object') {
//         console.log("This is an object")
//     }
//     console.log(`Key: ${key}, Value: `, obj[key]);
//     console.log(`Key: ${key}, Value: `, values[i]);
// })


const sayHi = function (name) {
    console.log(`Hello, ${name}!`);
}



sayHi("Alice");

function add(a, b) {
    return a + b;
}

console.log("Sum:", add(5, 10));

const multiply = (a, b) => {
    return a * b;
}

console.log("Product:", multiply(5, 10));

setTimeout(() => {
    console.log("This message is delayed by 1 second.");
}, 1000)

console.log(document.head)
// console.log(document.body);

const list = document.querySelector(".list");
// list.classList.add("active");
// list.classList.remove("active");
console.log(list)
list.style.color = "green";

// list.innerHTML = `
// <li>Item 1</li>
// <li>Item 2</li>
// <li>Item 3</li>
// <li>Item 4</li>`

setTimeout(() => {
    const item = document.querySelector("#first-item");
    item.textContent = "Strwberry";
}, 2000);
const input = document.querySelector("#name");
input.addEventListener("keydown", (e) => {
    console.log("Key", e.key.toLowerCase() == 'e')
    if (e.key.toLowerCase() == 'e') e.preventDefault();
    if (e.target.value)
        console.log("Input value:", e.target.value);
});

function sayValue() {
    const input = document.querySelector("#name");
    // console.log("Input value:", input.value);
    alert("Input value: " + input.value);
    input.value = "";
}