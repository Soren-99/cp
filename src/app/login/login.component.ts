import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DemoAngularMaterialModule } from './../DemoAngularMaterialModule';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DemoAngularMaterialModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ){}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email : [null, [Validators.required]],
      password : [null, [Validators.required]],
    })
  }

  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void{
    const username = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.authService.login(username, password).subscribe(
      (res) => {
        this.snackBar.open('Login Success', 'OK', { duration: 5000} )
      },
        (error) => {
          this.snackBar.open('Bad credetials', 'ERROR', {duration: 5000});
      }
    )
  }
}

