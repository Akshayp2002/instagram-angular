import { Component } from '@angular/core';
import { MessageHeadderComponent } from "../core-components/message-headder/message-headder.component";
import { UserPostsComponent } from "../core-components/user-posts/user-posts.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MessageHeadderComponent, UserPostsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
