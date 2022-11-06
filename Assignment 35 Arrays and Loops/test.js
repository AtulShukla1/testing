const ages = [19,22,19,24,20,25,26,24,25,24];

let ans = ages[0];

// let min = 0;
for(let i=0; i<ages.length; i++)
{
    if(ages[i]<ans)
    {
        ans = ages[i];
    }
}
console.log(ans);