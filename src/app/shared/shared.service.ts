import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class SharedService {
    toast = Swal.mixin({
        width: 400,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    constructor() { }

    showSuccessAdd(message: string) {
        this.toast.fire({
            icon: 'success',
            title: message
        })
    }

    showErrorAdd(message: any) {
        this.toast.fire({
            icon: 'error',
            title: message
        })
    }

    encryptPassword(password: any) {
        return CryptoJS.MD5(password).toString(CryptoJS.enc.Base64);
    }
}