const VALIDATOR_TYPE_EMAIL = 'EMAIL'
const VALIDATOR_TYPE_PASSWORD = 'PASSWORD'
const VALIDATOR_TYPE_REQUIRE = "REQUIRE";

export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL })
export const VALIDATOR_PASSWORD = () => ({ type: VALIDATOR_TYPE_PASSWORD })
export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });


export const validate = (value, validators) => {
    let isValid = true;
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validPassword = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/;
    for (const validator of validators) {
        if(validator.type === VALIDATOR_TYPE_REQUIRE){
            isValid = isValid && value.trim().length > 0;
        }
        if (validator.type === VALIDATOR_TYPE_EMAIL) {
           isValid = isValid &&
             validEmail.test(value);
        } 
        if (validator.type === VALIDATOR_TYPE_PASSWORD) {
            isValid = isValid && validPassword.test(value);
        }
    }
    return isValid;
}