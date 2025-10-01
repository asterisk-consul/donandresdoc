# Mantenimiento

El Flujo de Mantenimiento de Unidades y Cubiertas organiza todas las acciones desde la detección de una necesidad (checklist inicial) hasta el archivo final de la orden de trabajo.

## Su propósito es:

- Garantizar la trazabilidad de cada intervención, ya sea preventiva o correctiva.
- Definir responsabilidades: el Operario de Mantenimiento ejecuta el trabajo, mientras que el Auxiliar Administrativo gestiona la documentación y abastecimiento.
- Controlar calidad: mediante la verificación de OT, asegurando que las tareas (montajes, rotaciones, reparaciones de cubiertas, etc.) se cumplieron correctamente.
- Cerrar el ciclo con la imputación de costos y el archivo, manteniendo actualizado el historial de la unidad y de las cubiertas.

## Diagrama

```mermaid
flowchart TD
A["20.1.01 Monitoreo<br/>Checklist<br/>"]:::inicio --> B{"¿Qué vas<br/>a realizar?"}:::decision
    B -->|Cubiertas| C["20.2.08 Mant. Cubiertas<br/>Planificado"]
    C --> D["20.2.09 Archivo Mant.<br/>Cubierta"]:::final
    B -->|Mantenimiento| E["20.2.01 Orden<br/>Abastec."]
    E --> F["20.2.04 OT<br/>Verific."]:::decision
    F -->|No OK| G["20.2.02 OT<br/>Abrir Nuevamente"]
    G --> F
    F -->|OK| H["Cerrar OT"]
    H --> I["20.2.06 Archivo Mant.<br/>Correct.<br/>"]:::final
    B -->|No corresponde| J["20.1.04 Mant.<br/>Suspend."]:::final

    %% Leyenda
    subgraph Leyenda
        L1[Inicio]:::inicio
        L2[Decisión]:::decision
        L3[Finalización]:::final
    end
classDef inicio fill:#4ade80,stroke:#22c55e,stroke-width:2px,color:#000
classDef decision fill:#60a5fa,stroke:#3b82f6,stroke-width:2px,color:#000
classDef final fill:#fb923c,stroke:#f97316,stroke-width:2px,color:#000

click A "./20.1.01_Monitoreo-Checklist"
click C "./DetalledeMantenimientodeCubiertas"
click E "./20.2.01-Orden-de-abastecimiento_Markdown"
click F "./OT_Verificacion"
click G "./abrirNuevamente"
```

## Resumen del Flujo de Mantenimiento

El proceso inicia siempre en el **Monitoreo – Checklist (20.1.01)**.  
Desde ahí se distinguen dos caminos principales:

### Mantenimiento preventivo

- Es registrado directamente por el **Operario de Mantenimiento (Cristian)**.
- Cuando corresponde, se continúa con el **Mantenimiento Planificado de cubiertas (20.2.08)**.
- Al finalizar, se archiva en **Archivo mantenimiento cubierta (20.2.09)**.

### Otros mantenimientos de unidad (cubiertas u otros)

- El **Operario** completa la planilla y la pasa al **Auxiliar Administrativo**.
- El Auxiliar gestiona la **Orden de Abastecimiento (20.2.01)**.
- Se realiza la **Verificación de la OT (20.2.04)**.
- Si el trabajo no es correcto, la **OT se abre nuevamente (20.2.02)**.
- Una vez cerrado correctamente, se archiva en **Archivo de mantenimiento correctivo (20.2.06)**.

### Casos especiales

- En casos donde la acción no corresponde, se registra como **Mantenimiento Suspendido (20.1.04)**.

Para más detalle ver:

- [20.1.01 Monitoreo – Checklist](./20.1.01_Monitoreo-Checklist.md)
- [20.2.03 Mantenimiento Cubiertas](./DetalledeMantenimientodeCubiertas.md)
- [20.2.01 Orden de Abastecimiento](./20.2.01-Orden-de-abastecimiento_Markdown.md)
- [20.2.04 OT Verificación](./OT_Verificacion.md)
- [20.2.02 OT Abierta nuevamente](./abrirNuevamente.md)
