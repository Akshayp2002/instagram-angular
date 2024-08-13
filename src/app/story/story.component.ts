import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {
  items: Array<any> = [
    {
      image: "",
      id: "",
      status: "viewed",
    },
    {
      image: "",
      id: "",
      status: "active",
    },
    {
      image: "",
      id: "",
      status: "active",
    },
    {
      image: "",
      id: "",
      status: "active",
    },
    {
      image: "",
      id: "",
      status: "viewed",
    },
    {
      image: "",
      id: "",
      status: "viewed",
    },
    {
      image: "",
      id: "",
      status: "viewed",
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

  ];
}
