# Mantenimiento Detallado

Este reporte brinda una visión completa de una única intervención de mantenimiento, desglosando el trabajo realizado, los costos, la posición de las cubiertas en la unidad y el movimiento de inventario de neumáticos.

## 1. Datos de Identificación (Esquina Superior Derecha)

Esta sección identifica la orden de trabajo específica y su contexto:

| Campo              | Significado / Interpretación                                                                          |
| :----------------- | :---------------------------------------------------------------------------------------------------- |
| **ORDEN**          | El número único de la orden de trabajo (en este caso, **443**).                                       |
| **FECHA**          | La fecha en que se realizó o registró el mantenimiento (en este caso, **Sep 1, 2025**).               |
| **GOMERIA**        | El proveedor o taller que ejecutó el trabajo (en este caso, **Gomería Axion**).                       |
| **Patente/Unidad** | El código o patente de la unidad a la que se le realizó el mantenimiento (en este caso, **AE236PI**). |

## 2. Trabajo Realizado (Izquierda)

Detalla la tarea ejecutada y su costo:

| Columna     | Significado / Interpretación                                                         |
| :---------- | :----------------------------------------------------------------------------------- |
| **TRABAJO** | La descripción de la labor efectuada (en el ejemplo, **ROTACION**).                  |
| **CANT.**   | La cantidad de veces que se realizó ese trabajo o la cantidad de ítems relacionados. |
| **IMPORTE** | El costo unitario de la tarea o el ítem (en el ejemplo, $15.000,0).                  |
| **TOTAL**   | El costo total de ese tipo de trabajo (Cantidad x Importe).                          |

## 3. Posición de Cubiertas (Derecha)

Esta es una representación gráfica de los ejes y las posiciones de los neumáticos en la unidad (**AE236PI**).

- **Números (11, 13, 12, 14, etc.):** Representan el número de **posición** del neumático en el vehículo (ejes, remolques, etc.).
- **C / R:**
  - **C** = Posición **C**entral (o externa, dependiendo de la configuración del eje dual).
  - **R** = Posición **R**emota (o interna, dependiendo de la configuración del eje dual).
- **Texto en las Casillas:** Indica la **identificación de la cubierta** que fue colocada o que estaba en esa posición al momento del mantenimiento.
  - Por ejemplo, en la posición 20-C está la cubierta **MICHELIN ZCN34029A**.
  - En la posición 20-R está la cubierta **MICHELIN VCI20507A**.

## 4. Movimiento de Inventario (Inferior)

Esta sección es crucial para la gestión de inventario, ya que muestra qué cubiertas **SALIERON** de la unidad (o del stock general) y cuáles **ENTRARON** a la unidad (o al stock general).

### SALIDA (SALE)

| Columna                         | Significado / Interpretación                                                                                                   |
| :------------------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| **MARCA - CÓDIGO**              | Marca y código de la cubierta que fue **retirada** del vehículo.                                                               |
| **MODELO - FECHA - TIPO - MED** | Detalles de la cubierta (modelo, fecha de fabricación/montaje, tipo, y medida).                                                |
| **ESTADO**                      | El estado de la cubierta al ser retirada (en el ejemplo, **PARA RECAPAR**). Esto sugiere que fue a un proceso de reencauchado. |
| **POSICION**                    | La posición de la que fue retirada (en el ejemplo, **20**).                                                                    |

### ENTRADA (ENTRA)

| Columna                         | Significado / Interpretación                                            |
| :------------------------------ | :---------------------------------------------------------------------- |
| **MARCA - CÓDIGO**              | Marca y código de la cubierta que fue **colocada** en el vehículo.      |
| **MODELO - FECHA - TIPO - MED** | Detalles de la cubierta colocada.                                       |
| **ESTADO**                      | El estado de la cubierta al ser colocada (en el ejemplo, **RECAPADA**). |
| **POSICION**                    | La posición en la que fue colocada (en el ejemplo, **20**).             |

## Resumen del Evento (Según el Ejemplo)

La orden **443** del **1 de septiembre de 2025** muestra una **ROTACIÓN** de $15.000 a la unidad **AE236PI**.

En el Eje 20, se retiró la cubierta **MICHELIN VCI20507A** (que estaba **PARA RECAPAR**) y se colocó la cubierta **MICHELIN ZCN34025A** (que ya estaba **RECAPADA**), indicando un **cambio de cubierta** en esa posición como parte del servicio.

## Funciones Implícitas del Reporte

- **Auditoría:** Permite verificar que el trabajo facturado (ROTACIÓN) se corresponde con los movimientos de inventario y las posiciones actualizadas.
- **Trazabilidad:** Proporciona un registro claro de qué cubierta (por código) estuvo en qué posición, en qué fecha, y cuál fue su estado posterior.
- **Inventario:** Sirve como comprobante para actualizar el stock de cubiertas disponibles y las que están en proceso de recape.
