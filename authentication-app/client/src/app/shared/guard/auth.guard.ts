import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const route = inject(Router);
  const token = window.localStorage.getItem('token');

  if(!token){
    route.navigate(['login']);
    alert('Permission denied, you must be logged in first')
    return false;
  }
  return true;
};
