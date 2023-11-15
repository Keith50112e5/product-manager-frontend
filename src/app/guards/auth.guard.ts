import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const fromToken = (token: any) => (role: string) => {
  const data: any = jwtDecode(token);
  return data.roles.includes(role);
};

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = sessionStorage.getItem('pm_jwt');
  const hasClaim = fromToken(token);
  const shallPass = !!token && hasClaim('admin');
  if (!shallPass) router.navigateByUrl('/users/login');
  return shallPass;
};
