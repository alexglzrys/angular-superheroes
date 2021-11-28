import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({

  imports: [
    // Solo se tiene un unico forRoot para nuestra aplicación, este archivo no es el router principal, ya que contiene la definición de rutas hijas
    // Registrar rutas hijas
    RouterModule.forChild(routes)
  ],
  exports: [
    // Exportar el módulo de rutas hijas para que sea registrado en el módulo asociado con este archivo de routing
    RouterModule
  ]
})
export class AuthRoutingModule { }
