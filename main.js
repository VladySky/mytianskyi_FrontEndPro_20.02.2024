// Завдання 1
let string='';

for(let i=20; i<=30; i+=0.5){
    string += i===30 ? ` ${i}` : ` ${i},`
}
console.log(string.trim());


// Завдання 2

for (let i=10; i<=100; i+=10){
    let sumery = i * 27;
    console.log(`${i}usd * 27 gnr = ${sumery} grn`)
}

// Завдання 3

let i = 6;
while(i**2 <= 100){
    console.log(i);
    i++
}

