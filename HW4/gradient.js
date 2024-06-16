function gradient(f, p, h = 1e-5) {
  if (!Array.isArray(p)) {
    throw new Error('p should be an array');
  }

  const grad = new Array(p.length);

  for (let i = 0; i < p.length; i++) {
    const p1 = p.slice();
    const p2 = p.slice();

    p1[i] += h;
    p2[i] -= h;

    grad[i] = (f(p1) - f(p2)) / (2 * h);
  }

  return grad;
}


function testFunction(point) {
  return point[0] * point[0] + point[1] * point[1];
}

console.log(gradient(testFunction, [3, 4]));  // 输出 [6, 8]
