# Manual de Usuario: Reporte de Cubiertas

## 1. Descripción general

Este reporte permite visualizar el estado y el lugar donde se encuentran las cubiertas (neumáticos) en los distintos depósitos (tractores, semis o lugares) de la empresa. Dependiendo del tipo de depósito seleccionado, el reporte muestra la información en dos formatos:

1. **Depósitos de camiones (tractores o semis):** se visualiza como un esquema gráfico con posiciones de cubiertas y movimientos de entrada/salida.
2. **Depósitos de recapeado o cubiertas para recapar:** se visualiza como una tabla con detalle de cada cubierta, su marca, modelo, tipo de movimiento y fecha.

## 2. Selección de depósito

1. En la sección izquierda, encontrarás un **desplegable llamado `Deposito`**.
2. Puedes buscar o seleccionar el depósito deseado.

   - Ejemplo: `AE236PI` (depósito de camiones)
   - Ejemplo: `CUBIERTAS` (depósito de recapeado)

3. Presiona el botón **Aplicar** para que el reporte se actualice según tu selección.

## 3. Visualización del reporte

### 3.1. Depósitos de camiones

- Se muestra un **diagrama con las posiciones de las cubiertas** en cada camión o semi.
- **Columnas y filas:**

  - `C`: Coloca(Código que se coloca)
  - `R`: Retira (Código que se retira)

- **Secciones:**

  - **ENTRA:** cubiertas que han ingresado recientemente al depósito.
  - **SALE:** cubiertas que han sido retiradas o dadas de baja.

- **Detalle por entrada/salida:**

  - Fecha de carga
  - Marca
  - Código
  - Modelo / Fecha / Tipo / Medida
  - Estado
  - Posición en el camión

**Ejemplo de interpretación:**

- Cubierta en posición 17 del camión AE236PI:

  - Entró: `FATE 988912` (recapada)
  - Salió: `FATE CARGO 711280` (para dar de baja)

### 3.2. Depósitos de recapeado (Imagen 2)

- Se muestra una **tabla con todas las cubiertas disponibles o recapeadas** en el depósito.
- **Columnas principales:**

  - `Internalcode`: código interno de la cubierta.
  - `Marca`: marca del neumático.
  - `Modelo - fecha - tipo - medida`: detalle técnico de la cubierta.
  - `Movimiento`: tipo de movimiento (`ARTICULOS` , `MANTENIMIENTO` , `COMPRAS`).
  - `Fecha`: fecha del movimiento registrado.

**Ejemplo de interpretación:**

- Cubierta `VCI20507A` de marca `MICHELIN`:

  - Tipo de movimiento: `MANTENIMIENTO`
  - Fecha: `1/09/25`

- Cubierta `711175` de marca `FATE CARGO`:

  - Tipo de movimiento: `ARTICULOS` (entrada/salida para recapar)

## 4. Recomendaciones de uso

1. Antes de aplicar filtros, asegúrate de **seleccionar el depósito correcto** según la información que necesites.
2. Si el depósito es de camiones, revisa la **posición específica de cada cubierta** para ver su estado.
3. Si el depósito es de recapeado, la **tabla permite buscar cubiertas por marca, modelo o código** para seguimiento detallado.
4. Utiliza la información de **ENTRA / SALE** para controlar el inventario y las rotaciones de cubiertas.
5. Para reportes impresos o exportación, verifica que el depósito seleccionado esté cargado correctamente antes de generar el PDF o Excel.
