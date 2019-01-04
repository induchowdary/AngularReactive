import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';

import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  // myForm  = new FormGroup({
  //   username : new FormControl('',[
  //       Validators.required,
  //       Validators.minLength(3),
  //       UsernameValidators.cannotContainSpace,
  //       UsernameValidators.findTheRequiredLength],
  //       UsernameValidators.checkUniqueName),
  //   password : new FormControl('',Validators.required),
  //   interests : new FormArray ([])
  // });
  myForm;
  constructor(fb: FormBuilder)
  {
    this.myForm = fb.group({
      username: ['',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.findTheRequiredLength],
        UsernameValidators.checkUniqueName],
      password : ['',Validators.required],
      interests : new FormArray ([]),
      details: fb.group({
          address : [],
          contact: []
      })
    })
  }

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
    this.interestts.push(new FormControl(interest.value));
    interest.value = '';
  }
  get interestts() 
  {
    return (this.myForm.get('interests') as FormArray);
  }

  remove(interest: FormControl)
  {
    let removeAtIndex = (this.myForm.get('interests') as FormArray).controls.indexOf(interest);
    this.interestts.removeAt(removeAtIndex);
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
