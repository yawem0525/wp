function arrayMin(a)
{
    let i,min=a[0];
    for (i=1 ; i<a.length ; i++)
    {
        if (a[i]<min) min=a[i];
    }

    console.log(min);
}

arrayMin([5,6,7,8,9]);
arrayMin([22,31,47,87,54]);
