import { FormGroup } from '@angular/forms';

 

export class RegistrationValidator {
    static validate(registerForm: FormGroup) {
        let password = registerForm.controls.password.value;
        let repeatPassword = registerForm.controls.reenterpassword.value;
 
        if (repeatPassword.length <= 0) {
            return null;
        }
 
        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
 
        return null;
 
    }

}