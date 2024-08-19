import { Component } from '@angular/core';
import { SuggestionsComponent } from "../suggestions/suggestions.component";
import { StoryComponent } from "../story/story.component";
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SuggestionsComponent, StoryComponent, NgClass, NgIf],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {



  posts = [
    {
      user: 'john_doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
      timestamp: '2 hours ago',
      likes: 120,
      commentsCount: 5,
      comments: [
        { username: 'emma_watson', comment: 'Great shot!' },
        { username: 'michael_smith', comment: 'Where was this taken?' }
      ],
      postImage: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',// Natural landscape
      isLiked: true,
      showHeart: false // Add like status here
    },
    {
      user: 'sarah_123',
      avatar: 'https://i.pravatar.cc/150?img=2',
      timestamp: '1 day ago',
      likes: 340,
      commentsCount: 8,
      comments: [
        { username: 'lucas_miller', comment: 'Amazing colors!' },
        { username: 'olivia_jones', comment: 'I love this place!' }
      ],
      postImage: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=800', // City skyline
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'emma_watson',
      avatar: 'https://i.pravatar.cc/150?img=3',
      timestamp: '3 days ago',
      likes: 240,
      commentsCount: 4,
      comments: [
        { username: 'aiden_brown', comment: 'This is stunning!' },
        { username: 'mia_davis', comment: 'I need to visit here.' }
      ],
      postImage: 'https://images.pexels.com/photos/1919243/pexels-photo-1919243.jpeg?auto=compress&cs=tinysrgb&w=800',
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'michael_smith',
      avatar: 'https://i.pravatar.cc/150?img=4',
      timestamp: '5 days ago',
      likes: 150,
      commentsCount: 3,
      comments: [
        { username: 'john_doe', comment: 'Awesome capture!' },
        { username: 'sarah_123', comment: 'Looks peaceful.' }
      ],
      postImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', // Coffee on a table
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'lucas_miller',
      avatar: 'https://i.pravatar.cc/150?img=5',
      timestamp: '1 week ago',
      likes: 200,
      commentsCount: 6,
      comments: [
        { username: 'emma_watson', comment: 'So inspiring!' },
        { username: 'michael_smith', comment: 'What a view!' }
      ],
      postImage: 'https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg?auto=compress&cs=tinysrgb&w=800',// Beach sunset
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'olivia_jones',
      avatar: 'https://i.pravatar.cc/150?img=6',
      timestamp: '2 weeks ago',
      likes: 320,
      commentsCount: 9,
      comments: [
        { username: 'lucas_miller', comment: 'This is so cool!' },
        { username: 'aiden_brown', comment: 'I love this shot!' }
      ],
      postImage: 'https://images.pexels.com/photos/462146/pexels-photo-462146.jpeg?auto=compress&cs=tinysrgb&w=800',// Mountain range
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'aiden_brown',
      avatar: 'https://i.pravatar.cc/150?img=7',
      timestamp: '3 weeks ago',
      likes: 280,
      commentsCount: 7,
      comments: [
        { username: 'mia_davis', comment: 'This is incredible!' },
        { username: 'john_doe', comment: 'I want to go here!' }
      ],
      postImage: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',// Scenic forest
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'mia_davis',
      avatar: 'https://i.pravatar.cc/150?img=8',
      timestamp: '1 month ago',
      likes: 360,
      commentsCount: 10,
      comments: [
        { username: 'olivia_jones', comment: 'Breathtaking!' },
        { username: 'sarah_123', comment: 'This is perfect!' }
      ],
      postImage: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=800', // Flower with book
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'john_doe',
      avatar: 'https://i.pravatar.cc/150?img=9',
      timestamp: '2 months ago',
      likes: 180,
      commentsCount: 4,
      comments: [
        { username: 'emma_watson', comment: 'Love the vibe here!' },
        { username: 'michael_smith', comment: 'This is so nice!' }
      ],
      postImage: 'https://images.pexels.com/photos/1851174/pexels-photo-1851174.jpeg?auto=compress&cs=tinysrgb&w=800',// Flower garden
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'sarah_123',
      avatar: 'https://i.pravatar.cc/150?img=10',
      timestamp: '3 months ago',
      likes: 220,
      commentsCount: 5,
      comments: [
        { username: 'lucas_miller', comment: 'Such a cool place!' },
        { username: 'olivia_jones', comment: 'This is awesome!' }
      ],
      postImage: 'https://images.pexels.com/photos/3079408/pexels-photo-3079408.jpeg?auto=compress&cs=tinysrgb&w=800', // Cozy living room
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'alex_wilson',
      avatar: 'https://i.pravatar.cc/150?img=23',
      timestamp: '1 week ago',
      likes: 190,
      commentsCount: 4,
      comments: [
        { username: 'riley_king', comment: 'Amazing shot!' },
        { username: 'david_clark', comment: 'Love this view!' }
      ],
      postImage: 'https://images.pexels.com/photos/1135904/pexels-photo-1135904.jpeg?auto=compress&cs=tinysrgb&w=800', // Mountain landscape
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'lily_james',
      avatar: 'https://i.pravatar.cc/150?img=24',
      timestamp: '2 days ago',
      likes: 210,
      commentsCount: 5,
      comments: [
        { username: 'natalie_martin', comment: 'Beautiful picture!' },
        { username: 'tyler_lee', comment: 'So inspiring!' }
      ],
      postImage: 'https://images.pexels.com/photos/3075641/pexels-photo-3075641.jpeg?auto=compress&cs=tinysrgb&w=800',// Cozy café
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'jack_morris',
      avatar: 'https://i.pravatar.cc/150?img=25',
      timestamp: '3 weeks ago',
      likes: 175,
      commentsCount: 3,
      comments: [
        { username: 'jasmine_king', comment: 'Incredible work!' },
        { username: 'oscar_nelson', comment: 'Love the composition!' }
      ],
      postImage: 'https://images.pexels.com/photos/1679658/pexels-photo-1679658.jpeg?auto=compress&cs=tinysrgb&w=800',// Scenic road
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'emily_brown',
      avatar: 'https://i.pravatar.cc/150?img=26',
      timestamp: '2 months ago',
      likes: 230,
      commentsCount: 6,
      comments: [
        { username: 'sophie_adams', comment: 'Fantastic view!' },
        { username: 'william_rodgers', comment: 'So beautiful!' }
      ],
      postImage: 'https://images.pexels.com/photos/3811121/pexels-photo-3811121.jpeg?auto=compress&cs=tinysrgb&w=800', // Beautiful beach
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'noah_johnson',
      avatar: 'https://i.pravatar.cc/150?img=27',
      timestamp: '5 days ago',
      likes: 200,
      commentsCount: 7,
      comments: [
        { username: 'amelia_white', comment: 'Great photo!' },
        { username: 'ethan_smith', comment: 'This is awesome!' }
      ],
      postImage: 'https://images.pexels.com/photos/3749041/pexels-photo-3749041.jpeg?auto=compress&cs=tinysrgb&w=800',// Modern workspace
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'ava_miller',
      avatar: 'https://i.pravatar.cc/150?img=28',
      timestamp: '1 month ago',
      likes: 165,
      commentsCount: 4,
      comments: [
        { username: 'chloe_anderson', comment: 'Wonderful picture!' },
        { username: 'daniel_brown', comment: 'Beautiful!' }
      ],
      postImage: 'https://images.pexels.com/photos/2573606/pexels-photo-2573606.jpeg?auto=compress&cs=tinysrgb&w=800',// Cozy living room
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'oliver_williams',
      avatar: 'https://i.pravatar.cc/150?img=29',
      timestamp: '3 weeks ago',
      likes: 190,
      commentsCount: 3,
      comments: [
        { username: 'mia_jones', comment: 'Incredible details!' },
        { username: 'liam_thomas', comment: 'Great work!' }
      ],
      postImage: 'https://images.pexels.com/photos/1834394/pexels-photo-1834394.jpeg?auto=compress&cs=tinysrgb&w=800', // Scenic lake
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'ella_garcia',
      avatar: 'https://i.pravatar.cc/150?img=30',
      timestamp: '4 days ago',
      likes: 220,
      commentsCount: 6,
      comments: [
        { username: 'zara_martin', comment: 'Fantastic image!' },
        { username: 'harry_johnson', comment: 'Love this!' }
      ],
      postImage: 'https://images.pexels.com/photos/3225513/pexels-photo-3225513.jpeg?auto=compress&cs=tinysrgb&w=800', // Stunning waterfall
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'charlie_roberts',
      avatar: 'https://i.pravatar.cc/150?img=31',
      timestamp: '2 months ago',
      likes: 210,
      commentsCount: 5,
      comments: [
        { username: 'sophie_white', comment: 'Amazing work!' },
        { username: 'james_smith', comment: 'Incredible view!' }
      ],
      postImage: 'https://images.pexels.com/photos/3893259/pexels-photo-3893259.jpeg?auto=compress&cs=tinysrgb&w=800', // Beautiful garden
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'sofia_davis',
      avatar: 'https://i.pravatar.cc/150?img=32',
      timestamp: '1 week ago',
      likes: 200,
      commentsCount: 4,
      comments: [
        { username: 'ella_king', comment: 'Great photo!' },
        { username: 'ben_martin', comment: 'Love the colors!' }
      ],
      postImage: 'https://images.pexels.com/photos/2820769/pexels-photo-2820769.jpeg?auto=compress&cs=tinysrgb&w=800', // Cozy café
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'jake_martin',
      avatar: 'https://i.pravatar.cc/150?img=33',
      timestamp: '1 month ago',
      likes: 180,
      commentsCount: 6,
      comments: [
        { username: 'lucas_anderson', comment: 'Fantastic scenery!' },
        { username: 'harper_clark', comment: 'Amazing!' }
      ],
      postImage: 'https://images.pexels.com/photos/1570676/pexels-photo-1570676.jpeg?auto=compress&cs=tinysrgb&w=800', // Scenic mountain
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'natalie_adams',
      avatar: 'https://i.pravatar.cc/150?img=34',
      timestamp: '2 days ago',
      likes: 230,
      commentsCount: 7,
      comments: [
        { username: 'grace_james', comment: 'Wonderful place!' },
        { username: 'jason_morris', comment: 'So beautiful!' }
      ],
      postImage: 'https://images.pexels.com/photos/2204531/pexels-photo-2204531.jpeg?auto=compress&cs=tinysrgb&w=800', // Beautiful lake
      isLiked: false,
      showHeart: false // Add like status here
    },
    {
      user: 'mason_johnson',
      avatar: 'https://i.pravatar.cc/150?img=35',
      timestamp: '6 days ago',
      likes: 200,
      commentsCount: 5,
      comments: [
        { username: 'olivia_wilson', comment: 'Great photo!' },
        { username: 'jack_thomas', comment: 'Love this view!' }
      ],
      postImage: 'https://images.pexels.com/photos/1679658/pexels-photo-1679658.jpeg?auto=compress&cs=tinysrgb&w=800',
      isLiked: false,
      showHeart: false // Add like status here// Modern workspace
    }
  ];

  triggerHeartAnimation(index: number): void {
    this.toggleLike(index); // Toggle the like status
    this.posts[index].showHeart = true;

    // Remove the heart after the animation ends
    setTimeout(() => {
      this.posts[index].showHeart = false;
    }, 1000); // Match this duration with the animation duration (1 second)
  }
  

  toggleLike(index: number): void {
    this.posts[index].isLiked = !this.posts[index].isLiked;
    // Additional logic for like functionality
  }
}
