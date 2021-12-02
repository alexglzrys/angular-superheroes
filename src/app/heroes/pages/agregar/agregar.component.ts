import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_image: ''
  }

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    // Solo recupero los parametros de ruta si estoy editando
    if (this.router.url.includes('editar')) {
      // Los params retornan un observable
      this.activatedRoute.params
      .pipe(
        // Tomo el flujo y solo recupero el id (param), encadeno otro observable para obtener un heroe a partir de ese id
        switchMap(({id}) => this.heroesService.getHeroe(id))
        // me suscribo para obtener la info del heroe
      ).subscribe((heroe) => this.heroe = heroe)
    }


  }

  guardar() {
    if (this.heroe.superhero.trim().length == 0) return

    // Se usa el mismo formulario y botón para guardar y editar un Super Héroe
    // Un heroe existe si tiene asociado un id
    if (this.heroe.id) {
      // Actualizar
      this.heroesService.updateHeroe(this.heroe).subscribe(heroe => {
        console.log('Heroe modificado', heroe)
        // Navegar a otra ruta
        this.router.navigate(['/heroes/listado']);
      })
    } else {
      // Registrar
      this.heroesService.saveHeroe(this.heroe).subscribe(heroe => {
        console.log('Heroe agregado', heroe)
        // Navegar a otra ruta
        this.router.navigate(['/heroes/editar', heroe.id]);
      })
    }


  }

}
