import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';

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

  // El componente snackBarr no tiene una plantilla HTML, solo es inyectar el servicio

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snckBar: MatSnackBar) { }

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
        // Mostrar un mensaje toast de confirmación
        this.mostrarSnackBar('Heroe actualizado correctamente')
        // Navegar a otra ruta
        this.router.navigate(['/heroes/listado']);
      })
    } else {
      // Registrar
      this.heroesService.saveHeroe(this.heroe).subscribe(heroe => {
        console.log('Heroe agregado', heroe)
        // Mostrar un mensaje toast de confirmación
        this.mostrarSnackBar('Heroe registrado correctamente')
        // Navegar a otra ruta
        this.router.navigate(['/heroes/editar', heroe.id]);
      })
    }
  }

  eliminar() {
    this.heroesService.deleteHeroe(this.heroe.id!).subscribe(res => {
      console.log('Heroe eliminado')
      this.router.navigate(['/heroes'])
    })
  }

  // Mostrar un componente snackbar, con el mensaje pasado como parémetro y la duración especificada
  mostrarSnackBar(message: string) {
    this.snckBar.open(message, 'ok', {
      duration: 2500
    })
  }

}
