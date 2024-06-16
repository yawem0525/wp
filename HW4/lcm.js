function gcd(a, b) {
  while (b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}
function lcm(a, b) {
  // LCM(a, b) = |a * b| / GCD(a, b)
  return Math.abs(a * b) / gcd(a, b);
}
console.log(lcm(48, 180));     
