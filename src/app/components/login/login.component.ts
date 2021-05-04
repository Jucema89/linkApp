import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import { SetUserRegister, SetUserLogin } from '../../store/actions/links.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  formRegister: FormGroup;

  public userRegister: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{}>
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.formRegister = this.formBuilder.group({
      fullName: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });

  }

  changeuserRegister(){
    this.userRegister = !this.userRegister
  }

  loginSubmit({value, valid}){
    if(valid) {
      this.store.dispatch(SetUserLogin({user: value}))
      console.log(value);
    }
  }

  registerSubmit({value, valid}){
    if(valid) {
      this.store.dispatch(SetUserRegister({user: value}))
      console.log(value);
    }
  }

}
