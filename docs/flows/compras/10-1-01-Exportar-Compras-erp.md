# 10.1.01 Exportar Compras – ERP

Este paso inicia el flujo de integración de compras entre el sistema **ERP** y **Flow**.  
Consiste en generar el archivo **CSV** que servirá como base para la importación de datos en Flow y posterior actualización de los indicadores del Dashboard Financiero.

---

## Objetivo

- Estandarizar la exportación de datos de compras desde el ERP.
- Asegurar la compatibilidad del formato con el proceso de importación en Flow.
- Reducir errores por formato o estructura incorrecta del archivo.

---

## Campos requeridos

El archivo CSV debe contener **las siguientes columnas en este orden exacto**:

| Campo           | Descripción                                | Ejemplo                 |
| --------------- | ------------------------------------------ | ----------------------- |
| **Comprobante** | Tipo y número del comprobante              | FC A 0001-00001234      |
| **Fecha**       | Fecha del comprobante                      | 2025-10-10              |
| **Concepto**    | Descripción del gasto o compra             | Compra de repuestos     |
| **Fecha Carga** | Fecha en que se ingresó el registro al ERP | 2025-10-11              |
| **Motivo Det**  | Motivo o detalle adicional (opcional)      | Mantenimiento camión 12 |
| **Nombre**      | Nombre del proveedor                       | Repuestos Don Pedro SRL |
| **Imp Gravado** | Importe neto gravado                       | 152000.00               |
| **Imp Exento**  | Importe exento                             | 0.00                    |
| **Imp IVA1**    | Monto de IVA aplicado                      | 31920.00                |
| **Imp Total**   | Total del comprobante                      | 183920.00               |

---

## Formato del archivo

⚠️ **Precauciones técnicas:**

1. El archivo **debe utilizar coma (`,`) como separador**, **no punto y coma (`;`)**.
2. Se recomienda formato **UTF-8** sin BOM para evitar errores de codificación.
3. El nombre del archivo debe seguir el patrón:
   Ejemplo: `compras_20251014.csv`
4. Los valores numéricos deben estar en formato **decimal con punto (`.`)**, por ejemplo: `183920.00`.
5. No deben incluirse encabezados adicionales, líneas vacías ni fórmulas ocultas.

---

## Procedimiento

1. Desde el ERP, ingresar al módulo de **Reportes / Compras / Exportar Compras**.
2. Seleccionar el **rango de fechas** correspondiente al período a importar.
3. Verificar que las columnas coincidan con las listadas anteriormente.
4. Exportar el archivo en formato **CSV (Separado por comas)**.
5. Guardar el archivo en la carpeta:

---

## Control previo a importación

Antes de subir el archivo a Flow:

- Abrir el CSV en un editor de texto (Bloc de notas o VSCode).
- Confirmar que las columnas estén separadas por **comas (,)**.
- Revisar que los decimales estén con punto (`.`).
- Verificar que los encabezados coincidan exactamente.

---

## Relación con el flujo

Este paso alimenta el proceso principal:

📄 [Flujo de Compras General](./10.1.00_Flujo-de-Compras.md)

---

**Versión:** 1.0  
**Responsable:** Área Administrativa  
**Revisado por:** Consultor Flow  
**Última actualización:** 14/10/2025
