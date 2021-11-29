import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // Inyectar el servicio de http de Angular
  constructor(private http: HttpClient) { }

  // El método devuelve un Observable de tipo arreglo de Heroes
  getHeroes(): Observable<Heroe[]> {
    // Comunicarse a un endpoint y recuperar el listado de heroes desde el backend
    // Indicar a TS que la data devuelta es un arreglo de tipo Heroes
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

  // El método devuelve un Observable de tipo Heroe
  getHeroe(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${id}`);
  }
}
