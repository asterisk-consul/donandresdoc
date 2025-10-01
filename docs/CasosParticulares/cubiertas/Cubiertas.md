# Cubiertas

```mermaid
---
config:
  logLevel: 'debug'
  theme: 'default'
  themeVariables:
    # Escala principal
    cScale0: '#2E4057'      # Azul gris oscuro (base sólida)
    cScaleLabel0: '#ffffff' # Texto blanco sobre oscuro
    cScale1: '#6C9BCF'      # Azul suave para pasos intermedios
    cScaleLabel1: '#ffffff'
    cScale2: '#A3CEF1'      # Celeste claro (suave, moderno)
    cScaleLabel2: '#1a1a1a'
    cScale3: '#EDEDED'      # Gris muy claro (minimalista)
    cScaleLabel3: '#1a1a1a'
    cScale4: '#D9D9D9'      # Gris medio para neutral
    cScaleLabel4: '#1a1a1a'
---

timeline
    title Hoja de ruta de cubiertas
    section Ingreso
        Paso 1: Crear Articulo/Cubierta
        Paso 2: Remito Ingreso
    section procesos
        Mantenimientos: Mantenimientos varios
    section salida
        Salida: Remito Salida
```

## Procesos de Mantenimientos

El recorrido de cada cubierta dentro del sistema se organiza en tres grandes momentos.
Cada uno cuenta con su propia documentación, donde se explican los procedimientos, registros y controles asociados:

### 🟢 Ingreso

La cubierta entra al sistema mediante la creación del artículo y luego la generación del remito de ingreso.

[👉 Ver creacion del articulo](./crearcuiertas.md)

[👉 Ver detalle del Ingreso](./remitoingresocubiertas.md)

### 🔵 Procesos

Aquí se registran los diferentes mantenimientos y movimientos (rotaciones, reparaciones, cambios, etc.).

[👉 Ver detalle del mantenimeinto](../../flows/Mantenimiento/DetalledeMantenimientodeCubiertas.md)

### 🟠 Salida

El ciclo finaliza con la emisión del remito de salida y la actualización del historial de la cubierta.

[👉 Ver detalle de la Salida](./remitosalidacubiertas.md)
