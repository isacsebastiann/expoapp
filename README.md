# Resumen de Cambios Final 
# Refactorización del Proyecto React Native

Se realizaron múltiples mejoras en la estructura y funcionalidad del proyecto para incrementar su claridad, mantenibilidad y escalabilidad:

## Resumen General de los cambios 

 - Primero, organicé los componentes reutilizables, como botones, en una carpeta components/button, separando la lógica de los estilos. - Luego, centralicé las llamadas a APIs en una carpeta services/, facilitando su mantenimiento. 
 - Para manejar la selección y el guardado de imágenes, implementé los hooks useImagePicker y saveImage, reemplazando el uso directo de ImagePicker y MediaLibrary. 
 - También moví los estilos específicos a App.styles.js, lo que mejoró la organización y permitió su reutilización. 
 - Finalmente, optimicé el manejo de estados y efectos con useState y useEffect, lo que contribuyó a la modularidad y claridad del código.


## Componentes Reutilizables

- **Ubicación**: `components/Buttons/`
- **Estructura**: components/
├── Button/
│ ├── Button.js
│ └── Button.styles.js

- Cambios Aplicados en cada uno de los botones, se organizaron en carpetas y se agrego un archivo style unico de donde se importan los estilos

### Cambios Generales
- **Separación de Estilos:** Los estilos ahora están en archivos separados, mejorando la organización y mantenibilidad.
- **Uso de PropTypes:** Implementación de PropTypes para una verificación de tipo robusta en los componentes.
- **Mejora de Estructura y Legibilidad:** Reestructuración de código para una mayor claridad y mantenibilidad.

### Cambios Específicos

#### En `App.js`
- **Extracción de Estilos:** Los estilos se han movido a `styles.js`.
- **Organización de Componentes:** Claridad mejorada en la estructura de componentes.
- **Constantes en Archivo Separado:** La fuente de la imagen movida a `constants/images.js`.

#### En `Button.js`
- **Separación de Estilos:** Estilos del botón movidos a `buttonStyles.js`.
- **PropTypes:** Añadido PropTypes para `label`.
- **Función `handlePress`:** Simplificada para mejorar legibilidad.

#### Creadas carpetas de hooks, services, styles 
- Los hooks personalizados mepermiten reutilizar lógica de estado y efectos entre componentes. 
- Los services agrupan funciones que interactúan con APIs o realizan tareas específicas, como manejo de datos. 
- Las styles contienen estilos comunes y específicos de la aplicación, facilitando su mantenimiento y reutilización.

## Conclusión
Estos cambios siguen las mejores prácticas en el desarrollo con React y React Native, enfocándose en la modularidad, claridad y mantenibilidad del código.

**1. Problemas específicos de rendimiento o mantenibilidad en la aplicación original:**

   - La aplicación original tenía todo el código, estilos e imágenes en un solo archivo, lo que dificultaba la legibilidad y mantenibilidad del código.

**2. Cómo se aseguró que el refactoring no afectara negativamente la funcionalidad existente:**

   - Me asegure importar correctamente los archivos necesarios en las rutas, incluyendo estilos e imágenes, para garantizar que la funcionalidad existente no se viera afectada.

**3. Mejoras de rendimiento y mantenibilidad logradas con el refactoring:**

   - Se logró una mayor organización y orden en el código, además de la implementación de mejores prácticas de desarrollo.

**4. Desafíos más significativos durante el proceso de refactoring y cómo se superaron:**

   - Uno de los desafíos significativos fue importar correctamente las rutas y resolver problemas de archivos faltantes. Esto se superó mediante pruebas exhaustivas y verificando las rutas y nombres de archivo.

**5. Impacto del refactoring en la experiencia del usuario final:**

   - La experiencia del usuario final mejoró significativamente debido a la mayor legibilidad y el uso de mejores prácticas en el código, esto en cuanto a el codigo, puedo decir que un usuario que usa la aplicacion los cambios que puede notar son que va mas rapido.

**6. Aplicación de lecciones aprendidas en futuros proyectos de desarrollo y refactoring:**

   - En futuros proyectos, puedo aplicar las lecciones aprendidas al establecer una estructura ordenada desde el principio. Esto me da una base sólida y facilita la importación de componentes y archivos, evitando problemas similares en el futuro.
   - Me parece muy importante tambien que aprendi a programar de forma ordenada aplicando bases que permiten no solo escribir codigo 
   si no escribir un codigo legible, mantenible y organizado para trabajar en equipo sirve mucho. 