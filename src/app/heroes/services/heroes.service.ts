import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // Inyectar el servicio de http de Angular
  constructor(private http: HttpClient) { }

  getHeroes() {
    // Comunicarse a un endpoint y recuperar el listado de heroes desde el backend
    return this.http.get('http://localhost:3000/heroes');
  }
}
