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
      image: "https://i.pravatar.cc/150?img=1",
      id: "",
      status: "viewed",
      favorite:true,
    },
    {
      image: "/assets/stories/story1.png",
      id: "",
      status: "active",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=2",
      id: "",
      status: "active",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=3",
      id: "",
      status: "active",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=4",
      id: "",
      status: "viewed",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=5",
      id: "",
      status: "viewed",
      favorite: true,
    },
    {
      image: "https://i.pravatar.cc/150?img=6",
      id: "",
      status: "viewed",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=7",
      id: "",
      status: "",
      favorite: true,
    },
    {
      image: "https://i.pravatar.cc/150?img=8",
      id: "",
      status: "",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=9",
      id: "",
      status: "",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=10",
      id: "",
      status: "active",
      favorite: true,
    },
    {
      image: "https://i.pravatar.cc/150?img=11",
      id: "",
      status: "active",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=12",
      id: "",
      status: "active",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=13",
      id: "",
      status: "viewed",
      favorite: true,
    },
    {
      image: "https://i.pravatar.cc/150?img=14",
      id: "",
      status: "viewed",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=15",
      id: "",
      status: "viewed",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=16",
      id: "",
      status: "",
      favorite: true,
    },
    {
      image: "https://i.pravatar.cc/150?img=17",
      id: "",
      status: "",
      favorite:false,
    },
    {
      image: "https://i.pravatar.cc/150?img=18",
      id: "",
      status: "",
      favorite: true,
    },
  ];
}
