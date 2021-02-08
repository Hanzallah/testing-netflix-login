import users from './utils/users';
export let SIGNUPMAIL = "";
export let rememberMe = true;
export let userMail = "";


export const setMailAddress = (val) => {
    SIGNUPMAIL = val;
};

export const setRememberMe = (val) => {
    rememberMe = val;
};

export const setUserMail = (val) => {
    userMail = val;
};

export const addUser = (val) => {
    users.push(val);
}

export function findUser(email, password){
    let containsEmail = false;
    let isCorrectPassword = false;

    for (var key in users) {
        if (users.hasOwnProperty(key)) {
          if(email === users[key].email)
          {
            containsEmail = true;
            if(password === users[key].password)
            {
                isCorrectPassword = true;
            }
          }
            
        }
      }
    const passwordErr = "The password is wrong. Please try again or reset your password.";
    const emailErr = "We could not find an account associated with this email address. Please try again or create a new account.";
    
    if(containsEmail === false)
      return emailErr;
    else if(isCorrectPassword === false)
      return passwordErr;
    else return 1;
}