import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './shared/guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', redirectTo: '' },
    {path: 'register', component: RegisterComponent },
    { path: 'profile', canActivate: [authGuard], component: ProfileComponent },
    
];

