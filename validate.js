
function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}

var submit=document.getElementById('submit');
var f_name=document.getElementById('first_name');
var l_name=document.getElementById('last_name');
var p_no=document.getElementById('phone_no');
var office_number = document.getElementById('office_no');
var email_idx = document.getElementById('email');
var password_e = document.getElementById('password');
var password_c = document.getElementById('confirm_password');
var opt1 = document.getElementById("checkbox_sample18");
var opt2 = document.getElementById("checkbox_sample19");
var opt3= document.getElementById("checkbox_sample20");
var about_u = document.getElementById('about_you');
var rdio1 = document.getElementById('residence1');
var rdio2 = document.getElementById('residence2');
var valid = false;
const month = document.getElementById('select_month');
const day = document.getElementById('select_day');
const year = document.getElementById('select_year');
const setAge = document.getElementById('age');

var firstName;


var namePattern = /^[a-zA-Z]{1,20}$/ ;
var emailPattern = /^\D([a-zA-Z0-9+_.-])+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,4}$/;
var mobilePattern = /^[0-9]{10}$/;
var passwordPattern =/^(?=.*\d)(?=.*[a-z A-Z]).{8,12}$/ ;
// var officePattern = /[0-9]{8}/;
  var aboutYouPattern = /^[a-z A-Z 0-9]{1,100}$/;

submit.addEventListener('click',function(e){
    e.preventDefault();
    validateform();
    validateform1();
	submit();

});

function submit(){
		alert("done");

}

function validateform(){  
	var f_nameval=f_name.value.trim();
	var l_nameval=l_name.value.trim();
	var email_val=email_idx.value.trim();
	var password_wr=password_e.value;
	var password_cr=password_c.value;
	var phone = p_no.value;
	var office_num = office_number.value;
	var ab_u = about_u.value;
	// var opt1 = document.getElementById("checkbox_sample18");
	// var opt2 = document.getElementById("checkbox_sample19");
	// var opt3= document.getElementById("checkbox_sample20");
	// var rdio1 = document.getElementById('residence1');
	// var rdio2 = document.getElementById('residence2');
	// var valid = false;

// First Name Validation
  if (f_nameval == "" || f_nameval == null){  
    document.getElementById('fname').innerHTML ="Please enter your first name.";
    // return false;
	// firstName = false;
    } else if (f_nameval.length > 20) {
		document.getElementById('fname').innerHTML ="First Name accept maximum 20 alphabets";
	} else if(!namePattern.test(f_nameval)){
      document.getElementById('fname').innerHTML ="First Name accept only alphabets";
	//   firstName = false;
    }else {
		document.getElementById('fname').innerHTML ="";
		// firstName = true;
	}

// Last Name Validation
  if (l_nameval == "" || l_nameval == null){  
    document.getElementById('lname').innerHTML ="Please enter your last name.";
    // return false;
    }else if (l_nameval.length > 20) {
		document.getElementById('lname').innerHTML ="First Name accept maximum 20 alphabets";
	}else if(!namePattern.test(l_nameval)){
      document.getElementById('lname').innerHTML ="Last Name accept only alphabets";
    }else {
		document.getElementById('lname').innerHTML ="";
	}


// Phone Number Validation
if(phone == "" || phone == null){
	document.getElementById('p_n').innerHTML ="Please enter your phone number.";
	// return false;
} else if(isNaN(phone)){
	document.getElementById('p_n').innerHTML ="Phone accept only numbers";
} else if(!mobilePattern.test(phone)){
	document.getElementById('p_n').innerHTML ="Phone Number should be exactly 10 digits only.";
	// return false;
} else {
	document.getElementById('p_n').innerHTML ="";
}

// Office Number Validation
if(isNaN(office_num) || office_num == " " ){
	document.getElementById('o_n').innerHTML ="Only Numbers allowed.";
	// return false;
}else {
	document.getElementById('o_n').innerHTML ="";
}

// Email Validation
if(email_val == ''){
	document.getElementById('email_id').innerHTML ="Please enter your email id";
	// return false;
}else if (!emailPattern.test(email_val)){
	document.getElementById('email_id').innerHTML ="Not a mail Id";
	// return false;
}else {
	document.getElementById('email_id').innerHTML ="";
}

// Password Validation
if(password_wr == "" || password_wr == null){
	document.getElementById('p_w').innerHTML ="Please enter your password";
	// return false;
} else if(password_wr.length < 8){	
	document.getElementById('p_w').innerHTML ="Password length must more than 8";
} else if(!passwordPattern.test(password_wr)){
	document.getElementById('p_w').innerHTML ="Password not in valid format. It must be Alphanumeric and between 8 to 12 characters";
	// return false;
} else {
	document.getElementById('p_w').innerHTML ="";
}

// confirmed password validation
if(password_cr == "" || password_cr == null){
	document.getElementById('p_cw').innerHTML ="Please enter your password";
	// return false;
}else if(password_wr!=password_cr){
	document.getElementById('p_cw').innerHTML ="Password doesn't match";
	// return false;
}else {
	document.getElementById('p_cw').innerHTML ="";
}


// About You Validation
if (ab_u == '' || ab_u == !/[^ ]/){
	document.getElementById('a_u').innerHTML ="Enter something about you";
	// return false;
}  else if(!aboutYouPattern.test(ab_u)){
	document.getElementById('a_u').innerHTML ="Enter something about you";

}	else{
	document.getElementById('a_u').innerHTML ="";
}


// else{
// 	ValidateEmail();
// }
// Intrest Validation
// if (!(opt1.checked) && !(opt2.checked) && !(opt3.checked))
// {
// 	document.getElementById('intrest_r').innerHTML ="Provide atleast one interest";
// 	return false;
// }else {
// 	document.getElementById('intrest_r').innerHTML ="";
// }

// 


  





}

function validateform1(){

  var opt1 = document.getElementById("checkbox_sample18");
	var opt2 = document.getElementById("checkbox_sample19");
	var opt3= document.getElementById("checkbox_sample20");
	var rdio1 = document.getElementById('residence1');
	var rdio2 = document.getElementById('residence2');
	var valid = false;

  // DOB & Age Calculation

    // Validate Date---------
// 	if ((month.value === 'month') && (day.value === 'day') && (year.value === 'year')){
//     document.getElementById('umar').innerHTML ="Please Enter DOB";
//     // return false;		
// }
// else 
if (month.value == 'month') {
    document.getElementById('umar').innerHTML ="Please Select Month";
    return false;
	setAge.value = " ";
} else if (day.value == 'day') {
    document.getElementById('umar').innerHTML ="Please Select Day";
    return false;
	setAge.value = " ";
} else if (year.value == 'year') {
    document.getElementById('umar').innerHTML ="Please Select Year";
    return false;
	setAge.value = " ";
} else{
	document.getElementById('umar').innerHTML ="";
	// return true;
}

var monthVal = month.value;
var dayVal = parseInt(day.value);
var yearVal = parseInt(year.value); 
ageValue = 0;

// Months With 30 days---------------

if (monthVal === 'april' || monthVal == 'june' || monthVal == 'sep' || monthVal == 'nov') {
    if (dayVal > 30) {
        document.getElementById('umar').innerHTML ="These are 30 day months";
        // return false;
    }
}

if (monthVal === 'feb') {
    var leapYear = false;

    if ( ( !(yearVal % 4) && yearVal % 100) || !(yearVal % 400) ) {
        leapYear = true;
    }
    
    // if Year is not a Leap year then day should not be greater than 28-----

    if ((leapYear == false) && dayVal >= 29) {
        document.getElementById('umar').innerHTML ="This is not leap year so Feb cannot have days more than 28";
        // return false;
    }

    // if Year is a Leap year then day should not be greater than 29-----

    if ((leapYear == true) && dayVal > 29) {
        document.getElementById('umar').innerHTML =" Feb cannot have days more than 29";
        // return false;
    }
}

// calculate Age--------

var monthIndex = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];

//console.log(monthIndex.indexOf(monthVal)+1);
var crrDate = new Date();
var birthDate = new Date(yearVal,monthIndex.indexOf(monthVal),dayVal);
//console.log(crrDate);
//console.log(birthDate);

var diffInMS = crrDate.valueOf() - birthDate.valueOf();
//console.log(diffInMS);

// ( 1000 * 60 * 60 * 24 * 365.25 ) MilliSec Pre Year
var age = Math.floor(diffInMS / ( 1000 * 60 * 60 * 24 * 365.25 ) );
//console.log(age);

// (1000 * 60 * 60 * 24) MilliSec Per Day---
var days = Math.floor((diffInMS % ( 1000 * 60 * 60 * 24 * 365.25 )) / (1000 * 60 * 60 * 24) ) ;

//console.log(days);
var months = ((days/30) / 100);
// var months = Math.floor(days/30) / 100;

console.log(months);
//ageValue = `${age}.${months}`;

ageV = age + months;
ageValue = ageV.toFixed(2)
//console.log(ageValue);

// setAge.value = ageValue;
//console.log(setAge.value);
if((ageValue<18)&&(ageValue>=1)){
document.getElementById('umar').innerHTML = "Your age must be more than 18";
// return ageValue = 0;
// return false;
setAge.value = " ";
} else if(ageValue<0){
document.getElementById('umar').innerHTML = "Invalid DOB; you've entered future year  ";
// return false;
// return false;
setAge.value = " ";
// ageValue = " ";
} else{
document.getElementById('age').value = ageValue+" "+"Years";
// setAge.value = ageValue;
// document.getElementById("age").value = ageValue;
// return true;
}

// if(ageValue<0){
// 	document.getElementById('ageid').innerHTML = "Invalid Date of birth";
// 	ageValue = " ";
// 	// return false;
// }else{
// 	document.getElementById('age').innerHTML = ageValue+" "+"Years";
// 	// return true;
// }

// validation for radio button

if ((!rdio1.checked) && (!rdio2.checked)){
document.getElementById('g_d').innerHTML ="Please select your gender";
// return false;  
}else {
document.getElementById('g_d').innerHTML ="";
}


if (opt1.checked) {
checkedValid = true;
document.getElementById('intrest_r').innerHTML ="";
} else if (opt2.checked) {
checkedValid = true;
document.getElementById('intrest_r').innerHTML ="";
} else if (opt3.checked) {
checkedValid = true;
document.getElementById('intrest_r').innerHTML ="";
} else {
document.getElementById('intrest_r').innerHTML ="Provide atleast one interest";
// return false;
}

}