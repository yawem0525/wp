function matrixMul(x1,x2,y1,y2){
    let z1 = (x1 * y1) + (x2 * y1)
    let z2 = (x1 * y2) + (x2 * y2)
    return [z1,z2]
}
console.log("matrixMul(4,5,7,2) = ",matrixMul(4,5,7,2))
