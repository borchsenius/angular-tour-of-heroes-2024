import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm II of Interface'
  };
}
