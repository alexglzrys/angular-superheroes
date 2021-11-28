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

El paquete **JSON SERVER** permite instalar un servidor HTTP local el cual hace un fake API REST a partir de un archivo json
- Esto es interesante para prácticar con Angular mediante su servicio HTTP sin que exista la necesidad de enfocar nuestra atención en crear un backend desde cero.
```
sudo npm i -g json-server

json-server --watch folderAPI/db.json
```

## Servicios
```
ng g s modulo/services/nombreServicio --skip-tests  // Crear servicio sin archivo asociado de Tests
```

## Interfaces
Las interfaces nos permiten definir tipos de datos personalizados. Generalmente se les usa para definir el tipo de dato de cada propiedad declarada en un objeto, mismo que puede representar la información de una entidad en el sistema, o la respuesta entregada por un server.

Existen algunos servicios en la red que nos pemiten generar nuestras interfaces a partir de la repuesta del server
**https://app.quicktype.io/**

Tambien existen plugins de vs-Code que permiten obtener la representación de una interfaz con base a una respuesta emitida por un server **JSON to TS**

```
ng g i modulo/interfaces/nombreInterfaz
```

