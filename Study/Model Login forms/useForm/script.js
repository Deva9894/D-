






const form = document.getElementById('form');

const comName=document.getElementById('comName');
const gstLicno=document.getElementById('gstLicno');
const comPhoneNumber=document.getElementById('comPhoneNumber');
const email = document.getElementById('email');
const comAddress=document.getElementById('comAddress');
const comCountry=document.getElementById('comCountry');
const comPincode=document.getElementById('comPincode');

// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

form.addEventListener('submit', event => {
    event.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// const isValidcomName = comName =>{
//     const re = /^[A-Za-z0-9]*$/;
//     return re.test(String(comName));
// }

// const isValidcomName= comName=>{
    
//         try {
//             if (window.event) {
//                 var charCode = window.event.keyCode;
//             }
//             else if (e) {
//                 var charCode = e.which;
//             }
//             else { return true; }
//             if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 32)
//                 return true;
//             else
//                 return false;
//         }
//         catch (err) {
//             alert(err.Description);
//         }
// }

const validateInputs = () => {
    const comNameValue=comName.value.trim();
    const gstLicnoValue=gstLicno.value.trim();
    const comPhoneNumberValue=comPhoneNumber.value.trim();
    const emailValue = email.value.trim();
    const comAddressValue=comAddress.value.trim();
    const comCountryValue=comCountry.value.trim();
    const comPincodeValue=comPincode.value.trim();
    
    // const usernameValue = username.value.trim();
    // const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();
    // const password2Value = password2.value.trim();

    if(comNameValue === ''){
        setError(comName,'Company name required');
    }else if(!(comNameValue+ '').match(/^[A-Za-z0-9]*$/)){
setError(comName,'special characters not allowed!!');
    }else{
        setSuccess(comName);
    }

    if(gstLicnoValue === '' ){
        setError(gstLicno,'GST/LIC number required');
    }else if(gstLicnoValue.length>=16){
setError(gstLicno,'Please enter valid GST/LIC number');
    }
    else if(gstLicnoValue.length>=15){
        setSuccess(gstLicno);
    }

    if(comPhoneNumberValue === ''){
        setError(comPhoneNumber, 'Company Phone Number is Reqired');
    }else if(comPhoneNumberValue.length >10 || comPhoneNumberValue.length<10){
        setError(comPhoneNumber,'Please enter valid Phone number ')
    }else if(!(comPhoneNumberValue + "").match(/^[6-9][0-9]{9}$/)){
        setError(comPhoneNumber,'Please entaer valid Number shoud start with 6-7-8-9')
    }
    else{
        setSuccess(comPhoneNumber);
    }



    // if(comPhoneNumberValue === '' || comPhoneNumberValue.length>10 || comPhoneNumberValue.length <10){
    //     setError(comPhoneNumber,'Company Phone Number required');
    // }else{
    //     setSuccess(comPhoneNumber);
    // }
    
    if(emailValue === '') {
           setError(email, 'Company Email is required');
        // }else if(!(emailValue = "").match(/^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10}) (\.[a-zA-Z]{2,8})? $/)){
        //       setError(email,'please enter valid email');
        }else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        } else {
        setSuccess(email);
        }

    if(comAddressValue === ''){
        setError(comAddress,'Company Address is required');
    }else{
        setSuccess(comAddress);
    }

    if(comCountryValue === ''){
        setError(comCountry,'Company Country is required');
    }else{
        setSuccess(comCountry);
    }

    if(comPincodeValue === ''){
        setError(comPincode,'Comapany Pincode is required');
    }else if(comPincodeValue.length>6 || comPincodeValue.length<6){
        setError(comPincode,'please enter valid pincode!!!')
    }else{
        setSuccess(comPincode);
    }



    // if(usernameValue === '') {
    //     setError(username, 'Username is required');
    // } else {
    //     setSuccess(username);
    // }

    // if(emailValue === '') {
    //     setError(email, 'Email is required');
    // } else if (!isValidEmail(emailValue)) {
    //     setError(email, 'Provide a valid email address');
    // } else {
    //     setSuccess(email);
    // }

    // if(passwordValue === '') {
    //     setError(password, 'Password is required');
    // } else if (passwordValue.length < 8 ) {
    //     setError(password, 'Password must be at least 8 character.')
    // } else {
    //     setSuccess(password);
    // }

    // if(password2Value === '') {
    //     setError(password2, 'Please confirm your password');
    // } else if (password2Value !== passwordValue) {
    //     setError(password2, "Passwords doesn't match");
    // } else {
    //     setSuccess(password2);
    // }

};