let arr = [];
const root = document.getElementById('winner');

document.getElementById('btnSubmitTowns').addEventListener('click', () => {
    const input = document.getElementById('emails')
    arr.push(input.value);
    input.value = '';
});

document.getElementById('generate').addEventListener('click', () => {
    let num = randomNum();

    if (!arr[num]) {
        num -= 1;
    }

    root.textContent = arr[num];
});

function randomNum() {
    const lenght = arr.length;
    return Math.floor(Math.random() * (lenght + 1));
}