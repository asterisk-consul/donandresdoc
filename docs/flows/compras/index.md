# Compras

El **Flujo de Compras** gestiona la integración entre el sistema **ERP** y **Flow**, garantizando que toda la información de facturas y gastos impacte correctamente en los indicadores del **Dashboard Financiero**.

## Su propósito es:

- Consolidar los datos de compras provenientes del ERP.
- Estandarizar el proceso de carga mediante archivos CSV centralizados en Drive.
- Automatizar la importación y validación en Flow a través de un WebService.
- Garantizar que los indicadores financieros reflejen información actualizada y trazable.

---

## Diagrama

```mermaid
flowchart TD
A["10.1.01 Exportar Compras<br/>desde ERP (CSV)"]:::inicio --> B["10.1.02 Guardar en Drive<br/>Carpeta Compras"]
B --> C["10.1.03 Importar CSV<br/>mediante WebService Flow"]
C --> D{"¿Validación Correcta?"}:::decision
D -->|No| E["10.1.04 Corregir datos<br/>y volver a importar"]
E --> C
D -->|Sí| F["10.1.05 Actualizar indicadores<br/>Dashboard Financiero"]:::final

%% Leyenda
subgraph Leyenda
    L1[Inicio]:::inicio
    L2[Decisión]:::decision
    L3[Finalización]:::final
end

classDef inicio fill:#4ade80,stroke:#22c55e,stroke-width:2px,color:#000
classDef decision fill:#60a5fa,stroke:#3b82f6,stroke-width:2px,color:#000
classDef final fill:#fb923c,stroke:#f97316,stroke-width:2px,color:#000

click A "./10.1.01_Exportar-Compras-ERP.md"
click B "./10.1.02_Guardar-en-Drive.md"
click C "./10.1.03_Importar-CSV-Flow.md"
click F "./10.1.05_Actualizar-Indicadores.md"
```

# 10.1.03 Importar CSV – Flow

Este paso describe el procedimiento mediante el cual el sistema **Flow** importa los datos de compras provenientes del **ERP**, previamente exportados en formato CSV.  
El objetivo es integrar la información de compras al flujo de trabajo y actualizar los **indicadores del Dashboard Financiero**.

---

## Objetivo

- Automatizar la carga de movimientos de compras desde el ERP a Flow.
- Validar la estructura y contenido del archivo para evitar inconsistencias.
- Mantener los indicadores financieros actualizados en tiempo real.

---

## Requisitos previos

1. El archivo debe haberse generado desde el ERP conforme al procedimiento [10.1.01 Exportar Compras – ERP](./10-1-01-Exportar-Compras-erp.md).
2. El archivo CSV debe estar **guardado en la carpeta de Google Drive compartida**:
