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
      nav: [
        { text: "Home", link: "/" },
        { text: "Soporte", link: "https://surl.li/kmiuwb" },
      ],
      sidebar: {
        "/reportes/": sidebarReportes(),
        "/flows/": sidebarFlows(),
      },

      socialLinks: [
        { icon: "github", link: "https://github.com/vuejs/vitepress" },
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
            { text: "RemitosVSCompras", link: "/reportes/RemitosVsCompras" },
            {
              text: "Sueldos",
              link: "/reportes/manual_usuario_rhsueldos",
            },
            {
              text: "Cisterna",
              link: "/reportes/CisternaUsuario",
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
      text: "Flows",
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
          collapsed: true,
          items: [
            {
              text: "Mantenimiento",
              link: "/flows/Mantenimiento/",
            },
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
              text: "OT Verificacion",
              link: "/flows/Mantenimiento/OT_Verificacion.md",
            },
          ],
        },
      ],
    },
  ];
}
