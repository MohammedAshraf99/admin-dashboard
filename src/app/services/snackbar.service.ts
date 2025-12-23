import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  snackbar = inject(MatSnackBar);
  constructor() { }
  showMessage(message: string, action: string, duration: number = 3000) {
    this.snackbar.open(message, action, {
      duration: duration,
      horizontalPosition: 'start',
      verticalPosition: 'top',
    });
  }

}
