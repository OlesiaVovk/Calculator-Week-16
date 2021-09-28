const wholeCar = document.getElementById("services_0");
const electroFuel = document.getElementById("fuelType_2");
const carAge = document.getElementById("carAge_0");
const entityRecipient = document.getElementById("recipientTypeEntity");
const indRecipient = document.getElementById("recipientTypeIndividual");
const nextDivs = document.getElementById("nextDivs");
const volume = document.getElementById("volume");
const custom = document.getElementById("custom");
const handles = document.querySelectorAll("form input");


for (let handle of handles) {
    handle.onchange = check;
}

function check() {
    if (!wholeCar.checked) {
        nextDivs.style.display = "none";
        nextDivs.classList.add("invisible");
    } else {
        nextDivs.style.display = "block";
        nextDivs.classList.remove("invisible");
    }
    if (electroFuel.checked) {
        volume.style.display = "none";
        volume.classList.add("invisible");
    } else {
        volume.style.display = "block";
        volume.classList.remove("invisible");
    }
    if (indRecipient.checked) {
        custom.style.display = "none";
        custom.classList.add("invisible");
    } else {
        custom.style.display = "block";
        custom.classList.remove("invisible");
    }
    if (carAge.checked) {
        entityRecipient.disabled = true;
        nextDivs.classList.add("disabled");
        custom.style.display = "none";
        custom.classList.add("invisible");
        indRecipient.checked = true;
    } else {
        entityRecipient.disabled = false;
        custom.classList.remove("disabled");

    }
}
//функция расчета стоимости автомобиля
function getThePrice() {
    document.getElementById("result").innerHTML = "";
    const selected = document.querySelectorAll(
        "form input:checked:not(.invisible *), form input[type='text']:not(.invisible *), form select");
    let sum = 0;
    for (let element of selected) {
        sum += Number(element.value);
    }
    document.getElementById("result").innerHTML+=`Стоимость вашего автомобиля ¥ ${sum}`;
}

document.getElementById("getPrice").onclick = getThePrice;


