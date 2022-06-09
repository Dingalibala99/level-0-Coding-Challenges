function triangleArea(length1,length2,length3) {
    const semiPerimeter = (length1 + length2 + length3)/2
    const area = Math.sqrt(semiPerimeter*(semiPerimeter - length1)*(semiPerimeter - length2)*(semiPerimeter - length3))
    return area;
}
console.log(triangleArea(4,5,3));
