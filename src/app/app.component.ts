import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { LogoComponent } from './logo/logo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent, MessagesComponent, LogoComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes 2024';
}
