import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Burro",
    short_name: "Burro",
    description: "Servicios para departamentos con profesionales verificados por video.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F1EFFF",
    theme_color: "#3F35F2",
    icons: [
      {
        src: "/brand/burro-icon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
