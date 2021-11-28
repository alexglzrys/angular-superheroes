import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

// Arreglo con declaración de rutas
const routes: Routes = [
  {
    path: 'auth',
    // Cargar módulos con rutas hijas registradas
    // La carga se hace de forma perezosa. Es decir, estos archivos se cargan bajo demanda, lo que hace que nuestra aplicación sea más liviana
    // auth/segmento-hijo
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '404',
    // Cargar de forma explicita el componente (se requiere importar el componente en si)
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  imports: [
    // Registrar rutas principales
    RouterModule.forRoot(routes)
  ],
  exports: [
    // Exportar el módulo de rutas principales para que sea registrado en el módulo principal de la aplicación
    RouterModule
  ]
})
export class AppRoutingModule { }
