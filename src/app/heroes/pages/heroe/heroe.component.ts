import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe

  // Inyectar el servicio que nos permite conocer los parámetros enviados a la ruta
  constructor(private activatedRouter: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit(): void {
    // Determinar que parámetro fue enviado en la ruta
    this.activatedRouter.params.subscribe((params: Params) => {
      console.log(params.id)
      this.getHeroe(params.id)
    })
  }

  getHeroe(id: string) {
    // Simular una latencia de red
    setTimeout(() => {
      // Recuperar la información del super heroe seleccionado haciendo una llamada a nuestro servicio
      this.heroesService.getHeroe(id).subscribe(heroe => {
        this.heroe = heroe;
      })
    }, 1500)

  }

}
