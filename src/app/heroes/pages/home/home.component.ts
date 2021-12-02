import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Getter que recupera del servicio los datos del usuairo logeado
  // El objetivo es llamarlo desde la vista para mostrar el nombre del usuario {{ auth.usuario }}
  get auth(): Auth {
    return this.authService.auth;
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    // Hacer cierta lógica de negocio antes de redireccionar

    this.router.navigate(['/auth/login'])
  }

}
