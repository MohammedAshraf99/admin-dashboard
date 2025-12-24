import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import {  finalize } from 'rxjs';

import { LoaderService } from '../../services/loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingSerivce = inject(LoaderService);
  loadingSerivce.show();
  return next(req).pipe(
    finalize(() => {
      loadingSerivce.hide();
    })
  );
};
