import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(): Observable<Auth> {
    // El backend retorna un objeto vacio si no existe el usuario
    return this.http.get<Auth>(`${this.BASE_URL}/usuarios/12`)
  }
}
