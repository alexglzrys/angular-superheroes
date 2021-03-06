import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  // heroes!: Observable<Heroe[]>;
  heroes!: Heroe[];
  // infoHeroeSeleccionado!: Observable<Heroe>;
  infoHeroeSeleccionado: Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

  }

  // Método que se invoca cada vez que cambian los valores en el control de caja de búsqueda, evento input
  // Buscar super heroes que coincidan con el término de busqueda, y mostrarlos en el listado de sugerencias (AutoComplete Material)
  buscando() {
    // La suscripción a estos Observables se hacen desde la vista, con el pipe async
    // this.heroes = this.heroesService.getSugerencias(this.termino);
    this.heroesService.getSugerencias(this.termino).subscribe(heroes => {
      this.heroes = heroes
    })
  }

  // Devuelve información del super heroe seleccionado en el AutoComplete, evento optionSelected
  heroeSeleccionado(event: MatAutocompleteSelectedEvent) {
    // console.log(event)

    if (!event.option.value) {
      this.infoHeroeSeleccionado = undefined
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero

    // this.infoHeroeSeleccionado = this.heroesService.getHeroe(heroe.id!)
    this.heroesService.getHeroe(heroe.id!).subscribe(heroe => {
      this.infoHeroeSeleccionado = heroe;
    })
  }

}
