import { Component, OnInit } from '@angular/core';
import { SuggestionsComponent } from "../suggestions/suggestions.component";
import { StoryComponent } from "../story/story.component";
import { PostsComponent } from "../posts/posts.component";
import { BottomNavigationComponent } from "../core-components/bottom-navigation/bottom-navigation.component";
import { HeaderMobileComponent } from "../core-components/header-mobile/header-mobile.component";
import { ChatsComponent } from "../chats/chats.component";
import { NgIf } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, SuggestionsComponent, StoryComponent, PostsComponent, BottomNavigationComponent, HeaderMobileComponent, ChatsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.split('/')[1];
      }
    });
  }

}
