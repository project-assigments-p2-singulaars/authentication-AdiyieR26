import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const guardService: CanActivateFn = () => {
  const router = inject(Router);
  const token = window.localStorage.getItem('token');

  if(!token){
    router.navigate(['login']);
    alert('Permission denied, you must be logged in first')
    return false;
  }
  return true;
}
