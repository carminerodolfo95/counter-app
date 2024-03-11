const body = document.body;

const btnContainer = document.createElement("div");
body.append(btnContainer);
btnContainer.className = "btn_container";

const startLabel = document.createElement("label");
startLabel.className = "start-label";
startLabel.textContent = '0';
btnContainer.prepend(startLabel);

const btnReset = document.createElement("button");
btnReset.className = "button btn-reset";
btnReset.textContent = "AC";
btnContainer.appendChild(btnReset);

const btnDecrease = document.createElement("button");
btnDecrease.className = "button btn-decrease";
btnDecrease.textContent = "-";
btnContainer.appendChild(btnDecrease);

const btnIncrease = document.createElement("button");
btnIncrease.className = "button btn-increase";
btnIncrease.textContent = "+";
btnContainer.appendChild(btnIncrease);

const btnAdd = document.createElement("button");
btnAdd.className = "button btn-add";
btnAdd.textContent = "+100";
btnContainer.appendChild(btnAdd);

const btnSub = document.createElement("button");
btnSub.className = "button btn-sub";
btnSub.textContent = "-100";
btnContainer.appendChild(btnSub);


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



