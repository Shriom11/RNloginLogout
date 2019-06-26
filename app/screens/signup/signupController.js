//import liraries
import  User  from "store/user";

let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Signup Form Validation
export const signupValidation = (fullName, email, phone_number, password,  gender)=>{
    if(fullName.length == 0){
        error = {fullNameErr:"Please enter Full Name"}
    }else if(email.length == 0){
        error ={emailErr:"Please enter Email Address",fullNameErr:''}
    }else if(reg.test(email) == false){
        error ={emailErr:"Please enter valid Email Address",fullNameErr:''}
    }else if(phone_number.length == 0){
        error ={phoneErr:"Please enter phone Number",fullNameErr:'',emailErr:''}
    }else if(phone_number.length != 10){
        error ={phoneErr:"Please enter 10 digit phone Number",emailErr:'',fullNameErr:''}
    }else if(password.length == 0){
        error ={ passwordErr:"Please enter password",phoneErr:'',emailErr:'',fullNameErr:'' }
    } else if(password.length < 6){
        error = {passwordErr:"Please enter atleast 6 digit in password",phoneErr:'',emailErr:'',fullNameErr:'' }
    }else{
        error = {fullNameErr:'',emailErr:'', passwordErr:'',phoneErr:'',status:true}
    }
    return error;
}


export const Signup = (fullName, email, phone, password, gender)=>{
    const userData = {
        id: 2,
        firstName: fullName,
        lastName: "",
        email: email,
        phone: phone,
        address: "indore",
        isAvailable:true
      }
      resopnce =   User.storeUser(userData);
      return resopnce;
}
