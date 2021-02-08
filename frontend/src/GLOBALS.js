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