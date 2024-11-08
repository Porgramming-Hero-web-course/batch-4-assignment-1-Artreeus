function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
};


// N:B : I have used chrome to solve this problem 



// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));