import {AbstractControl} from '@angular/forms';
export class CustomValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
        if(password != "abcd") {
            console.log('false');
            // AC.get('confirmPassword').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
}