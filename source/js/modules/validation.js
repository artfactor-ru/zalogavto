// Валидация форм




function prevent(evt) {
    evt.preventDefault();
}
let forms = document.querySelectorAll('form');
forms.forEach((form) => {
    let inputwrap = form.querySelectorAll('.input-label');
    let btnSubmit = form.querySelector('.input-submit');

    let flagMadeValidation = false;

    function inputValidation() {

        inputwrap.forEach((element) => {

            let input = element.querySelector('.input');

            let validMessage = "";

            let messageError = document.createElement('div');
            messageError.className = "alert";
            if (!input.checkValidity()) {

                if (!input.value) {
                    validMessage = "Поле обязательно для заполнения";
                    element.classList.add('error');
                    messageError.innerHTML = validMessage;
                    element.append(messageError)

                } else {
                    validMessage = input.dataset.title;

                    element.classList.add('error');
                    messageError.innerHTML = validMessage;
                    element.append(messageError)

                }

                if (form.querySelector('.error')) {
                    form.addEventListener('submit', prevent)

                    btnSubmit.addEventListener('submit', prevent)

                }

            } else {
                element.classList.remove('error');
                if (element.querySelector('.alert')) {
                    element.querySelector('.alert').remove();
                }
                if (!form.querySelector('.error')) {


                    btnSubmit.removeEventListener('submit', prevent)

                    form.removeEventListener('submit', prevent)
                }

            }
        })
    }
    if (btnSubmit) {
        btnSubmit.addEventListener('click', function() {
            inputValidation()
            flagMadeValidation = true;
        })
    }


    inputwrap.forEach((element) => {
        let input = element.querySelector('.input');
        input.addEventListener('blur', function() {
            if (flagMadeValidation) {
                inputValidation()
            }
        })
    });
})