import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { CoreService } from '../core.service';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  registerFormGroup: FormGroup;
  recoveryPasswordFormGroup: FormGroup;
  isLoading: boolean = false;
  isRememberAccess: boolean = false;

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.recoveryPasswordFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }


  tokenFromUI: string = "0123456789123456";
  encrypted: any = "";
  decrypted!: string;

  request!: string;
  responce!: string;

  message: any;
  nonce: any;
  path: any;
  privateKey: any;

  ngOnInit() {
    this.validation();
    // sessionStorage.getItem('remeberAccess') === 'true' ? this.login() : '';
    // console.log('CRIPTOGRAFIA',CryptoJS.enc.Utf8.parse(this.tokenFromUI));
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
    var forms = document.querySelectorAll('.login-validation')

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

    this.isLoading = true;
    this.coreService.login(payload).subscribe({
      next: () => {
        sessionStorage.setItem('email', this.loginControlForm['email'].value);
        sessionStorage.setItem('remeberAccess', this.isRememberAccess.toString());
        this.sharedService.showSuccessAdd(`Bem vindo de volta <b>${this.loginControlForm['email'].value.split('.')[0]}</b>, pronto pra treinar?`);
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.sharedService.showErrorAdd(err.error.error);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  rememberAccess(e: any) {
    this.isRememberAccess = e.currentTarget.checked;
  }

  register() {
    const payload = {
      email: this.registerControlForm['email'].value,
      password: this.registerControlForm['password'].value,
    };

    this.coreService.register(payload).subscribe({
      next: () => {
        sessionStorage.setItem('email', this.loginControlForm['email'].value);
        sessionStorage.setItem('remeberAccess', this.isRememberAccess.toString());
        this.sharedService.showSuccessAdd(`Seja bem vindo <b>${this.registerControlForm['email'].value.split('.')[0]}</b>!`);
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.sharedService.showErrorAdd(err.error.error);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  recoveryPassword() {
    this.recoveryPasswordFormGroup.valid
      ? this.sharedService.showSuccessAdd(`Por favor, verifique a caixa de entrada: <b>${this.recoveryPasswordControlForm['email'].value}</b>`)
      : this.sharedService.showErrorAdd(`A informação não corresponde a um tipo de e-mail: <b>${this.recoveryPasswordControlForm['email'].value}</b>`);
  }
}
