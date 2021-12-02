import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styles: [
  ]
})
export class ConfirmationComponent implements OnInit {

  // Inyectar el servicio de MatDialogRef para tener una referncia del componente de MatDialogo que muestra este componente.
  // Es necesario pasarle como tipo de dato la clase del componente a que muestra (este componente)

  // Si el Dialiog pasa data al componente, es necesario inyectarla e indicarle de que tipo es (debe ser publica para usarla en el template)
  constructor(private matDialogRef: MatDialogRef<ConfirmationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
  }

  ok() {
    // Mandamos true como información al componente de MatDialog para saber que si se desea borrar
    this.matDialogRef.close(true)
  }

  cancel() {
    // Mandamos undefined como información al componente de MatDialog para saber que el usuaroo canceló la operación
    this.matDialogRef.close()
  }

}
