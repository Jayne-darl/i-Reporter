
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
}

// ACCEPT-ANSWER TOGGLE
const showDeleted = (input) => {
    const index = parseInt(input);
    const deleted = document.getElementsByClassName('deleted');
    const editBtn = document.getElementsByClassName('edit');
    const deleteBtns = document.getElementsByClassName('delete');

    editBtn[index].style.display = 'none';
    deleted[index].style.display = 'inline';

    for (let i = 0; i <= deleteBtns.length - 1; i++) {
        deleteBtns[i].style.display = 'none';
    }
};


const showDeleteBtn = (input) => {
    const index = parseInt(input);
    const deleted = document.getElementsByClassName('deleted');
    const editBtn = document.getElementsByClassName('edit');
    const deleteBtns = document.getElementsByClassName('delete');

    editBtn[index].style.display = 'none';
    deleted[index].style.display = 'none';

    for (let i = 0; i <= deleteBtns.length - 1; i++) {
        deleteBtns[i].style.display = 'inline';
    }
};
