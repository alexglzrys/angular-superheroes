import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

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
    HeroeComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    CommonModule,
    // Importar las rutas principales para este módulo (que a su vez son rutas hijas para la aplicación principal)
    HeroesRoutingModule,
    // Solo se usará este modulo de terceros en los componentes que adminstra este módulo (no en toda la aplicación)
    FlexLayoutModule,
    // Los componentes que gestiona este módulo, harán uso de los componentes que exporta el modulo de Material
    MaterialModule,
  ]
})
export class HeroesModule { }
