import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { BottomNavigationComponent } from "./bottom-navigation/bottom-navigation.component";
import { HeaderMobileComponent } from "./header-mobile/header-mobile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HomeComponent, ProfileComponent, BottomNavigationComponent, HeaderMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'instagram';

  ngOnInit(): void {
    initFlowbite();
  }

}
