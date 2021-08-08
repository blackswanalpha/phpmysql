function validateForm() {
    var username = document.forms["myForm"]["client"];
    var food = document.forms["myForm"]["food"];
    var price = document.forms["myForm"]["food"];

    const usernameValue = username.value.trim();
    const passwordValue = food.value.trim();
    const priceValue = price.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);


    }
    if (priceValue === '') {
        setErrorFor(price, 'Password cannot be blank');
    } else {
        setSuccessFor(price);
    }


}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-grp error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-grp success';
}