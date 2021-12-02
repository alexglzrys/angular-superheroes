import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

/**
 * Pipes puros: Comportamiento por defecto, se ejecutan cuando el valor de entrada cambia
 * Pipes impuros: Se ejecutan cada vez que el ciclo de vida detecta un cambio en eñ app. (no importa si es el valor de entrada del pipe, u otro valor que ha cambiado). Esto genera que el pipe se ejecute en repetidas ocasiones. Solo usarlo si es realmente necesario
 */
@Pipe({
  name: 'imagen',
  // Nos interesa que la imagen de preview, cambie cuando se acutaliza la url. (aqui cambia el valor de la url, no la propiedad de url del objeto de entrada en si)
  pure: false,
})
export class ImagenPipe implements PipeTransform {

  // Los Pipes toman un valor de entrada, opcionalmente unos argumentos (parámetros), y retornan una salida (transformada)
  transform(heroe: Heroe, ...args: unknown[]): string {

    console.log('Pipe se procesó');

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
