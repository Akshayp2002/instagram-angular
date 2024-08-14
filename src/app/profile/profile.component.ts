import { Component } from '@angular/core';
import { MessageHeadderComponent } from "../core-components/message-headder/message-headder.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MessageHeadderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
