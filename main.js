const array = [1, 2, 3, 4, 5, 6, 7];
const itemForRemove = +(prompt("Який елемент ти хочеш видалити з масиву?"));

function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        return array.splice(index, 1);
    }
    return alert('Неправильне число або знак')
}

removeElement(array, itemForRemove);
console.log(array);