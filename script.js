// nav bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
//   Modal Boxes
var signupModal = document.getElementById("signup-modal");
var signupBtn = document.getElementById("signup-btn");
var closeBtn = document.getElementsByClassName("close")[0];

signupBtn.onclick = function() {
	signupModal.style.display = "block";
}

closeBtn.onclick = function() {
	signupModal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == signupModal) {
		signupModal.style.display = "none";
	}
}

// Form Validator
let lName = document.getElementById("l_name");
let fName = document.getElementById("f_name");
let email = document.getElementById("email");

function formSubmit(){
    if (lName.value === '' || email.value === '' || fName.value === '' ) {
        alert("Please enter your details");
            }
        else{
          alert("successfully submitted");
        }
}


