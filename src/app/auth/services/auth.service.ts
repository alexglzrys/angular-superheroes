import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = environment.baseUrl;
  private _auth: Auth | undefined;

  // Para compartir data almacenada en propiedades de nuestro service. se recomienda que hacer uso de getters y retornar la info (decorada, o protegerla sobre todo si se trata de arrays u objetos) ya que estos se pasan por referncia (destructurar es la opción)
  // que se desea compartir con los clientes de este servicio
  // Se puede hacer uso de metodos, pero todo depende de la forma o estilo de programación
  get auth(): Auth {
    return {...this._auth}
  }

  constructor(private http: HttpClient) { }

  login(): Observable<Auth> {
    // El backend retorna un objeto vacio si no existe el usuario
    // El operator tap RXjs permite realizar tareas secundarias entes de enviar la respuesta que retorna la suscripcipon

    // Me interesa guardar los datos del usuario en mi variable privada.
    // Tap siempre regresa la respuesta del operador anterior (por tanto no se le usa para transformarla)
    return this.http.get<Auth>(`${this.BASE_URL}/usuarios/1`).pipe(
      tap(res => this._auth = {...res}),
      // Me interesa guardar en localStorage el id del usuario logeado (SIMULAR UN JSON WEB TOKEN)
      // Esto es importante ya que el protocolo HTTP es sin estado
      tap(res => localStorage.setItem('token', res.id!))
    )
  }

  // Setear mi objeto que permite saber si estoy logeado o no
  logout() {
    this._auth = undefined;
    // Borrar el Token alamcenado en LocalStorage
    localStorage.removeItem('token')
  }

  // Este método es el que se debería llamar en los guards para saber si el usuario puede o no puede acceder a determinada ruta
  verificarSiExisteUsuarioLogeado(): Observable<boolean> {
    // Si no existe el tocken en localStorage, se supone que el usuario no se encuntra logeado
    if (!localStorage.getItem('token')) {
      // Convertir una respuesta a observable
      return of(false)
    }

    // return of(true)

    // Si los datos basicos del usuario no se encuntran en el token (nombre, email), es necesario volver a consultarlos con el servicio
    return this.http.get<Auth>(`${this.BASE_URL}/usuarios/1`)
      .pipe(
        // Me interesa transformar la respuesta original (objeto con la data del usuario) en un valor booleno
        map(auth => {
          console.log('Datos que recibe el operador map', auth)
          this._auth = {...auth}
          // aqui estaríamos returnando el Observable<boolen>
          return true;
        })
      )

  }
}
