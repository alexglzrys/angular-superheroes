// Interfaz con el cuerpi de una respuesta de usuario logeado exitosamente
// Se manajan opcionales ya que para usuarios no validos, solo se retorna un objeto vacio
export interface Auth {
  id?: string;
  email?: string;
  usuario?: string;
}
