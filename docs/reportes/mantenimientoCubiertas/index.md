# Mantenimiento de Cubiertas

Este reporte esta pensado para gestionar y consultar las intervenciones realizadas sobre los neumáticos (cubiertas) de vehículos o equipos.

## 1. Zona de Filtros (Izquierda)

Esta área te permite **limitar la información** que ves en la tabla principal.

| Elemento del Filtro         | Uso / Función                                                                                                                                                                      |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Unidad**                  | Permite filtrar los registros para ver solo el mantenimiento realizado a una **unidad de vehículo o equipo** específica.                                                           |
| **Referencia**              | Permite filtrar por la **referencia** asociada al mantenimiento o a la cubierta.                                                                                                   |
| **Proveedor**               | Permite filtrar los registros según el **proveedor o taller** que realizó el servicio (ej: "Pyl Neumáticos", "Gomería Axion").                                                     |
| **fechaDesde / fechaHasta** | Permite **establecer un rango de tiempo** para la consulta. Solo se mostrarán los mantenimientos que hayan ocurrido entre estas dos fechas.                                        |
| **Aplicar / Restablecer**   | **Aplicar:** Ejecuta los filtros seleccionados y actualiza la tabla. **Restablecer:** Borra todos los filtros y vuelve a mostrar la información completa (o la vista por defecto). |

## 2. Zona de Reporte (Centro y Derecha)

Esta es la tabla principal donde se muestra la información detallada de cada intervención de mantenimiento.

| Columna                             | Significado / Interpretación                                                                                                                                                        |
| :---------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ABIERTO** o **CERRADA**           | Indica el estado de la intervención. Con el título "ABIERTO" solo muestra tareas pendientes, recientes. "CERRADA" es porque ya se cerraron                                          |
| **FECHA**                           | La fecha y hora en la que se registró la intervención o se realizó el trabajo.                                                                                                      |
| **PATENTE**                         | La matrícula o código de la **unidad/vehículo** al que se le realizó el mantenimiento.                                                                                              |
| **DESCRIPCIÓN**                     | Una breve descripción de la acción realizada (ej: **VULCANIZAR, DESARME Y ARME, ROTACION, COLOCACION, SACAR CUBIERTAS**).                                                           |
| **GOMERIA**                         | El nombre del taller o proveedor que realizó el trabajo (equivalente al filtro "Proveedor").                                                                                        |
| **NOTAS**                           | **Información adicional y detallada** relevante a la intervención (ej: "SE VOLCANIZARON 2 GOMAS...", "SE SACARON 2 MICHELIN DE..."). Es crucial para entender el contexto completo. |
| **Ofic. a actuar / Ofic. a actuar** | Parece ser un campo relacionado con la **oficina o persona responsable** de la acción.                                                                                              |
| **VER MÁS**                         | Te muestra un reporte con los detalles del manteniemto [Ver Rerporte](./mantenimientosCubiertasDetalles.md)                                                                         |

## 3. Barra Superior (Controles Globales)

- **Paginación (Derecha):** Indica en qué página del reporte te encuentras (ej: "Página 1 de 2") y permite navegar entre ellas.
- **Zoom (%):** Permite cambiar el tamaño de visualización del reporte.
- **Informe de búsqueda:** Probablemente un botón para generar una **versión imprimible o exportable** (PDF, Excel) del reporte con los filtros aplicados.

## ¿Cómo usaría este reporte?

1. **Buscar Mantenimiento de una Unidad Específica:** Ingresaría el código de la unidad en el campo **Unidad** o la patente en el campo **Referencia** y haría clic en **Aplicar**.
2. **Ver Tareas de un Periodo:** Borraría los campos de Unidad o Referencia, colocaría las fechas en **fechaDesde** y **fechaHasta**, y haría clic en **Aplicar**.
3. **Entender una Tarea a Fondo:** Localizaría la intervención en la tabla y haría clic en **VER MÁS** para ver el detalle completo, incluyendo, posiblemente, el costo, las piezas específicas, y quién autorizó el trabajo.
