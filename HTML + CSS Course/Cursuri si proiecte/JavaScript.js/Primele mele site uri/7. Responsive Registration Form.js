function checkName(ele) {
    var regName = /\d+$/g;
    errors = document.getElementsByClassName('error');
    if ((ele.value == '') || (regName.test(ele.value))) {
        errors[0].innerHTML = 'Please enter the name in correct format';
        ele.focus();
        return false;
    } else {
        errors[0].innerHTML = '';
        return true;
    }
}

function checkEmail(ele) {
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    errors = document.getElementsByClassName('error');
    if ((ele.value == '') || (!regEmail.test(ele.value))) {
        errors[0].innerHTML = 'Please enter the name in correct format';
        ele.focus();
        return false;
    } else {
        errors[0].innerHTML = '';
        return true;
    }
}

function valForm(form) {
    if ((checkName(form.fname)) && (checkEmail(form.myemail))) {
        return true;
    } else {
        return false;
    }
}
