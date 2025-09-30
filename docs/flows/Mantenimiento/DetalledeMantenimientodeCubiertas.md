# Detalle de Mantenimiento de Cubiertas

## Registro de Actividades (Montaje, Desmontaje, Rotación)

Esta documentación aplica después de generar la cabecera de la Orden de Trabajo (**MAN Mantenimiento de unidades**). Este paso detalla la acción específica realizada sobre una o más cubiertas.

### Pantalla Base: MAN Mantenimiento de unidades **→** Mantenimiento de cubiertas

| Campo                                               | Propósito                                                                      | Notas de Uso para Cubiertas                                                                                                   |
| --------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Unidad                                              | Vehículo seleccionado para la OT (se carga automáticamente desde la cabecera). | Ya estaria cargado desde antes.                                                                                               |
| Importante: Es la unidad donde se realiza la acción |
| Km                                                  | Kilometraje (Odómetro) de la unidad al momento de la intervención.             | Dato CRÍTICO. Registrar este valor es esencial para el cálculo del Costo por Kilómetro (CPK) y el rendimiento de la cubierta. |
| Detalle                                             | Listado de todas las actividades (cubiertas) que se van a realizar en esta OT. | Usar el botón "AGREGAR" para iniciar el registro de la actividad.                                                             |

### Formulario "Agregar actividad": Montaje, Desmontaje y Rotación

Este formulario es el corazón del registro de las acciones. Se debe completar uno por cada movimiento de cubierta.

| Campo                            | Descripción y Uso                                                              | Procedimiento de Carga                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Cubierta                         | Código de Activo Interno (o Número de Serie)                                   |
| Si no existe ver como ingresarlo | Ingresar mínimo 2 caracteres para filtrar y seleccionar la cubierta específica |
| Cantidad                         | Siempre debe ser 1,00 para mantener la trazabilidad unitaria.                  | Valor por defecto (no modificar).                                                              |
| Camión a Colocar                 | Vehículo (Unidad) o Depósito donde quedará la cubierta después de la acción.   | Se debe seleccionar la Unidad de Destino o el Depósito si se desmonta para almacén/reparación. |
| PO                               | Posición de la cubierta en el vehículo o depósito.                             | Ingresar el Número de Posición según el estándar de la flota.                                  |
| Estado                           | Estado final de la cubierta al registrar la actividad.                         | Ej: Nueva, Recapada, Vulcanizada, etc..                                                        |
| A COLOCAR                        | Indica una acción de INGRESO al Camión/Depósito seleccionado.                  | Marcar si la cubierta se monta o ingresa a un depósito/posición.                               |
| SALE                             | Indica una acción de SALIDA del Camión/Depósito seleccionado.                  | Marcar si la cubierta se desmonta o sale de una posición/depósito.                             |

### Casos de Uso del Formulario

El registro de la actividad depende de la acción que se esté realizando:

#### 1. Montaje (Colocación en un vehículo)

##### **Objetivo:** La cubierta pasa de **Almacén/Depósito** a **Unidad**

| **Acciones en el Formulario:**                                                     |
| ---------------------------------------------------------------------------------- |
| Marcar solo **A COLOCAR**.                                                         |
| **Cubierta:** Código de Activo de la cubierta que se va a montar.                  |
| **Camión que sale:** seria del depósito de Cubiertas                               |
| **Camión a Colocar:** La **Unidad** donde se monta                                 |
| **PO:** Número de posición del eje donde se monta                                  |
| **Estado:** Se recomienda **En Uso**                                               |
| **Resultado:** La Hoja de Vida de la cubierta se asocia a la nueva unidad/posición |

#### 2. Desmontaje (Retiro de un vehículo)

##### **Objetivo:** La cubierta pasa de una **Unidad** a **Almacén/Reparación/Baja**

| **Acciones en el Formulario:**                                                                 |
| ---------------------------------------------------------------------------------------------- |
| Marcar solo **SALE**                                                                           |
| **Cubierta:** Código de Activo de la cubierta que se desmonta                                  |
| **Camión que sale:** La **Unidad** donde estaba montada                                        |
| **Camión a Colocar:** El **Depósito** o la **Ubicación Temporal** (Ej: Cubiertas)              |
| **PO:** Dónde estaba                                                                           |
| **Estado:** **En Depósito**, **En Reparación** o **Baja** (según el destino)                   |
| **Resultado:** Se registra el kilometraje de salida de la cubierta y se actualiza su ubicación |

#### 3. Reparación

##### **Objetivo:** Colocar lo que se realizó

| **Procedimiento**                                                      |
| ---------------------------------------------------------------------- |
| **Cubierta:** Código de Activo de la cubierta que se desmonta.         |
| **Estado:** **Recapada, En Reparación** o **Baja** (según el destino). |
| **Resultado:** Se actualiza el estado del cubierta.                    |

### Funcionalidad Adicional: Cambio de Ubicación (El Lápiz)

- **Uso:** Si la **Unidad de Destino** (**Camión a Colocar**) no existe o si se está moviendo la cubierta a un **nuevo depósito/ubicación temporal** que aún no está registrado.

- **Procedimiento:** Hacer clic en el icono del **Lápiz** (+ **Lupa** **→ Lápiz**) ubicado junto al campo **Camión a Colocar**. Esto abrirá un menú para **crear una nueva Unidad (o Depósito)** y luego seleccionarla como destino.

### Finalización

1. Hacer clic en **"GUARDAR"** en el formulario **"Agregar actividad"**. La actividad se lista en el **detalle** de la OT.

2. Repetir el proceso si hay más cubiertas involucradas.

3. Una vez cargadas todas las actividades, hacer clic en **"SIGUIENTE"** para finalizar la carga de los datos.
