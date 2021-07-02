let dice = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);
let count = 0;

while (count != 10) {
    let die = Math.floor(Math.random() * 6) + 1;
    count = add(die);
}
console.log(dice);

let max = Math.max(...dice.values());
dice.forEach((value, key) => {
    if (value == max) {
        console.log(key + " is occurring maximum number of times that is: " + value + " times");
    }
})

let min = Math.min(...dice.values())
dice.forEach((value, key) => {
    if (value == min) {
        console.log(key + " is occurring minimum number of times that is: " + value + " times");
    }
})

function add(num) {
    var value = dice.get(num);
    value++;
    dice.set(num, value);
    return value;
}