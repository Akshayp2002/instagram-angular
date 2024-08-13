import { Component } from '@angular/core';
import { SuggestionsComponent } from "../suggestions/suggestions.component";
import { StoryComponent } from "../story/story.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SuggestionsComponent, StoryComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posts: Array<any> = [
    {
      image: "",
      id: "",
      status: "",
    },
    {
      image: "",
      id: "",
      status: "",
    },
    {
      image: "",
      id: "",
      status: "",
    },
    {
      image: "",
      id: "",
      status: "",
    },
    {
      image: "",
      id: "",
      status: "",
    },
  ]

}
