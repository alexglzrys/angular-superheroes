import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // Recuperar información de nuestra variable de entorno (siempre se importa la de desarrollo, cuando se empaqueta la aplicación, Angular de forma automática inyecta la de producción)
  private baseUrl: string = environment.baseUrl

  // Inyectar el servicio de http de Angular
  constructor(private http: HttpClient) { }

  // El método devuelve un Observable de tipo arreglo de Heroes
  getHeroes(): Observable<Heroe[]> {
    // Comunicarse a un endpoint y recuperar el listado de heroes desde el backend
    // Indicar a TS que la data devuelta es un arreglo de tipo Heroes
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  // El método devuelve un Observable de tipo Heroe
  getHeroe(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }
}
