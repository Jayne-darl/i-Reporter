
// let submit = document.getElementById("signupbtn");

// document.addEventListener('click', function (el) {
//     switch (el.target.id) {
//         case "login-btn": {
//             const user = getLoginCredentials();
//             break;
//         }
//         case "signup-btn": {

//         }
//         case "confirm-btn": {

//         }
//         case "submit-btn": {

//         }
//         case "logout-btn": {

//         }
//     }
// });

// function getLoginCredentials() {
//     let emailUsername = document.getElementById("username-email").value;
//     let password = document.getElementById("password").value;
//     let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     let usernameRegex = /^[a-zA-Z0-9]+$/;

//     if (emailUsername.match(emailRegex) || emailUsername.match(usernameRegex) && (password.length >= 6)) {
//         // if(emailUsername = Admin.username){
//         //     window.location.href="Admin.html";
//         // } else {
//         window.location.href = "Users.html";
//         return true;

//     }
//     return false;
// }


// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let location = document.getElementById("location");
// let status = document.getElementById("username");

'use strict';

// PASSWORD STRENGTH
var result = document.getElementById('result');
var password = document.getElementById('password');
var passDisplay = document.getElementById('pass-strength');

var check = function check(input) {
    var result = void 0;
    var arr1 = [/[A-Z]+?/, /[a-z]+?/, /[0-9]+?/, /[$@#&!]+?/];

    var doMatch = function doMatch(arr, word) {
        var result = [];
        var i = void 0;

        for (i in arr) {
            if (word.match(arr[i]) !== null) {
                result.push(word.match(arr[i]));
            }
        }
        return result;
    };

    if (input.length < 6) {
        result = 'Minimum password length is 6';
    } else if (input.length > 12) {
        result = 'Maximum password length is 12';
    } else {
        var matchLength = doMatch(arr1, input).length;
        switch (matchLength) {
            case 4:
                result = 'Password Strength: 100%';
                break;
            case 3:
                result = 'Password Strength: 75%';
                break;
            case 2:
                result = 'Password Strength: 50%';
                break;
            case 1:
                result = 'Password Strength: 25%';
                break;
            default:
                result = 'Invalid';
        }
    }
    return result;
};
var checkPassword = function checkPassword() {
    passDisplay.style.display = 'inline-block';
    result.innerHTML = check(password.value);
};

// PASSWORD MATCH CHECK
var matchDisplay = document.getElementById('match-display');
var password2 = document.getElementById('password2');
var signupBtn = document.getElementById('signUp');

var passwordMatch = function passwordMatch() {
    if (password.value !== password2.value) {
        matchDisplay.innerHTML = 'Passwords do not match!';
    } else {
        signupBtn.disabled = false;
    }
};

// ACCEPT-ANSWER TOGGLE

var showAccepted = function showAccepted(input) {
    var index = parseInt(input);
    var accepted = document.getElementsByClassName('accepted');
    var unacceptBtn = document.getElementsByClassName('unaccept');
    var acceptBtns = document.getElementsByClassName('accept');

    unacceptBtn[index].style.display = 'inline';
    accepted[index].style.display = 'inline';

    for (var i = 0; i <= acceptBtns.length - 1; i++) {
        acceptBtns[i].style.display = 'none';
    }
};

var showAcceptBtn = function showAcceptBtn(input) {
    var index = parseInt(input);
    var accepted = document.getElementsByClassName('accepted');
    var unacceptBtn = document.getElementsByClassName('unaccept');
    var acceptBtns = document.getElementsByClassName('accept');

    unacceptBtn[index].style.display = 'none';
    accepted[index].style.display = 'none';

    for (var i = 0; i <= acceptBtns.length - 1; i++) {
        acceptBtns[i].style.display = 'inline';
    }
};

// SHOW MORE CONTENT BUTTON
var showMore = function showMore(input) {
    var index = parseInt(input);
    var btnContainer = document.getElementsByClassName('btn-container');
    // let showMoreBtn = document.getElementsByClassName("show-more");
    var hiddenContent = document.getElementsByClassName('hidden-content');

    hiddenContent[index].style.display = 'inline';
    btnContainer[index].style.display = 'none';
};

//SHOW COMMENT SECTION
var showCommentForm = function showCommentForm(input) {
    //Input is the value of the button which corresponds with the position of the button
    //in the className DOM array
    var index = parseInt(input);
    var commentForm = document.getElementsByClassName('comment-form');
    commentForm[index].style.display = 'block';
};

//CLOSE HOME NOTIFICATION
var closeNotif = function closeNotif() {
    document.getElementById('home-notif').style.display = 'none';
};