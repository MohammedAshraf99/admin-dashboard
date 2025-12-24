import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { map, take, tap } from 'rxjs';
import { SnackbarService } from '../../services/snackbar.service';

export const authGuard: CanActivateFn = (route, state) => {
  const getToken = inject(AuthService);
  const Route = inject(Router);
  const SnackBar = inject(SnackbarService);
  return getToken.CheckStatus().pipe(
    take(2),
    map((value) => {
      if (!value) {
        SnackBar.showMessage('You Have To Login First', 'Close');
        if (state.url !== '/') {
          console.log(route, '---------', state);

          Route.navigate(['']);
        }

        // Route.navigate(['']);
      }
      return value;
    })
  );
};
