function validateForm() {    
    const studentName = document.getElementById("name");
    const fatherName = document.getElementById("f_name")
    const email = document.getElementById("email");
    const phoneNo = document.getElementById("phone_no");
    
    //validations for form
    if(!studentName.value.trim() ||  !fatherName.value.trim() || !email.value.trim() || !phoneNo.value.trim()) { 
        const errorEle = document.getElementsByClassName("error");
        errorEle[0].innerHTML = ("Please fill all details before starting Quiz");
        return false;
    }

    return {
        name: studentName.value,
        fatherName: fatherName.value,
        email: email.value,
        phoneNo: phoneNo.value,
    };
}


const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    formData = validateForm();
    if(formData) {

        sessionStorage.setItem("userData", JSON.stringify(formData));
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
        window.location.replace(dir + "/templates/mainpage.html");        
    }
})
