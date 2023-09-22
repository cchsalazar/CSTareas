# CSTareas
API para la gestión de tareas

## Uso de la API

La API ofrece las siguientes rutas y acciones:

- **GET /tareas**: Obtiene todas las tareas.
- **GET /tareas/{id}**: Obtiene una tarea por su ID.
- **POST /tareas**: Crea una nueva tarea.
- **PUT /tareas/{id}**: Actualiza una tarea por su ID.
- **DELETE /tareas/{id}**: Elimina una tarea por su ID.

### Ejemplo de solicitud POST para crear una tarea:

```json
{
  "nombre": "Tarea de ejemplo",
  "descripcion": "Esta es una tarea de ejemplo.",
  "completada": false
}
```

## Validaciones

- Los campos `nombre` y `descripcion` son requeridos en las solicitudes POST y PUT.
- El campo `completada` es requerido en las solicitudes PUT y debe ser de tipo booleano.

## Contribuciones

Si deseas contribuir a este proyecto, ¡siéntete libre de hacerlo! Puedes abrir un problema o enviar una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

