// //generate random password
var password = "";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()_+";
var numbers = "1234567890";



//making the questions
var userChoice = prompt("How many characters will you like your password to be? Please provide range from 8-128.");

if (userChoice >= 8 && userChoice <= 128) {
    var upper1 = confirm("Would you like upper characters?");
    if (upper1 === true) {
        password += upper;
    }
    console.log(password)


    var lower1 = confirm("Would you like lower characters?");
    if (lower1 === true) {
        password += lower;
    }
    console.log(password)


    var special1 = confirm("Would you like special characters?");
    if (special1 === true) {
        password += special;
    }
    console.log(password)


    var numbers1 = confirm("Would you like numbers?");
    if (numbers1 === true) {
        password += numbers;
    }
    console.log(password)

}

else {
    confirm("Must be between 8-128!!!");
    document.location.reload()
}




function generate() {
    //create for loop to choose password characters
    var final = "";
    for ( i = 1; i <= userChoice; i++) {
        final += password.charAt(Math.floor(Math.random() * Math.floor(password.length)))
    }
    //add password to textbox/display area
    console.log(final)

    document.getElementById("display").value = final;
}



function copyPassword() {

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password is copied to clipboard!!!");
}

















