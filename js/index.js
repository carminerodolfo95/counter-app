const btnDecrease = document.getElementById("btn-decrease");
const btnIncrease = document.getElementById("btn-increase");
const btnReset = document.getElementById("btn-reset");
const startLabel = document.getElementById("start-label");
const btnAdd = document.getElementById("btn-add");
const btnSub = document.getElementById("btn-sub");

let count = 0;

btnDecrease.onclick = function() {
    count--;
    startLabel.textContent = count;
}

btnIncrease.onclick = function() {
    count++;
    startLabel.textContent = count;
}

btnReset.onclick = function() {
    count = 0;
    startLabel.textContent = count;
}

btnAdd.onclick = function() {
    count += 100;
    startLabel.textContent = count;
}

btnSub.onclick = function() {
    count -= 100;
    startLabel.textContent = count;
}




