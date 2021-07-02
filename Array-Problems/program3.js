const prompt = require ('prompt-sync')();

let no = prompt("Enter number:");
let flag;

console.log("Prime Factors are:");

for(let i = 2; i < no; i++)
{
    if(no % i == 0)
    {
        flag = 1;
        for(let j = 2; j <= i/2; j++)
        {
            if(i % j == 0)
            {
                flag = 0;
                break;
            }
        }
        if(flag == 1)
        {
            console.log(i);
        }
    }
}