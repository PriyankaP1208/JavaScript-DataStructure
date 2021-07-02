const prompt = require ('prompt-sync')();

let arr= [];
for(let i = 0; i < 10; i++)
{
    let no = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
    arr.push(no);
}
console.log("Array is:" + arr);

let maxNum = arr[0];
let minNum = arr[0];
let secondMax = arr[0];
let secondMin = arr[0];

for(let i=0; i < arr.length; i++)
{
    if(arr[i] > maxNum)
    {
        secondMax = maxNum;
        maxNum = arr[i];
    }
    else if(arr[i] > secondMax)
    {
        secondMax = arr[i];
    }
    if(arr[i] < minNum)
    {
        secondMin = minNum;
        minNum = arr[i];
    }
    else if(arr[i] < secondMin)
    {
        secondMin = arr[i];
    }
}

console.log("Second maximum number:" + secondMax);
console.log("Second minimum number:" + secondMin);