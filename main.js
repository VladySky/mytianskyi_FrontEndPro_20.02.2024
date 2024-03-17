let numbers = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Завдання 1
const sumNumbers = numbers.reduce(function(sum, current) {
    return sum + current;
}, 0);

console.log(`Сума всих цифр в масиві ${sumNumbers}`);

const positiveNumbers = numbers.filter ((number) => number > 0);

console.log(`Кількість позитивних елементів в масиві ${positiveNumbers.length }`);

//Завдання 2
const{minElement, minIndex} = numbers.reduce((acc, current, index) => {
    if (current < acc.minElement) {
        return {minElement: current, minIndex: index};
    } else {
        return acc;
    }
}, {minElement: numbers[0], minIndex: 0});

console.log(`Мінімальний елемент масиву: ${minElement}, його порядковий номер ${minIndex}`);

//Завдання 3
const {maxElement, maxIndex} = numbers.reduce((acc, current, index) => {
    if (current > acc.maxElement) {
        return {maxElement: current, maxIndex: index};
    } else {
        return acc;
    }
}, {maxElement: numbers[0], maxIndex: 0});

console.log(`Mаксимальний елемент масиву: ${maxElement}, його порядковий номер ${maxIndex}`);

//Завдання 4

const negativeNambers = numbers.filter(function(num){
    return num < 0;
});
console.log(`Кількість негативних елементів ${negativeNambers.length}`)

//Завдання 5

const NoPositivePair = positiveNumbers.filter(function(element){
    return element % 2 !== 0;
})
console.log(`Кількість непарних позитивних елементів ${NoPositivePair.length}`);

//Завдання 6

const positivePair = positiveNumbers.filter(function(element){
    return element % 2 == 0;
})
console.log(`Кількість парних позитивних елементів ${positivePair.length}`);

//Завдання 7

const positivePairSum = positivePair.reduce(function(pSum, pCurrent){
    return pSum + pCurrent;
});
console.log(`Cумма парних-позитивних елементів ${positivePairSum}`);

//Завдання 8

const NoPositivePairSum = NoPositivePair.reduce(function(pnSum, pnCurrent){
    return pnSum + pnCurrent;
});
console.log(`Cумма непарних-позитивних елементів ${NoPositivePair}`);

//Завдання 9
const positiveNambersSumery = positiveNumbers.reduce(function(sum, sum2){
    return sum * sum2;
});
console.log(`Добуток позитивних елементів ${positiveNambersSumery}`);

//Завдання 10

const maxElementNumbers = Math.max(...numbers);
numbers = numbers.map(elementArr => elementArr === maxElementNumbers ? elementArr : 0)
console.log(`${numbers}. Найбільше число серед елементів масиву ${maxElementNumbers}, інші просто 0`);