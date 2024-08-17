import { Component, Input } from '@angular/core';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-message-headder',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './message-headder.component.html',
  styleUrl: './message-headder.component.css'
})
export class MessageHeadderComponent {

  @Input({ required: true }) title = '';

}
