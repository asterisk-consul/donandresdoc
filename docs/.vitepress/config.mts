import { defineConfig, type DefaultTheme } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import tailwindcss from "@tailwindcss/vite";

export default withMermaid(
  defineConfig({
    base: "/donandresdoc/",
    title: "Don Andres",
    description: "Documentación de ejemplo",

    vite: {
      optimizeDeps: {
        include: ["mermaid"],
      },
      plugins: [tailwindcss()],
    },
    themeConfig: {
      logo: "/donandres.ico",
      nav: [
        { text: "Inicio", link: "/" },
        { text: "Soporte", link: "https://surl.li/kmiuwb" },
      ],
      sidebar: {
        "/reportes/": sidebarReportes(),
        "/flows/": sidebarFlows(),
        "/CasosParticulares/": sidebarCasosParticulares(),
      },

      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/asterisk-consul/donandresdoc",
        },
      ],

      lastUpdated: {
        text: "Última actualización",
        formatOptions: {
          dateStyle: "short",
        },
      },

      docFooter: {
        prev: "Anterior",
        next: "Siguiente",
      },

      outline: {
        level: "deep",
        label: "En esta página",
      },

      search: {
        provider: "local",
      },
    },
  })
);
// https://vitepress.dev/reference/site-config

function sidebarReportes(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Reportes",
      link: "/reportes/",
      collapsed: false,
      items: [
        { text: "Indice", link: "/reportes/" },
        {
          text: "Manual de Uso",
          collapsed: true,
          items: [
            {
              text: "Compras",
              link: "/reportes/COMPRAS_maestro",
            },
            {
              text: "Cisterna",
              link: "/reportes/CisternaUsuario",
            },
            { text: "RemitosVSCompras", link: "/reportes/RemitosVsCompras" },
            {
              text: "Sueldos",
              link: "/reportes/manual_usuario_rhsueldos",
            },
            {
              text: "Trazabilidad de Cubiertas",
              link: "/reportes/trazabilidadCubiertas/",
            },
          ],
        },
        {
          text: "Manual Tecnico",
          collapsed: true,
          items: [
            {
              text: "Cisterna",
              link: "/reportes/CisternaTecnico",
            },
          ],
        },
        {
          text: "Comportamietno de filtros",
          collapsed: true,
          items: [
            { text: "Fechas", link: "/reportes/ComportamientoFiltroFechas" },
            { text: "Busqueda parcial", link: "/reportes/BusquedaParcial" },
          ],
        },
      ],
    },
  ];
}

function sidebarFlows(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Flujos",
      link: "/flows/",
      collapsed: false,
      items: [
        { text: "Inicio", link: "/flows/" },
        {
          text: "Ajustes",
          collapsed: true,
          items: [
            { text: "Ajustes", link: "/flows/ajustes/ajuste" },
            {
              text: "Realizar Ajuste",
              link: "/flows/ajustes/50301RealizarAjuste",
            },
            {
              text: "Ajustes Positivos o Negativos",
              link: "/flows/ajustes/AjustePosyNeg/",
            },
          ],
        },
        {
          text: "Mejoras",
          collapsed: true,
          items: [
            {
              text: "Hallazgos",
              link: "/flows/PM_Hallazgos/hallazgo",
            },
          ],
        },
        {
          text: "Compras",
          collapsed: true,
          items: [
            {
              text: "Hallazgos",
              link: "/flows/PM_Hallazgos/hallazgo",
            },
          ],
        },
        {
          text: "Mantenimiento",
          link: "/flows/Mantenimiento/",
          collapsed: true,
          items: [
            {
              text: "20.1.01 Monitoreo - Check list",
              link: "/flows/Mantenimiento/20.1.01_Monitoreo-Checklist",
            },

            {
              text: "20.2.01 Orden de abastecimiento",
              link: "/flows/Mantenimiento/20.2.01-Orden-de-abastecimiento_Markdown",
            },
            {
              text: "20.2.08 Mantenimiento de cubiertas",
              link: "/flows/Mantenimiento/DetalledeMantenimientodeCubiertas",
            },
            {
              text: "20.2.02 OT Abierta nuevamente",
              link: "/flows/Mantenimiento/abrirNuevamente",
            },
            {
              text: "OT Verificacion",
              link: "/flows/Mantenimiento/OT_Verificacion",
            },
          ],
        },
      ],
    },
  ];
}

function sidebarCasosParticulares(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Casos Particulares",
      link: "/casosParticulares/",
      collapsed: false,
      items: [
        { text: "Indice", link: "/casosParticulares/" },
        {
          text: "Cubiertas",
          link: "/CasosParticulares/cubiertas/Cubiertas",
          collapsed: true,
          items: [
            {
              text: "Ingreso - Crear Articulo/Cubierta",
              link: "/CasosParticulares/cubiertas/crearcuiertas",
            },
            {
              text: "Remito de ingreso",
              link: "/CasosParticulares/cubiertas/remitoingresocubiertas",
            },
            {
              text: "Mantenimientos varios",
              link: "/flows/Mantenimiento/DetalledeMantenimientodeCubiertas",
            },
            {
              text: "Remito de salida",
              link: "/CasosParticulares/cubiertas/remitosalidacubiertas",
            },
          ],
        },
      ],
    },
  ];
}
