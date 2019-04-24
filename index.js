$(document).ready(function(){

    // $('#show').mousedown(function(){
    //     $('#Password').removeAttr('type');
    //     $('#show').addClass('fa-eye-slash').removeClass('fa-eye');
    // });

    // $('#show').mouseup(function(){
    //     $('#Password').attr('type', 'password');
    //     $('#show').addClass('fa-eye').removeClass('fa-eye-slash');
    // });

    // $('#showConfirm').mousedown(function(){
    //     $('#ConfirmPassword').removeAttr('type');
    //     $('#showConfirm').addClass('fa-eye-slash').removeClass('fa-eye');
    // });

    // $('#showConfirm').mouseup(function(){
    //     $('#ConfirmPassword').attr('type', 'password');
    //     $('#showConfirm').addClass('fa-eye').removeClass('fa-eye-slash');
    // });

    // $('#show').mousedown(eyeShow('#Password'));
    // $('#show').mousedown(eyeShow('#ConfirmPassword'));
    // $('#show').mouseup(eyeHide('#Password'));
    // $('#show').mouseup(eyeHide('#ConfirmPassword'));

    // function eyeShow(id) {
    //     $(id).removeAttr('type');
    //     $('#show').addClass('fa-eye-slash').removeClass('fa-eye');
    // }

    // function eyeHide(id) {
    //     $(id).attr('type', 'password');
    //     $('#show').addClass('fa-eye').removeClass('fa-eye-slash');
    // }

});

var icon = document.getElementById("show");
var iconConfirm = document.getElementById("showConfirm");

function passOrigin() {
	var pass = document.getElementById("Password");
	if (pass.type === "password") {
	  pass.type = "text";
	  icon.classList.remove('fa-eye');
	  icon.classList.add('fa-eye-slash');
	} else {
	  pass.type = "password";
	  icon.classList.remove('fa-eye-slash');
	  icon.classList.add('fa-eye');
	}
}

function confirmPass() {
	var passConfirm = document.getElementById("ConfirmPassword");
	if (passConfirm.type === "password") {
	  passConfirm.type = "text";
	  iconConfirm.classList.remove('fa-eye');
	  iconConfirm.classList.add('fa-eye-slash');
	} else {
	  passConfirm.type = "password";
	  iconConfirm.classList.remove('fa-eye-slash');
	  iconConfirm.classList.add('fa-eye');
	}
}

icon.addEventListener('click', passOrigin);
iconConfirm.addEventListener('click', confirmPass);