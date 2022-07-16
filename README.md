# Descripción del proyecto

Este proyecto es un API sencilla que tiene un endpoint para contar el número de vocales de un string.

# ¿Cómo compilarlo?
```
npm install
node app.js
```
# ¿Cómo ejecutar las pruebas?

```
npm test
```

# ¿Cómo desplegarlo?

El despliegue en los tres ambientes es automático:
- Se aprueba un pull request
- Comienza el proceso de CI
- Si es exitoso, entonces comienza el proceso de despliegue en los tres ambientes en el siguiente orden: develop, stage, prod. Si uno falla, no se desplegaría la siguiente en línea.
