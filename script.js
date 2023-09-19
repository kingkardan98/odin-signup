document.addEventListener('DOMContentLoaded', () => {
    function addErrorClass(passwordField, confirmField) {
        passwordField.classList.add('error');
        confirmField.classList.add('error');
    }

    function addGoodClass(passwordField, confirmField) {
        passwordField.classList.add('good');
        confirmField.classList.add('good');
    }

    function addMessages(alertMessages, message, textClass) {
        alertMessages.classList.add(textClass);
        alertMessages.textContent = message;
    }

    function checkSymbols(password, symbols) {
        for (let i = 0; i < password.length; i++){
            let char = password[i];
            for (let j = 0; j < symbols.length; j++) {
                if (char === symbols[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    function checkLength(password) {
        return password.length >= 8;
    }

    let button = document.querySelector('#createAccount');

    let symbols = ['@', ',', '.', '!', '#', '°', '?', '^'];

    button.addEventListener('click', () => {
        // We gather all the fields we need to check / edit.
        let passwordField = document.querySelector('#password');
        let password = passwordField.value;
        let confirmField = document.querySelector('#confirmPassword');
        let confirm = confirmField.value;
        let errorMessages = document.querySelector('#messages');

        // Every error creates a custom message.
        if (password === '' || confirm === ''){
            // Check for empty fields.
            addErrorClass(passwordField, confirmField);
            addMessages(errorMessages, '× Fields are required.', 'errorMessages');
        } else if (password !== confirm) {
            // Check for different fields.
            addErrorClass(passwordField, confirmField);
            addMessages(errorMessages, '× Passwords must match.', 'errorMessages');
        } else if (!checkSymbols(password, symbols) || !checkLength(password)) {
            // Check for symbols and length.
            addErrorClass(passwordField, confirmField);
            addMessages(errorMessages, '× Password not strong.', 'errorMessages')
        } else {
            addGoodClass(passwordField, confirmField);
            addMessages(errorMessages, '✓ Password is valid!', 'goodMessages');
        }
    })
})