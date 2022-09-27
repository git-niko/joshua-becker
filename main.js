"use strict";

/* 
    Content for: Joshua Becker - GIT417 Final Project
    Author: Nicole Peterson 
    
    This website was created to practice skills 
    learned during academic instruction. 
*/

// ---------------------------------------
// ----------- Light/Dark Mode -----------
// ---------------------------------------

function changeMode() {
    let root = document.documentElement;
    let body = document.querySelector("body");
    let lightSvg = document.getElementById("light");
    let darkSvg = document.getElementById("dark");

    // If user clicks on light mode button, change variable properties
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        darkSvg.classList.remove("hidden");
        lightSvg.classList.add("hidden");
        root.style.setProperty("--body-background-color", "var(--white-ish)");
        root.style.setProperty("--skip-link-color", "var(--raisin-black)");
        root.style.setProperty("--text-color", "var(--raisin-black)");
        root.style.setProperty("--header-background-img", "url(./images/white-background-large.jpg)");
        root.style.setProperty("--nav-links", "var(--raisin-black)");
        root.style.setProperty("--h1-color", "var(--raisin-black)");
        root.style.setProperty("--h2-h3-color", "var(--raisin-black)");
        root.style.setProperty("--books-background-color", "var(--light-tan)");
        root.style.setProperty("--border-color", "var(--raisin-black)");
        root.style.setProperty("--outline-color", "var(--raisin-black)");
        root.style.setProperty("--submit-button", "var(--light-tan)");
        root.style.setProperty("--submit-button-hover", "var(--tan)");
        root.style.setProperty("--social-media-stroke", "var(--raisin-black)");
        root.style.setProperty("--social-media-fill", "var(--tan)");
        root.style.setProperty("--shadow", "var(--box-shadow-dark)");
    } else { // If user clicks on dark mode button, change variable properties
        body.classList.add("dark-mode");
        darkSvg.classList.add("hidden");
        lightSvg.classList.remove("hidden");
        root.style.setProperty("--body-background-color", "var(--dark-gray)");
        root.style.setProperty("--skip-link-color", "var(--tan)");
        root.style.setProperty("--text-color", "var(--white-ish)");
        root.style.setProperty("--header-background-img", "url(./images/black-background-large.jpg)");
        root.style.setProperty("--nav-links", "var(--tan)");
        root.style.setProperty("--h1-color", "var(--tan)");
        root.style.setProperty("--h2-h3-color", "var(--tan)");
        root.style.setProperty("--books-background-color", "var(--deep-blue)");
        root.style.setProperty("--border-color", "var(--tan)");
        root.style.setProperty("--outline-color", "var(--tan)");
        root.style.setProperty("--submit-button", "var(--tan)");
        root.style.setProperty("--submit-button-hover", "var(--light-tan)");
        root.style.setProperty("--social-media-stroke", "var(--tan)");
        root.style.setProperty("--social-media-fill", "var(--raisin-black)");
        root.style.setProperty("--shadow", "var(--box-shadow-light)");
    }
}


// ---------------------------------------
// ---------- Product Switcher -----------
// ---------------------------------------

function productOne() {
    // Grab all the books
    let book1 = document.getElementById("book1");
    let book2 = document.getElementById("book2");
    let book3 = document.getElementById("book3");

    // Display book one
    book1.classList.remove("hidden");
    book1.classList.add("grid");

    // Hide books two and three
    book2.classList.remove("grid");
    book3.classList.remove("grid");

    book2.classList.add("hidden");
    book3.classList.add("hidden");
}

function productTwo() {

    // Grab all the books
    let book1 = document.getElementById("book1");
    let book2 = document.getElementById("book2");
    let book3 = document.getElementById("book3");

    // Display book two
    book2.classList.remove("hidden");
    book2.classList.add("grid");

    // Hide books one and three
    book1.classList.remove("grid");
    book3.classList.remove("grid");

    book1.classList.add("hidden");
    book3.classList.add("hidden");
}

function productThree() {

    // Grab all the books
    let book1 = document.getElementById("book1");
    let book2 = document.getElementById("book2");
    let book3 = document.getElementById("book3");

    // Display book three
    book3.classList.remove("hidden");
    book3.classList.add("grid");

    // Hide books one and three
    book1.classList.remove("grid");
    book2.classList.remove("grid");

    book1.classList.add("hidden");
    book2.classList.add("hidden");
}


// ---------------------------------------
// ---------- Form Validation ------------
// ---------------------------------------

// Create object literal and return string of key's values
let newUser = {
    name: "",
    prefContact: "",
    contactData: "",
    userMessage: "",
    getUser() {
        return `Thank you for reaching out! We'll get back to you within 1&ndash;2 business days. Here is the information we've received:<br><br><strong>Full Name: </strong>${this.name}<br><strong>${this.prefContact}: </strong>${this.contactData}<br><strong>Message: </strong>${this.userMessage}`;
    }
}

function formValidation(e) {
    // Prevent default form submission
    e.preventDefault();

    // Grab contact form, error message spans, and radio buttons
    let contactForm = document.getElementById("contactForm");
    let errorMsg = document.querySelectorAll(".errorMsg");
    let prefEmail = document.getElementById("prefEmail");
    let prefPhone = document.getElementById("prefPhone");

    // Regex for email and phone number (10 digits, accepts () around area code, and doesn't allow preceding 1 as country code)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    const phoneRegex = /(?:(?:(\s*\(?([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\)?\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/;

    // Hold the preferred contact method & email or phone value for display
    let contactPref = "";
    let contactInfo = "";

    // Form validity tracker
    let isValid = true;

    // Clear out input error styles
    contactForm.fullName.classList.remove("errorInput");
    contactForm.email.classList.remove("errorInput");
    contactForm.phone.classList.remove("errorInput");
    contactForm.message.classList.remove("errorInput");

    // Hide the error message spans
    errorMsg.forEach(function (span) {
        span.classList.add("visibilityHidden");
        span.classList.remove("visibilityShow");
    });

    // Hide the formConfirmation that displays user info after submission
    formConfirmation.classList.remove("visibilityShow");
    formConfirmation.classList.add("visibilityHidden");


    // Check if full name input blank
    if (contactForm.fullName.value === "") {
        contactForm.fullName.classList.add("errorInput");
        contactForm.fullName.nextElementSibling.innerHTML = "Please enter your first and last name";
        contactForm.fullName.nextElementSibling.classList.add("visibilityShow");
        isValid = false;
    } else {
        newUser.name = contactForm.fullName.value;
    }

    // Make sure value for selected preferred contact method is provided
    if (prefEmail.checked) {
        contactPref = "Email";
        contactInfo = contactForm.email.value;

        if (contactForm.email.value === "" || !emailRegex.test(contactForm.email.value)) {
            contactForm.email.classList.add("errorInput");
            contactForm.email.nextElementSibling.innerHTML = "Please enter your email address (hi@example.com)";
            contactForm.email.nextElementSibling.classList.add("visibilityShow");
            contactForm.email.nextElementSibling.classList.remove("visibilityHidden");
            isValid = false;
        } else {
            newUser.prefContact = contactPref;
            newUser.contactData = contactInfo;
        }
    } else if (prefPhone.checked) {
        contactPref = "Phone";
        contactInfo = contactForm.phone.value;

        if (contactForm.phone === "" || !phoneRegex.test(contactForm.phone.value)) {
            contactForm.phone.classList.add("errorInput");
            contactForm.phone.nextElementSibling.innerHTML = "Please enter your phone number (602-555-5555)";
            contactForm.phone.nextElementSibling.classList.add("visibilityShow");
            contactForm.phone.nextElementSibling.classList.remove("visibilityHidden");
            isValid = false;
        } else {
            newUser.prefContact = contactPref;
            newUser.contactData = contactInfo;
        }
    }

    // Check if message/comment is blank
    if (contactForm.message.value === "") {
        contactForm.message.classList.add("errorInput");
        contactForm.message.nextElementSibling.innerHTML = "Please enter your questions or comments";
        contactForm.message.nextElementSibling.classList.add("visibilityShow");
        contactForm.message.nextElementSibling.classList.remove("visibilityHidden");
        isValid = false;
    } else {
        newUser.userMessage = contactForm.message.value;
    }

    // Submit form if all info valid, then reset it
    if (isValid) {

        // Call function to display user info
        displaySubmission();

        // Clear form values
        contactForm.fullName.value = "";
        contactForm.email.value = "";
        contactForm.phone.value = "";
        contactForm.message.value = "";
        contactForm.fullName.focus();
    }
}

function displaySubmission() {

    // Display the confirmation info
    formConfirmation.classList.remove("visibilityHidden");
    formConfirmation.classList.add("visibilityShow");

    // Clear previous info
    formInfo.innerHTML = "";

    // Display user info
    formInfo.innerHTML = newUser.getUser();
}


// ---------------------------------------
// ------- Current Copyright Year --------
// ---------------------------------------

// Updates the copyright year located in the footer
// Create a new Date object
const today = new Date();

// Grab current year and display
const year = today.getFullYear();
document.getElementById("copyrightYear").innerHTML = year;


// ---------------------------------------
// ---------- Event Listeners ------------
// ---------------------------------------

colorModeBtn.addEventListener("click", changeMode);
btn1.addEventListener("click", productOne);
btn2.addEventListener("click", productTwo);
btn3.addEventListener("click", productThree);
contactForm.addEventListener("submit", formValidation);
