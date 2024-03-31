function deg(num, degree) {
    if (degree === 0) {
        return 1;
    }
    return num * deg(num, degree - 1);
}

let result = deg(2, 4);
console.log(result);

result = deg(3, 3);
console.log(result);