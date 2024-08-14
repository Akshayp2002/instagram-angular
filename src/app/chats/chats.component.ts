import { Component } from '@angular/core';
import { StoryComponent } from "../story/story.component";
import { MessageHeadderComponent } from "../message-headder/message-headder.component";

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [StoryComponent, MessageHeadderComponent],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent {

}
