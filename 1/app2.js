function validate_form() {
    valid = true;
    if ((document.myForm.r1[0].checked == false) && (document.myForm.r1[1].checked == false)) {
        valid = false;
    }

    if ((document.myForm.quest2[0].checked == false) && (document.myForm.quest2[1].checked == false)
        && (document.myForm.quest2[2].checked == false)) {
            valid = false;
    }

    return valid;
}

calculate.onclick = function() {
    var formCalc = this.form;
    var checkbox = formCalc['q2'];
    var checkboxSum = 0;
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            checkboxSum += +checkbox[i].value;
        }
    }
    formCalc.result.value = +formCalc.r1.value + checkboxSum;
    //document.write(result)
}