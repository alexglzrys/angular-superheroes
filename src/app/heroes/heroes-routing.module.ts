import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';

// Definición de rutas principales para este módulo
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent,
      },
      {
        path: ':id',
        component: HeroeComponent,
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]

@NgModule({
  imports: [
    // Registrar las rutas principales de este modulo, como rutas hijas para la aplicación principal
    RouterModule.forChild(routes)
  ],
  exports: [
    // Exportar el router para registrarlo en el módulo asociado con este archivo de rutas (heroes.module.ts)
    RouterModule
  ]
})
export class HeroesRoutingModule { }
