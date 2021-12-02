import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // Este componente espera información del padre a través de su atributo personalizado heroe
  // ! permite indicar a TS que confie en nosotros, esa propiedad tendra como valor un heroe
  @Input() heroe!: Heroe;
  // Otra alternativa si no deseamos usar !, pero esto nos forza a encapsular sus interpolación entre if
  //@Input() heroe: Heroe | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getAvatar(heroe: Heroe): string {
    if (heroe.alt_image) {
      return heroe.alt_image
    } else {
      return 'assets/heroes/' + heroe.id + '.jpg';
    }
  }

}
