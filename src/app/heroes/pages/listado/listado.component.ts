import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  // Inyectar el servicio de Heroes
  constructor(private heroesServices: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesServices.getHeroes().subscribe(heroes => {
      console.log(heroes)
      this.heroes = heroes
    })
  }

}
