// function that checks the inputs of users and validates it
function validateForm(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // validate email if correct
    if (!isValidEmail(email)) {
        displayModal('Please enter a valid email address.');
        event.preventDefault(); // prevent form submission
        return false;
    }

    // validate password if atleast 8 characters long
    if (password.length < 8) {
        displayModal('Password must be at least 8 characters long.');
        event.preventDefault(); // prevent form submission
        return false;
    }

    return true; // if all true, allow submit
}

// function that checks the phone number and validates it
function validateForm2(event) {
    var phoneNumber = document.getElementById('phonenumber').value;

    if (!isValidPhoneNumber(phoneNumber)) {
        displayModal('Phone number must be 11 digits and in "09XX-XXX-XXXX" format.');
        event.preventDefault(); // prevent form submission
        return false;
    }
    
    return true; // if true, allow submit
}

// function that display the message on the div
function displayModal(message) {
    var modal = document.getElementById('validationModal');
    var modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = message;
    modal.style.display = 'block';
}

// function that closes the div
function closeModal() {
    var modal = document.getElementById('validationModal');
    modal.style.display = 'none';
}

// function that validates the email entered
function isValidEmail(email) {
    // validate email format using RegEx
    return /^\S+@(\w+\.)?(\w+\.(com|edu|gov|co|govt)(\.\w+)?)$/.test(email);
}

// function that validates the phone number entered
function isValidPhoneNumber(phoneNumber) {
    // validate phone number format using RegEx
    return /^09\d{2}-\d{3}-\d{4}$/.test(phoneNumber);
}
