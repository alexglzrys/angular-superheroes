import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login().subscribe(res => {
      console.log(res);

      // Si la respuesta tiene un atributo id; entonces es un usuario valido.
      if (res.id ) {
        this.router.navigate(['/heroes/listado'])
      }
    })

  }

}
