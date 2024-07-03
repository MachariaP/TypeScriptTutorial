// arrays
let names = ['Alice', 'Bob', 'Charlie'];

names.push('Dave');
//names.push(3);
//names[0] = 3;

let numbers = [10, 20, 30, 40];
numbers.push(25);
//numbers.push('shaun');
numbers[1] = 5;

let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
mixed[3] = 'yuna';


// Objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

ninja.age = 50;
ninja.name = 'ryu';
//ninja.age = '30';
//ninja.skills = ['fighting', 'sneaking'];

ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};

console.log(names);
console.log();
console.log(numbers);
console.log();
console.log(mixed);
console.log();
console.log(ninja);