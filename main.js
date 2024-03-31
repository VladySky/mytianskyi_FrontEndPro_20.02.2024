function createSum() {
    let total = 0;
    function sum(num) {
        total += num;
        return total;
    }
    return sum;
}

let sum = createSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));