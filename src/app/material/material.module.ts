import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Listado de todos los módulos de componente de Angular Material que se desean usar en este proyecto
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  // Listado de componentes que se desean compartir con otros módulos.
  // Para esto es necesario importar este módulo en todos aquellos módulos que desean usar alguno de estos componentes compartidos
  // Algunos componentes de angular Material, requieren de otros módulos, por tanto se deben exportar todos de forma explicita
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class MaterialModule { }
