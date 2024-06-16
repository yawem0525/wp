function arrayMin(n)
{
    let i,min=n[0];
    for (i=1 ; i<n.length ; i++)
    {
        if (n[i]<min) min=n[i];
    }

    console.log(min);
}

arrayMin([1,2,3,4,5]);
arrayMin([25,17,67,47,99]);
