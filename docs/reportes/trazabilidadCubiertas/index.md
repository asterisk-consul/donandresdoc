# Reporte de Trazabilidad de Cubiertas

## Objetivo del reporte

El reporte permite visualizar el **historial completo de cada cubierta**, desde que ingresa al sistema hasta cada movimiento posterior (recapado, rotación, baja, etc.). De esta manera se logra un control sobre su uso, ubicación, estado y proveedor.

::: info
:bulb: [Ver Cubiertas](../../CasosParticulares/cubiertas/Cubiertas.md)
:::

## 1. Panel lateral izquierdo – Lista de cubiertas

En la columna izquierda aparece un listado con todas las cubiertas registradas.

- Cada cubierta está identificada por un **código único** (ejemplo: _FATE 987693_).
- Se puede utilizar la **barra de búsqueda** para filtrar rápidamente una cubierta en particular.
- Al seleccionar una cubierta, se despliega su trazabilidad en el panel principal (a la derecha).

::: warning
Es importante aplicar si se quiere filtrar por cubierta
:::

## 2. Panel principal – Detalle de trazabilidad

En la parte superior figura el título: **“Trazabilidad de Cubiertas – Detalles”**.

Cada cubierta seleccionada muestra:

### Encabezado de la cubierta

Ejemplo:
**FATE 784063 SR 200 23/23 – Kilómetros: 12000**

- **Marca / Modelo**: FATE 784063 SR 200
- **Medida**: 295 (ejemplo de medida de la cubierta)
- **Kilómetros**: acumulado del momento que se registró en sistema.

---

### Detalles de movimientos

Cada fila representa un evento o movimiento en la vida útil de la cubierta:

| Columna        | Descripcion                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------- |
| **Fecha**      | Día en que ocurrió el movimiento (ejemplo: 08/09/25).                                        |
| **Flujo**      | Tipo de movimiento registrado (Recapar, Rotación, etc.).                                     |
| **Depósito**   | Lugar físico o depósito donde se realizó la acción (ejemplo: PYL, JCT54, KGC770).            |
| **Movimiento** | Acción realizada: <br>- _A colocar_ (se coloco) <br>- _Sale_ (se retiro)                     |
| **PO**         | Posicion de en la que ingreso o salio                                                        |
| **Estado**     | Situación actual de la cubierta (Usada, Recapada, etc.).                                     |
| **Proveedor**  | Quién realizó el servicio (ejemplo: PYL, Don andres).                                        |
| **Notas**      | Observaciones adicionales (ejemplo: “Se colocaron cubiertas para…”, “Se sacaron del semi…”). |
| **KM**         | Kilómetros registrados en ese evento puntual.                                                |

## 3. Botón **“Ver más”**

En algunos registros aparece la opción **VER MÁS**, que permite desplegar información adicional sobre ese movimiento (ejemplo: detalles de órdenes, vehículos involucrados, etc.) [Ver Reporte de detalles](../../reportes/mantenimientoCubiertas/mantenimientosCubiertasDetalles.md).

## 4. Interpretación del reporte

Este informe funciona como una **línea de tiempo** que permite responder:

- ¿Cuándo se recapó la cubierta y en qué taller?
- ¿En qué vehículos fue colocada y en qué fecha?
- ¿Cuántas rotaciones tuvo?
- ¿Dónde está actualmente y cuál es su estado?
- ¿Qué kilómetros lleva acumulados según el sistema?

## 5. Usos prácticos

- **Gestión de mantenimiento**: control del ciclo de vida de las cubiertas, planificación de recapados y reemplazos.
- **Auditoría**: justificación de movimientos y comprobación de historial ante proveedores.
- **Costos**: identificar cuánto rinde cada cubierta según su marca, medida y cantidad de recapados.
- **Logística**: conocer en qué depósito o unidad se encuentra una cubierta en cualquier momento.
