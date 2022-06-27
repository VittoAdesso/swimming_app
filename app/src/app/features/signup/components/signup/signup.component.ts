import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  
  constructor(   
    public authService: AuthService,   //find into CORE
    public fb: FormBuilder, 
    public router: Router) { 
      this.signupForm = this.fb.group({
        name: [''],
        email: [''],
        password: [''],
        emoji: ['']
      })
    }

  ngOnInit(): void {
    /*empty */
  }

  // function to register
  public registerUser() {
    this.authService.signUp(this.signupForm?.value).subscribe((res: any) => {
      if (res.result) {
        this.signupForm?.reset()
        this.router.navigate(['signin']);
      }
    })
  }
  
  }


