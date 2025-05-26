console.log("Hello, World!"); console.log("This is a simple JavaScript file.",);

const num = 5;
const str = "Hello, JavaScript!";
console.log(`
    This is a multi-line string.
    The value of num is: ${num}
    `)

console.log("The number is: " + num);
console.log("The number is:", num);

let str2 = "This is another string.";
console.log(str2);
str2 = 7578;
console.log("The new value of str2 is:", str2);
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
console.log("Object: ", obj.name);

console.log(`Student's name: ${obj.name}, student's age: ${obj.age}, is student: ${obj.isStudent}`);

for (let i = 0; i < obj.hobbies.length; i++) {
    console.log(`Hobby ${i + 1}: ${obj.hobbies[i]}`);
}

for (const temp of obj.hobbies) {
    console.log(`Hobby: ${temp}`);
}

const arrObj = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
]

for (const item of arrObj) {
    console.log(`ID: ${item.id}, Name: ${item.name}`);
}