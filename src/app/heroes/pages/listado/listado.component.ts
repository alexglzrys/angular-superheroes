import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  // Inyectar el servicio de Heroes
  constructor(private heroesServices: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesServices.getHeroes().subscribe(res => console.log(res))
  }

}
