import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';

import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  myForm  = new FormGroup({
    username : new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.findTheRequiredLength],
        UsernameValidators.checkUniqueName),
    password : new FormControl('',Validators.required),
    interests : new FormArray ([])
  });

  //validation
  login()
  {
    this.myForm.setErrors({
      invalidLogin : true
    });
  }
  //insert entered element
  interestsArray(interest: HTMLInputElement)
  {
    (this.myForm.get('interests') as FormArray).push(new FormControl(interest.value));
    interest.value = '';
  }
  remove(interest: FormControl)
  {
    let removeAtIndex = (this.myForm.get('interests') as FormArray).controls.indexOf(interest);
    (this.myForm.get('interests') as FormArray).removeAt(removeAtIndex);
  }

  get username()
  {
    return this.myForm.get('username');
  }
  get password()
  {
    return this.myForm.get('password');
  }

}
