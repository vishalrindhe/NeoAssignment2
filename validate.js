function validateForm() {
    var firstName = document.forms.myForm.firstname.value;
    var lastName = document.forms.myForm.lastname.value;
    var email = document.forms.myForm.email.value;
    var phone = document.forms.myForm.phone.value;
    var office = document.forms.myForm.office.value;
    var password = document.forms.myForm.password.value;
    var rePassword = document.forms.myForm.repassword.value;


    var namePattern = /^[a-zA-Z]{1,20}$/ ;
    var emailPattern = /[^@]+@[a-zA-Z]+\.[a-z]{2,6}/;
    var mobilePattern = /^[7-9][0-9]{9}$/;
    var passwordPattern = /^[a-z A-Z 0-9]{8,12}$/ ;
    // var officePattern = /[0-9]{8}/;


  //   validation for firstName
    if (firstName == "" || firstName == null) {
      alert("First Name must be filled out");
      return false;
    } else if(!namePattern.test(firstName)){
      // else if(!firstName.match(namePattern)){
      alert("First Name must include only 20 characters");
          return false;
    }

      // validation for lastName
    if (lastName == "" || lastName == null) {
  	alert("Last Name must be filled out");
  	return false;
    }	else if(!namePattern.test(lastName)){
  	alert("Last Name must include only 20 characters");
  		return false;
    }

    // validation of phone
    if (phone == "" || phone == null) {
        alert("Phone must be filled out");
        return false;
      }	else if(!mobilePattern.test(phone)){
        alert("Phone not in valid format. It must start from 7,8,9");
            return false;
      }

    // validation of office
      if(isNaN(office)){
      alert("Office number must inckude only numbers");
          return false;
    }

    // validation for email
      if (email == "") {
          alert("Email must be filled out");
          return false;
      } else if (!emailPattern.test(email)) {
          alert("not a mail id");
          return false;
      } 

      // validation for password
      if ( password == "" || password == null) {
        alert("Password must be filled out");
        return false;
      }	else if(!passwordPattern.test(password)){
        alert("Password not in valid format. It must be Alphanumeric and between 8 to 12 characters");
            return false;
      }

      // validation for confirm password
      if ( rePassword == "" || rePassword == null) {
        alert("Confirmed password must be filled out");
        return false;
      } else if(!(password == rePassword)){
        alert("Passwords does not match");
        return false;
      }

  }
