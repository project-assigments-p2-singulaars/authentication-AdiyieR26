import { Component, inject} from '@angular/core';

import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  router = inject(Router)

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
