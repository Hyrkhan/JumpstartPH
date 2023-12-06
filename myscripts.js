// function that checks the inputs of users and validates it
function validateForm(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPass = document.getElementById('confirmpassword').value;
    
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

    if (confirmPass != password) {
        displayModal('Password and Confirm Password does not match.');
        event.preventDefault(); // prevent form submission
        return false;
    }

    displayModal2('You have successfully registered your account.');
    event.preventDefault();
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

// function that display the error message on the div
function displayModal(message) {
    var modal = document.getElementById('validationModal');
    var overlay = document.getElementById('overlay');
    var modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = message;
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// function that display the success message on the div
function displayModal2(message) {
    var modal = document.getElementById('validationModal2');
    var overlay = document.getElementById('overlay');
    var modalContent = document.getElementById('modalContent2');
    modalContent.innerHTML = message;
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// function that closes the div
function closeModal() {
    var modal = document.getElementById('validationModal');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// function that closes the div
function closeModal2() {
    var modal = document.getElementById('validationModal2');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
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

/* This is for the index page */

var Industries = {
    "Tourism": {},
    "Data Science": {},
    "Finance & Accounting": {},
    "Engineering": {}
}
var JobLevel = {
    "Entry Level": {},
    "Senior Level": {},
    "Managerial": {}
}
var SalaryRange = {
    "< 10,000": {},
    "< 20,000": {},
    "< 30,000": {},
    "< 40,000": {},
    "> 50,000": {}
}
var SortBy = {
    "Job Title": {},
    "Job Level": {},
    "Salary Range": {},
    "Joblist Time Posted": {}
}
window.onload = function() {
    var SelectedOption1 = document.getElementById("industry");
    var SelectedOption2 = document.getElementById("joblevel");
    var SelectedOption3 = document.getElementById("salaryRange");
    var SelectedOption4 = document.getElementById("jobListingSort");
    for (var industry in Industries) 
    {
        SelectedOption1.options[SelectedOption1.options.length] = new Option(industry, industry);
    }
    for (var level in JobLevel) 
    {
        SelectedOption2.options[SelectedOption2.options.length] = new Option(level, level);
    }
    for (var salary in SalaryRange) 
    {
        SelectedOption3.options[SelectedOption3.options.length] = new Option(salary, salary);
    }
    for (var sort in SortBy) 
    {
        SelectedOption4.options[SelectedOption4.options.length] = new Option(sort, sort);
    }
}