import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toastr: ToastrService
  ) { }

  showSuccess(message: string, title: string) {
    // this.toastr.success(message, title);
    console.log(message);
  }

  showError(message: string, title: string) {
    // this.toastr.error(message, title);
    console.error(message);
  }

  showInfo(message: string, title: string) {
  //  this.toastr.info(message, title);
    console.info(message);
  }
}
