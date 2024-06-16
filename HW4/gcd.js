function gcd(a, b) {
  while (b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}
console.log(gcd(48, 18));

