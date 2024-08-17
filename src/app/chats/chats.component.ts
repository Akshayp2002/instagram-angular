import { Component } from '@angular/core';
import { StoryComponent } from "../story/story.component";
import { MessageHeadderComponent } from "../core-components/message-headder/message-headder.component";

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [StoryComponent, MessageHeadderComponent],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent {
  chatList = [
    {
      userName: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=1",
      message: "Hey, how are you?",
      status: "read",
      timeStamp: "2 hours ago",
    },
    {
      userName: "Jane Smith",
      avatar: "https://i.pravatar.cc/150?img=2",
      message: "Are we still on for tomorrow?",
      status: "unread",
      timeStamp: "1 day ago",
    },
    {
      userName: "Michael Johnson",
      avatar: "https://i.pravatar.cc/150?img=3",
      message: "Great job on the presentation!",
      status: "read",
      timeStamp: "3 days ago",
    },
    {
      userName: "Emily Davis",
      avatar: "https://i.pravatar.cc/150?img=4",
      message: "Can you send me the file?",
      status: "unread",
      timeStamp: "1 week ago",
    },
    {
      userName: "Chris Lee",
      avatar: "https://i.pravatar.cc/150?img=5",
      message: "Let’s catch up later.",
      status: "read",
      timeStamp: "2 weeks ago",
    },
    {
      userName: "Sara Wilson",
      avatar: "https://i.pravatar.cc/150?img=6",
      message: "Happy Birthday!",
      status: "read",
      timeStamp: "1 month ago",
    },
    {
      userName: "David Brown",
      avatar: "https://i.pravatar.cc/150?img=7",
      message: "Can you review this?",
      status: "unread",
      timeStamp: "2 months ago",
    },
    {
      userName: "Laura Martinez",
      avatar: "https://i.pravatar.cc/150?img=8",
      message: "Thanks for the help!",
      status: "read",
      timeStamp: "3 months ago",
    },
    {
      userName: "James Anderson",
      avatar: "https://i.pravatar.cc/150?img=9",
      message: "See you at the meeting.",
      status: "unread",
      timeStamp: "6 months ago",
    },
    {
      userName: "Anna Kim",
      avatar: "https://i.pravatar.cc/150?img=10",
      message: "Congrats on the promotion!",
      status: "read",
      timeStamp: "1 year ago",
    },
    {
      userName: "Robert King",
      avatar: "https://i.pravatar.cc/150?img=11",
      message: "Got a minute?",
      status: "unread",
      timeStamp: "30 minutes ago",
    },
    {
      userName: "Sophia White",
      avatar: "https://i.pravatar.cc/150?img=12",
      message: "Let’s meet for lunch.",
      status: "read",
      timeStamp: "4 hours ago",
    },
    {
      userName: "Paul Green",
      avatar: "https://i.pravatar.cc/150?img=13",
      message: "Can you check this out?",
      status: "unread",
      timeStamp: "5 days ago",
    },
    {
      userName: "Olivia Harris",
      avatar: "https://i.pravatar.cc/150?img=14",
      message: "See you soon!",
      status: "read",
      timeStamp: "2 days ago",
    },
    {
      userName: "Ethan Clark",
      avatar: "https://i.pravatar.cc/150?img=15",
      message: "Let’s get started.",
      status: "unread",
      timeStamp: "1 week ago",
    },
    {
      userName: "Ava Adams",
      avatar: "https://i.pravatar.cc/150?img=16",
      message: "Can we reschedule?",
      status: "read",
      timeStamp: "3 weeks ago",
    },
    {
      userName: "Noah Hall",
      avatar: "https://i.pravatar.cc/150?img=17",
      message: "Thanks, appreciate it!",
      status: "unread",
      timeStamp: "1 day ago",
    },
    {
      userName: "Isabella Young",
      avatar: "https://i.pravatar.cc/150?img=18",
      message: "Let’s get coffee.",
      status: "read",
      timeStamp: "4 weeks ago",
    },
    {
      userName: "Mason Turner",
      avatar: "https://i.pravatar.cc/150?img=19",
      message: "I’ll call you later.",
      status: "unread",
      timeStamp: "1 month ago",
    },
    {
      userName: "Mia Scott",
      avatar: "https://i.pravatar.cc/150?img=20",
      message: "Just finished the report.",
      status: "read",
      timeStamp: "2 months ago",
    },
    {
      userName: "Logan Perez",
      avatar: "https://i.pravatar.cc/150?img=21",
      message: "We need to talk.",
      status: "unread",
      timeStamp: "2 days ago",
    },
    {
      userName: "Zoe Thompson",
      avatar: "https://i.pravatar.cc/150?img=22",
      message: "Catch you later!",
      status: "read",
      timeStamp: "6 days ago",
    },
    {
      userName: "Lucas Rivera",
      avatar: "https://i.pravatar.cc/150?img=23",
      message: "All set for tomorrow.",
      status: "unread",
      timeStamp: "5 hours ago",
    },
    {
      userName: "Lily Evans",
      avatar: "https://i.pravatar.cc/150?img=24",
      message: "See you in the office.",
      status: "read",
      timeStamp: "3 days ago",
    },
    {
      userName: "Henry Collins",
      avatar: "https://i.pravatar.cc/150?img=25",
      message: "Thanks for the update.",
      status: "unread",
      timeStamp: "1 week ago",
    }
  ];


}
