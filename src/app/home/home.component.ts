import { Component } from '@angular/core';
import { SuggestionsComponent } from "../suggestions/suggestions.component";
import { StoryComponent } from "../story/story.component";
import { PostsComponent } from "../posts/posts.component";
import { BottomNavigationComponent } from "../bottom-navigation/bottom-navigation.component";
import { HeaderMobileComponent } from "../header-mobile/header-mobile.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SuggestionsComponent, StoryComponent, PostsComponent, BottomNavigationComponent, HeaderMobileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
