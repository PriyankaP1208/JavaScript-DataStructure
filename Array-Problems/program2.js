const prompt = require ('prompt-sync')();

let arr= [];
for(let i = 0; i < 10; i++)
{
    let no = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
    arr.push(no);
}
console.log("Array is:" + arr);

for (let i = 0; i < 10; i++) 
{
    for (let j = i + 1; j < 10; j++) 
    {
        if (arr[i] > arr[j]) 
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("Sorted order:" + arr);

console.log("Second Largest:" + arr[1]);
console.log("Second Smallest:" + arr[8]);

