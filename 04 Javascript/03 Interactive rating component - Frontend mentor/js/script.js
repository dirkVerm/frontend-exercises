// Select DOM elements
const btns = document.querySelectorAll(".component__q__btn");
const submit = document.querySelector(".component__q__submit")

// Const definition
let score = null;

//Add behaviour to score buttons
for (const btn of btns) {
    btn.addEventListener('click', function (e) {
        score = e.target.value;
        for (const btn of btns) {
            btn.classList.remove('selected');
        }
        e.target.classList.add("selected")
    });
};

//Submit button
submit.addEventListener('click', function (e) {
    if (score) {
        document.querySelector('#result').textContent = score;
        document.querySelector('.component').classList.replace('component--fase1', 'component--fase2');
        const el = document.querySelector('.error');
        if (el) el.remove();
    } else {
        const el = document.createElement('div');
        el.textContent = "Please select score first!";
        el.classList.add('error');
        document.querySelector('.component').appendChild(el);
    }
});

