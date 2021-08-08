		// const form = document.getElementById('form');
		// const username = document.getElementById('name');

		// const password = document.getElementById('password');

		// form.addEventListener('submit', e => {
		//     e.preventDefault();

		//     checkInputs();

		// });

		// function checkInputs() {
		//     // trim to remove the whitespaces
		//     const usernameValue = username.value.trim();

		//     const passwordValue = password.value.trim();

		//     if (usernameValue === '') {
		//         setErrorFor(username, 'Username cannot be blank');
		//     } else {
		//         setSuccessFor(username);
		//     }

		//     if (passwordValue === '') {
		//         setErrorFor(password, 'Password cannot be blank');
		//     } else {
		//         setSuccessFor(password);
		//     }


		// }


		// function setErrorFor(input, message) {
		//     const formControl = input.parentElement;
		//     const small = formControl.querySelector('small');
		//     formControl.className = 'form-grp error';
		//     small.innerText = message;
		// }

		// function setSuccessFor(input) {
		//     const formControl = input.parentElement;
		//     formControl.className = 'form-grp success';
		// }

		function validateForm() {
		    var username = document.forms["myForm"]["uname"];
		    var password = document.forms["myForm"]["password"];

		    const usernameValue = username.value.trim();
		    const passwordValue = password.value.trim();

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