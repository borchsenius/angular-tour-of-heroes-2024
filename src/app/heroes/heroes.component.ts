import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
//import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroDetailComponent, FormsModule, NgFor, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // asyncron 
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroesReturned => this.heroes = heroesReturned);
  }
  /* syncron
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/

  /*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log("click: " + hero.name);
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.name}`);
  }*/

}
