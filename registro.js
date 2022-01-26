const questions = [
    { question: 'Ingresa tu primer nombre',},
    { question: 'Ingresa tu primer apellido' },
    { question: 'Ingresa tu e-mail', pattern: /\S+@\S+\.\S+/ },
    { question: 'Crea tu password', type: "password" }];

    // async function postData(url = '', data = {}) {
    //     // Default options are marked with *
    //     const response = await fetch(url, {
    //       method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //       mode: 'cors', // no-cors, *cors, same-origin
    //       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //       credentials: 'same-origin', // include, *same-origin, omit
    //       headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       redirect: 'follow', // manual, *follow, error
    //       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //       body: JSON.stringify(data) // body data type must match "Content-Type" header
    //     });
    //     return response.json(); // parses JSON response into native JavaScript objects
    //   }



const shakeTime = 3;
const switchTime = 200;
let position = 0;
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// Para poder validar la cantidad de de caracteres que puedo ingresar en cada uno de los campos y activen los botones de dar siguiente

document.addEventListener('DOMContentLoaded', getQuestion);
nextBtn.addEventListener('click', validate);
prevBtn.addEventListener('click', ()=>{position--;getQuestion()});
inputField.addEventListener('keyup', e => { 
    if (e.keyCode == 13){
        validate()
    } 
});

function validate() {
    if (!inputField.value.match(questions[position].pattern)) {
        inputFail();
    } else {
        inputPass();
    }
}

function trans(x, y) {
    formBox.style.transform = `translate(${x}px, ${y}px)`;

}

function inputPass() {
    formBox.className = '';
    console.log('passed')
    questions[position].answer = inputField.value;
    position++;
    if (questions[position]) {
        hideQuestion();
        getQuestion();
    } else {
        hideQuestion();
        formBox.className = 'close';
        progress.style.width = '100%';
        formComplete();
    }
}
function inputFail() {
    formBox.className = 'error';
    console.log('failed')
    setTimeout(() => { trans(10, 0); setTimeout(() => trans(0, 0), 70) }, 50)
    inputField.focus();
}

function showQuestion() {
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = (position * 100) / questions.length+'%';
}
function getQuestion() {
    inputLabel.innerHTML = questions[position].question;
    inputField.type = questions[position].type || 'text';
    inputField.value = questions[position].answer || '';
    inputField.focus();
    progress.style.width = (position * 100) / questions.length + '%';
    prevBtn.className = position ? 'far fa-arrow-alt-circle-left' : 'far fa-user';
    showQuestion();
}


function hideQuestion() {
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = 'none';
    inputGroup.style.border = null;

}



function formComplete() {
    const h1 = document.createElement('h1');
    h1.classList.add('end');
    h1.appendChild(
        document.createTextNode(
            `Gracias ${questions[0].answer
            } !!! Ya estas registrado :)`
        )
    );
    setTimeout(() => {
        formBox.parentElement.appendChild(h1);
        setTimeout(() => (h1.style.opacity = 1), 50);
    }, 1000);
}
