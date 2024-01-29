
function validusername(event) {
    var condition = (event.key >= 'a' && event.key <= 'z') ||
        (event.key >= 'A' && event.key <= 'Z') ||
        (event.key >= '0' && event.key <= '9');

    return condition;
}

function validfirstname(event) {
    var condition = (event.key >= 'a' && event.key <= 'z') ||
        (event.key >= 'A' && event.key <= 'Z') ||
        (event.key === " ");
    return condition;
}

function validlastname(event) {
    var condition = (event.key >= 'a' && event.key <= 'z') ||
        (event.key >= 'A' && event.key <= 'Z') ||
        (event.key === " ");

    return condition;
}

function validemail(event) {
    var condition = (event.key >= 'a' && event.key <= 'z') ||
        (event.key >= 'A' && event.key <= 'Z') ||
        (event.key >= '0' && event.key <= '9') ||
        event.key == "@" || event.key == "." || event.key == "_" || event.key == "-";

    return condition;
}

function validcity(event) {
    var condition = (event.key >= 'a' && event.key <= 'z') ||
        (event.key >= 'A' && event.key <= 'Z') ||
        (event.key === " ");

    return condition;
}

function validpass1(event) {

    return true;
}

function validpass2(event) {

    return true;
}

function myClear() {

    document.getElementById("username").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("birth").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("number").value = "";
    document.getElementById("city").value = "";
    document.getElementById("pass1").value = "";
    document.getElementById("pass2").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("radio1").checked = false;
    document.getElementById("radio2").checked = false;
    document.getElementById("hob1").checked = false;
    document.getElementById("hob2").checked = false;
    document.getElementById("hob3").checked = false;
    document.getElementById("hob4").checked = false;
    document.getElementById("hob5").checked = false;

}

function myCheck() {

    var InputName = document.getElementById("username").value;
    if (InputName.length < 6)
        document.getElementById("messUsername").innerHTML = "fill the username/username shorter than 6";
    else
        document.getElementById("messUsername").innerHTML = "";


    var InputName = document.getElementById("firstname").value;
    if (InputName.length < 2)
        document.getElementById("messFirstname").innerHTML = "fill the name/name shorter than 2";
    else
        document.getElementById("messFirstname").innerHTML = "";


    var InputName = document.getElementById("lastname").value;
    if (InputName.length < 2)
        document.getElementById("messLastname").innerHTML = "fill the last name/last name shorter than 2!";
    else
        document.getElementById("messLastname").innerHTML = "";

    var InputEmail = document.getElementById("mail").value;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailFormat.test(InputEmail))
        document.getElementById("messMail").innerText = "";
    else
        document.getElementById("messMail").innerText = "email is not valid!";

    var InputName = document.getElementById("number").value;
    if (InputName.length !== 7)
        document.getElementById("messNumber").innerHTML = "you did not entered a number!";
    else
        document.getElementById("messNumber").innerHTML = "";

    var InputName = document.getElementById("city").value;
    if (InputName.length < 3)
        document.getElementById("messCity").innerHTML = "you did not entered a city!/ or the city name is shorter than 3";
    else
        document.getElementById("messCity").innerHTML = "";

    var male = document.getElementById("radio1").checked;
    var female = document.getElementById("radio2").checked;
    if (!male && !female)
        document.getElementById("messRadioGender").innerText = "choose your gender!";
    else
        document.getElementById("messRadioGender").innerHTML = "";

    var InputName = document.getElementById("birth").value;
    if (InputName.length < 1)
        document.getElementById("messBirth").innerHTML = "!you did not entered a a birth date";
    else
        document.getElementById("messBirth").innerHTML = "";


    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if (pass1 !== pass2) {
        document.getElementById("messPass1").innerHTML = "no match!/ enter your pass/ shorter than 6";
        document.getElementById("messPass2").innerHTML = "no match!/ enter your pass/ shorter than 6";

    } else if (pass1.length < 8 || pass2.length < 8) {
        document.getElementById("messPass1").innerHTML = "Password should be at least 8 characters long!";
        document.getElementById("messPass2").innerHTML = "Password should be at least 8 characters long!";

    } else {
        document.getElementById("messPass1").innerHTML = "";
        document.getElementById("messPass2").innerHTML = "";
    }

    if (pass1 !== pass2) {
        document.getElementById("messPass1").innerHTML = "no match!/ enter your pass/ shorter than 6";
        document.getElementById("messPass2").innerHTML = "no match!/ enter your pass/ shorter than 6";
    } else if (pass1.length < 8 || pass2.length < 8) {
        document.getElementById("messPass1").innerHTML = "Password should be at least 8 characters long!";
        document.getElementById("messPass2").innerHTML = "Password should be at least 8 characters long!";
    } else {
        document.getElementById("messPass1").innerHTML = "";
        document.getElementById("messPass2").innerHTML = "";
    }
    
}

function goToLoginPage() {
    // Perform error check
    myCheck();

    // Check if there are any error messages (td3)
    var errorMessages = document.querySelectorAll('.td3');
    var hasErrors = false;

    // Iterate through error messages and check if any are not empty
    errorMessages.forEach(function (errorMessage) {
        if (errorMessage.innerHTML.trim() !== "") {
            hasErrors = true;
        }
    });

    // If there are no errors, navigate to the login page
    if (!hasErrors) {
        window.location.href = "/pages/yep.html";
    } else {
        // Optionally, you can display a message or take other actions if there are errors
        alert("Please fix the errors before navigating to the login page.");
    }
}

