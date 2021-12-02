import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

/**
 * Los Gaurds son un tipo de servicio en angular. Por tanto, estarán disponibles en cualquier parte de nuestra
 * aplicación siempre y cuando sean invocados (rutas - guards) o inyectados (componentes - servicios tradicionales)
 */

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  // Por lo general siempre inyectaremos un servicio que nos permita saber si el usuario esta logeado o no
  constructor(private authService: AuthService) { }

  /**
   * Permite verificar si se debe mostrar o no el contenido de una ruta
   *
   * Nota: No importa que una ruta tengo varios guards de diferente tipo registrados,
   * Por ejemplo.
   * En este caso ya se pudo haber cargado previamente un modulo, pero si se registra este canActivate, negará el acceso
   * ya que el id del objeto de usuario logeado no existe.
   *
   * Para que funcione se debe registrar en la propiedad canActivate de la ruta a proteger en cuestión
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('Activando Guard - CanActivate')
      console.log(route)
      console.log(state)

      // Verificar la info si el usuairo puede acceder o no
      if (this.authService.auth.id) {
        return true
      }

      console.log('Acceso denegado por - CanActivate')
      // Negar acceso
      return false;

  }

  /**
   * Permite verificar si se debe cargar o no el módulo socilitado
   * En caso de que el módulo ya haya sido cargado previamente, este método ni si quiera se ejecutara, y por tanto se mostrará nuevamente su contenido ya que esta
   * cargado en memoria de la aplicación.
   *
   * por tanto.
   *
   * No se recomienda para proteger rutas, para esto se usa el CanActivate
   */
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('Activando Guard - Can Load')
      console.log(route)
      console.log(segments)

      // Verificar la info si el usuairo puede acceder o no
      if (this.authService.auth.id) {
        return true
      }

      console.log('Acceso denegado por - CanLoad')
      // Negar acceso
      return false;
  }
}
