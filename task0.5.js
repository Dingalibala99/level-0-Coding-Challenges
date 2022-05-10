function triangleArea(length1,length2,length3) {
    let semiParimeter = (length1 + length2 + length3)/2
    let area = Math.sqrt(semiParimeter*(semiParimeter - length1)*(semiParimeter - length2)*(semiParimeter - length3))
    return area;
}
console.log(triangleArea(4,5,3));
