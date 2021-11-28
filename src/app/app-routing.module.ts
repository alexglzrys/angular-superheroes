import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

// Arreglo con declaración de rutas
const routes: Routes = [
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
