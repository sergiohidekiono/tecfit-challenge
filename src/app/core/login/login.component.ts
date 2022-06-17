import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  registerFormGroup: FormGroup;
  recoveryPasswordFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private coreService: CoreService,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.registerFormGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.recoveryPasswordFormGroup = this.formBuilder.group({
      email: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.validation();
  }

  get loginControlForm() {
    return this.loginFormGroup.controls;
  }

  get registerControlForm() {
    return this.registerFormGroup.controls;
  }

  get recoveryPasswordControlForm() {
    return this.recoveryPasswordFormGroup.controls;
  }

  validation() {
    'use strict'
    var forms = document.querySelectorAll('.login-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach((form) => {
        form.addEventListener('submit', function (event: any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      });

  }

  login() {
    const payload = {
      email: this.loginControlForm['email'].value,
      password: this.loginControlForm['password'].value,
    };

    this.coreService.login(payload).subscribe({
      next: () => {
        this.sharedService.showSuccessAdd(`Bem vindo de volta <b>${this.loginControlForm['email'].value.split('.')[0]}</b>, pronto pra treinar?`);
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.sharedService.showErrorAdd(err.error.error);
      },
      complete: () => { }
    });
  }

  rememberPassword() {

  }

  register() {
    const payload = {
      email: this.registerControlForm['email'].value,
      password: this.registerControlForm['password'].value,
    };

    this.coreService.register(payload).subscribe({
      next: () => {
        this.sharedService.showSuccessAdd(`Seja bem vindo <b>${this.registerControlForm['email'].value.split('.')[0]}</b>!`);
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.sharedService.showErrorAdd(err.error.error);
      },
      complete: () => { }
    });
  }

  recoveryPassword() {
    this.sharedService.showSuccessAdd(`Por favor, verifique a caixa de entrada: <b>${this.recoveryPasswordControlForm['email'].value}</b>`);
  }

  //   const payload = '100';
  //   this.coreService.listUsers(payload).subscribe({
  //     next: (res) => {
  //       console.log('RES:', res)
  //       const users = res.data;


  //     },
  //     error: (err) => { },
  //     complete: () => { }
  //   })
}
