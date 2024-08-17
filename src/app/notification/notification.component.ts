import { Component } from '@angular/core';
import { MessageHeadderComponent } from "../core-components/message-headder/message-headder.component";


@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [MessageHeadderComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
 likes = [
    {
      user: 'john_doe',
      message: 'Love this post! The colors are amazing. 😍',
      follow_status: true, // new user
      avatar: 'https://i.pravatar.cc/150?img=1',
      timestamp: '2 days ago'
    },
    {
      user: 'sarah_123',
      message: 'Great shot! Where was this taken?',
      follow_status: false, // returning user
      avatar: 'https://i.pravatar.cc/150?img=2',
      timestamp: '1 week ago'
    },
    {
      user: 'emma_watson',
      message: 'Wow, this is incredible! ✨',
      follow_status: true, // new user
      avatar: 'https://i.pravatar.cc/150?img=3',
      timestamp: '15 days ago'
    },
    {
      user: 'michael_smith',
      message: 'Nice work! I need to visit this place soon.',
      follow_status: false, // returning user
      avatar: 'https://i.pravatar.cc/150?img=4',
      timestamp: '1 month ago'
    },
    {
      user: 'lucas_miller',
      message: 'This is fantastic! Keep it up. 👍',
      follow_status: true, // new user
      avatar: 'https://i.pravatar.cc/150?img=5',
      timestamp: '2 days ago'
    },
    {
      user: 'olivia_jones',
      message: 'Such a beautiful view. ❤️',
      follow_status: false, // returning user
      avatar: 'https://i.pravatar.cc/150?img=6',
      timestamp: '2 weeks ago'
    },
    {
      user: 'aiden_brown',
      message: 'Amazing post! I really enjoyed this.',
      follow_status: true, // new user
      avatar: 'https://i.pravatar.cc/150?img=7',
      timestamp: '3 days ago'
    },
    {
      user: 'mia_davis',
      message: 'Fantastic photo! What camera do you use?',
      follow_status: false, // returning user
      avatar: 'https://i.pravatar.cc/150?img=8',
      timestamp: '1 month ago'
    },
    {
      user: 'john_doe',
      message: 'Incredible details on this one!',
      follow_status: true, // new user
      avatar: 'https://i.pravatar.cc/150?img=9',
      timestamp: '5 days ago'
    },
    {
      user: 'sarah_123',
      message: 'This is my favorite post so far.',
      follow_status: false, // returning user
      avatar: 'https://i.pravatar.cc/150?img=10',
      timestamp: '2 weeks ago'
    },
    {
      user: 'emma_watson',
      message: 'Can’t wait to see more like this!',
      follow_status: true, // new user
      avatar: 'https://i.pravatar.cc/150?img=11',
      timestamp: '1 week ago'
    },
    {
      user: 'michael_smith',
      message: 'The composition is perfect!',
      follow_status: false, // returning user
      avatar: 'https://i.pravatar.cc/150?img=12',
      timestamp: '2 months ago'
    },
    {
      user: 'lucas_miller',
      message: 'So inspiring, thank you!',
      follow_status: true, // new user
      avatar: 'https://i.pravatar.cc/150?img=13',
      timestamp: '4 days ago'
    },
    {
      user: 'olivia_jones',
      message: 'The colors are so vibrant!',
      follow_status: false, // returning user
      avatar: 'https://i.pravatar.cc/150?img=14',
      timestamp: '1 month ago'
    },
    {
      user: 'aiden_brown',
      message: 'Amazing work as always!',
      follow_status: true, // new user
      avatar: 'https://i.pravatar.cc/150?img=15',
      timestamp: '6 days ago'
    },
    {
      user: 'mia_davis',
      message: 'You’ve outdone yourself!',
      follow_status: false, // returning user
      avatar: 'https://i.pravatar.cc/150?img=16',
      timestamp: '3 weeks ago'
    },
    {
      user: 'john_doe',
      message: 'Absolutely stunning!',
      follow_status: true, // new user
      avatar: 'https://i.pravatar.cc/150?img=17',
      timestamp: '7 days ago'
    },
    {
      user: 'sarah_123',
      message: 'I love the new style!',
      follow_status: false, // returning user
      avatar: 'https://i.pravatar.cc/150?img=18',
      timestamp: '2 months ago'
    },
    {
      user: 'emma_watson',
      message: 'This is a masterpiece.',
      follow_status: true, // new user
      avatar: 'https://i.pravatar.cc/150?img=19',
      timestamp: '10 days ago'
    },
    {
      user: 'michael_smith',
      message: 'Such an impressive post!',
      follow_status: false, // returning user
      avatar: 'https://i.pravatar.cc/150?img=20',
      timestamp: '3 weeks ago'
    },
    {
      user: 'lucas_miller',
      message: 'Incredible work!',
      follow_status: true, // new user
      avatar: 'https://i.pravatar.cc/150?img=21',
      timestamp: '5 days ago'
    }
  ];

}
