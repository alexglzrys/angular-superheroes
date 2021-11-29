import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  // Inyectar el servicio que nos permite conocer los parámetros enviados a la ruta
  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    // Determinar que parámetro fue enviado en la ruta
    this.activatedRouter.params.subscribe((params: Params) => {
      console.log(params.id)
    })
  }

}
