import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { FadeIn } from '../animation';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterLink, NgForOf, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  animations: [
    FadeIn(800, false),
  ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}