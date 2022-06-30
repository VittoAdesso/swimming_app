import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;
  public submitted: boolean = false;

  constructor(   
    public authService: AuthService,   //find into CORE
    public fb: FormBuilder, 
    public router: Router) 
    { 
      this.buildForm();
    }

  ngOnInit(): void {/*empty */}
  
  public buildForm() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,63}$")]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    })
  }
  
  // function to register and send to backend
  public registerUser() {
    this.authService.signUp(this.signupForm?.value).subscribe((res: any) => {
      if (res.result) {
        this.signupForm?.reset();
        this.submitted = true;
        this.router.navigate(["signin"])
      }
    })
  }

  // public cleanForm() {
  //   this.signupForm.reset;
  // }
}


