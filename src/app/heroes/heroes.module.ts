import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesRoutingModule } from './heroes-routing.module';

/**
 * Si un componente es creado dentro de un módulo, este se registra como parte de ese módulo.
 * Si un componente es creado fuera de un módulo, este se registra en el módulo principal de la aplicación app.module.ts
 */

@NgModule({
  // Los componentes que se cargarán mediante Lazy Loading no deben exportarse.
  declarations: [
    AgregarComponent,
    ListadoComponent,
    BuscarComponent,
    HomeComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule,
    // Importar las rutas principales para este módulo (que a su vez son rutas hijas para la aplicación principal)
    HeroesRoutingModule,
  ]
})
export class HeroesModule { }
