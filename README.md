# AngularSuperheroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

Trabajar con modulos ayuda a trabajar en equipos, carga peresoza

- Se recomienda crear un modulo para cada parte de nuestra aplicación
```
ng g m nombreDelModulo
```

- Los componentes generalmente forman parte de un módulo
```
ng g c nombreModulo/carpetaContenedora/NombreComponente
```

- Las rutas principales de la aplicación pueden estar definidas a raíz de la aplicación, o dentro de un directorio llamado routes
```
ng g m appRouting --flat
ng g m auth/authRouting --flat    // archivo de routing para el módulo auth
```
El --flat genera el archivo de módulo sin una carpeta contenedora
