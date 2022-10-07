const form = document.getElementById('formval');
const form1 = document.getElementById('formloginval');
const username = document.getElementById('un');
const email = document.getElementById('em');
const password = document.getElementById('pw');
const password2 = document.getElementById('cpw');
const username2 = document.getElementById('un1');
const password3=document.getElementById('pass3');

form1.addEventListener('submit', e => {

    validateInputs1();
})





form.addEventListener('submit', e => {

    validateInputs();
});

const setError = (element, message) => {
    const fgp = element.parentElement;
    const errorDisplay = fgp.querySelector('.error');

    errorDisplay.innerText = message;
    fgp.classList.add('error');
    fgp.classList.remove('success')
}

const setSuccess = element => {
    const fgp= element.parentElement;
    const errorDisplay = fgp.querySelector('.error');

    errorDisplay.innerText = '';
    fgp.classList.add('success');
    fgp.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''|| usernameValue.length<=6) {
        setError(username, 'Username must be atleast 8 characters');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
const validateInputs1 = () => {
    const username2Value = username2.value.trim();
    const password3Value = password3.value.trim();
     console.log(username2Value);
    if(username2Value === ''|| username2Value.length<=6) {
        setError(username2, 'Username is invalid');
    } else {
        setSuccess(username2);
    }

    

    if(password3Value === '') {
        setError(password, 'Password is invalid');
    } else if (password3Value.length < 8) {
        setError(password3, 'Password is invalid')
    } else {
        setSuccess(password3);
    }
};
