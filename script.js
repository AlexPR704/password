// //generate random password
var password = "";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()_+";
var numbersChar = "1234567890";



//making the questions
var passwordLength = (prompt("How many characters will you like your password to be? Please provide range from 8-128."));

if (passwordLength >= 8 && passwordLength <= 128) {
    var upper = confirm("Would you like upper characters?");
    if (upper === true) {
        password += upperChar;
    }
    console.log(password)


    var lower = confirm("Would you like lower characters?");
    if (lower === true) {
        password += lowerChar;
    }
    console.log(password)


    var special = confirm("Would you like special characters?");
    if (special === true) {
        password += specialChar;
    }
    console.log(password)


    var numbers = confirm("Would you like numbers?");
    if (numbers === true) {
        password += numbersChar;
    }
    console.log(password)

}

else {
    alert("Must be between 8-128!!!");
    document.location.reload()
}




function generate() {
    //create for loop to choose password characters
    var final = "";
    for (i = 1; i <= passwordLength; i++) {
        final = final + passwordLength.charAt(Math.floor(Math.random() * math.floor(passwordLength.length - 1)))
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

















// function generate() {
//     //set password length/complexity
//     let complexity = document.getElementById("generate").value;


//     //possible password values
//     let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
//     var lowerChar = "abcdefghijklmnopqrstuvwxyz";
//     var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var specialChar = "!@#$%^&*()_+";
//     var numbersChar = "1234567890";
//     var char = "";

//     //create for loop to choose password characters
//     for(var i = 0; i <= complexity; i++){
//         password = char + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));

//     }
//     //add password to textbox/display area
//     document.getElementById("display").value = password;
// }

// //function to copy the password to the clipboard
// function copyPassword(){

//     document.getElementById("display").select();

//     document.execCommand("Copy");

//     alert("Password is copied to clipboard!!!");
// }