import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  // Los Pipes toman un valor de entrada, opcionalmente unos argumentos (parámetros), y retornan una salida (transformada)
  transform(heroe: Heroe, ...args: unknown[]): string {
    if (heroe.alt_image) {
      // Esta propiedad tiene una URL completa hacia el recurso de imagen
      return heroe.alt_image;
    } else if (heroe.id) {
      return 'assets/heroes/' + heroe.id + '.jpg';
    } else {
      return 'assets/no-image.png';
    }

  }

}
