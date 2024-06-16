function filter(a, f) {
  var result = [];
    for (var i = 0; i < a.length; i++) 
    {
    if (f(a[i]))
    {
      result.push(a[i]);
    }
  }
    return result;
}
var filteredArray = filter([1, 2, 3, 4], function(x)
{
  return x % 2 == 1;  
});

console.log(filteredArray);  
