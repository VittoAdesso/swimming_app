import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;

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
      name: [''],
      email: [''],
      password: [''],
    })
  }
  
  // function to register and send to backend
  public registerUser() {
    this.authService.signUp(this.signupForm?.value).subscribe((res: any) => {
      if (res.result) {
        this.signupForm?.reset();
        this.router.navigate(["signin"])
      }
    })
  }
}


