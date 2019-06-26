//import liraries
import  User  from "store/user";

// Login Form Validation
export const loginValidation = (phone_number,passwod)=>{
    if(phone_number.length == 0){
        error ={phoneErr:"Please enter phone Number",passwordErr:''}
    }else if(phone_number.length != 10){
        error ={phoneErr:"Please enter 10 digit phone Number",passwordErr:''}
    }else if(passwod.length == 0){
        error ={ passwordErr:"Please enter password",phoneErr:'' }
    } else if(passwod.length < 6){
        error = {passwordErr:"Please enter atleast 6 digit in password",phoneErr:'' }
    }else{
        error = { passwordErr:'', phoneErr:'', status:true }
    }
    return error;
}

export const Login = (phone_number,passwod)=>{
    const userData = {
        id: 2,
        firstName: "Shriom Chourasiya",
        lastName: "",
        email: "shriomdexbytes@gmail.com",
        phone: phone_number,
        address: "indore",
        isAvailable:true
      }
      resopnce =   User.storeUser(userData);
      return resopnce;
}
