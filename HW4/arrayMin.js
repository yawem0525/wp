function arrayMin(n)
{
    let i,min=n[0];
    for (i=1 ; i<n.length ; i++)
    {
        if (n[i]<min) min=n[i];
    }

    console.log(min);
}

arrayMin([5,6,7,8,9]);
arrayMin([22,31,47,87,54]);
