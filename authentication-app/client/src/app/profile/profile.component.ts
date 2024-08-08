import { Component, inject} from '@angular/core';
import { UserService } from '../core/services/user/user.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userService = inject( UserService );
  profileData = this.userService.userData;

  name=localStorage.getItem('name')

}
