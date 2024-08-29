
import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.componet.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'authentication-app';
}
