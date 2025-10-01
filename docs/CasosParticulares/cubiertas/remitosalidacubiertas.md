# Paso a Paso: Salida de Cubiertas del Stock

Este es el proceso para registrar la salida de cubiertas desde el sistema, generando un **Remito de Salida** y actualizando el stock de forma automática.

## 1. Iniciar el Remito de Salida (Pantalla Principal)

Se encuentra en **_ALMACEN/STOCK_** dentro de la opción **"Remito salida"**.

### 15.4.01 Remito total (Resta Stock)

#### **1. Revisar/Completar Encabezado:**

| Nombre        | Qué ingresar                                                                 |
| ------------- | ---------------------------------------------------------------------------- |
| `ID`          | Número del remito, generado automáticamente por el sistema.                  |
| `Fecha`       | Fecha en la que se realiza la salida.                                        |
| `Referencia`  | Motivo de la salida (ej: **ENTREGA A CLIENTE**, **ENVÍO A SERVICIO**, etc.). |
| `Cliente`     | Selecciona el cliente destino de la cubierta (ej: **Don Andres**).           |
| `Responsable` | Persona a cargo de la entrega.                                               |
| `Opcional`    | Adjuntar archivo (ej: comprobante de entrega o documento de soporte).        |

#### 2. **Ir al Detalle:**

En la sección **Detalle**, haz clic en el botón azul **AGREGAR** ubicado en la parte inferior izquierda.

---

## 2. Agregar la Actividad (Detalle de la Salida)

Al hacer clic en **AGREGAR**, se abrirá la ventana **"Agregar actividad"**.

#### 1. **Buscar/Seleccionar el Artículo (Cubierta):**

- En el campo **"Artículo Depósito Id"**, escribe el código o la descripción de la cubierta a retirar.
- El sistema pedirá un mínimo de **2 caracteres** para habilitar el filtrado.
- **Selecciona la cubierta** desde la lista que aparece.

#### 2. **Seleccionar el Depósito de Salida:**

- A la derecha del campo, el sistema mostrará el depósito de origen.
- **Asegúrate de elegir el depósito "CUBIERTAS"** (o el que corresponda).

#### 3. **Cantidad a Retirar:**

- En el campo de cantidad, indica el número de cubiertas que van a salir del stock.

---

## 3. Finalizar la Salida del Detalle

#### 1. **Guardar el Detalle:**

- Haz clic en el botón azul **GUARDAR** en la ventana "Agregar actividad".
- Esto cargará la línea de salida en el detalle del remito principal.

#### 2. **Agregar Más Artículos:**

- Si el remito incluye más cubiertas, repite el **Paso 2**.

#### 3. **Finalizar el Remito:**

- Cuando todos los artículos estén cargados, haz clic en el botón azul **GUARDAR** en la parte superior derecha de la pantalla principal del **"Remito salida"**.
- El sistema descontará automáticamente las cantidades del stock del depósito seleccionado.

---

👉 De esta manera, queda registrada formalmente la **salida de cubiertas**, asociada al cliente **Don Andres** (o al cliente/proveedor que corresponda).

#### 4. Video tutorial

<ClientOnly>
    <lite-youtube videoid="gxXTA1YQkcA" videotitle="Remito de salida"/>
</ClientOnly>
