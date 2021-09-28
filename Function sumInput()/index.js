/*Напишите функцию `sumInput()`, которая:
- Просит пользователя ввести значения, используя `prompt` и сохраняет их в массив
- Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена»
- Выводит получившийся массив в отсортированном по возрастанию виде
- Подсчитывает и возвращает сумму элементов массива*/

function sumInput() {
    let arr = [];
    for (;;) {
        let input = prompt("Введите число", "");
        if (input != "" && !isNaN(input) && input != null) {
            arr.push(Number(input));
        } else {
            break;
        }
    }
    alert(arr.sort());
    let arrsum = 0;
    for (let item of arr) {
        arrsum += item;
    }
    alert(arrsum);
}

document.getElementById("btn").onclick = sumInput;