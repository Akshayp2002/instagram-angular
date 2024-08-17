import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css'
})
export class UserPostsComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    // Ensures Flowbite JS is loaded and initialized
    if (typeof window !== 'undefined') {
      const Flowbite = (window as any).Flowbite;
      if (Flowbite && typeof Flowbite.init === 'function') {
        Flowbite.init();
      }
    }
  }

  
  posts: Array<any> = [
    { image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
    { image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" },
    { image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" }
  ]

  reels: Array<any> =[
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
  ]
  tagged: Array<any> =[
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" },
    { "image": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
  ]


}
