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
    // validate email using RegEx
    return /\S+@\S+\.\S+/.test(email);
}