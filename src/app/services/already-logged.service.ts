import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlreadyLoggedService {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/todos');
      return false;
    } else {
      return true;
    }
  }
}
