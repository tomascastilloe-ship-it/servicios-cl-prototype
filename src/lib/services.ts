export type Service = {
  slug: string;
  title: string;
  category: string;
  provider: string;
  commune: "Ñuñoa" | "Providencia";
  price: string;
  rating: string;
  reviews: number;
  badge: string;
  experience: string;
  description: string;
  includes: string[];
  availability: string[];
  gradient: string;
};

export const categories = [
  "Electricidad",
  "Gasfitería",
  "Aseo profundo",
  "Vidrios",
  "Alfombras",
  "Colchones",
  "Autos",
  "Mascotas",
];

export const services: Service[] = [
  {
    slug: "electricista-mario-fuentes",
    title: "Electricista certificado para departamentos",
    category: "Electricidad",
    provider: "Mario Fuentes",
    commune: "Ñuñoa",
    price: "$35.000",
    rating: "4,96",
    reviews: 128,
    badge: "Video verificado",
    experience: "12 años resolviendo emergencias eléctricas en departamentos y comunidades.",
    description:
      "Revisión, reparación e instalación eléctrica para departamentos. Ideal para enchufes, luminarias, tableros, automáticos y problemas de corto circuito.",
    includes: ["Diagnóstico en domicilio", "Reparaciones menores", "Instalación de luminarias", "Revisión de seguridad"],
    availability: ["Hoy 18:00", "Mañana 09:30", "Mañana 16:00"],
    gradient: "from-[#f6c46b] via-[#f6dcc0] to-white",
  },
  {
    slug: "limpieza-vidrios-claudia-rojas",
    title: "Limpieza premium de vidrios en altura baja",
    category: "Vidrios",
    provider: "Claudia Rojas",
    commune: "Providencia",
    price: "$28.000",
    rating: "4,91",
    reviews: 94,
    badge: "Disponible hoy",
    experience: "8 años en limpieza residencial, oficinas pequeñas y departamentos con terraza.",
    description:
      "Limpieza detallada de vidrios, ventanales, marcos y terrazas. Servicio pensado para departamentos con ventanales grandes y terminación prolija.",
    includes: ["Vidrios interiores", "Vidrios exteriores accesibles", "Marcos y rieles", "Terminación sin manchas"],
    availability: ["Hoy 17:30", "Mañana 11:00", "Viernes 10:00"],
    gradient: "from-[#9ed4cf] via-[#dff2ea] to-white",
  },
  {
    slug: "aseo-profundo-casalista",
    title: "Aseo completo post arriendo o mudanza",
    category: "Aseo profundo",
    provider: "Equipo CasaLista",
    commune: "Ñuñoa",
    price: "$49.000",
    rating: "4,88",
    reviews: 211,
    badge: "Más contratado",
    experience: "Equipo especializado en entregas de departamento, mudanzas y limpieza profunda.",
    description:
      "Aseo profundo para dejar el departamento listo para vivir, arrendar o entregar. Incluye cocina, baños, pisos, polvo, superficies y detalles visibles.",
    includes: ["Cocina y baños", "Pisos y superficies", "Interior de muebles vacíos", "Retiro de polvo acumulado"],
    availability: ["Mañana 08:30", "Jueves 15:00", "Sábado 09:00"],
    gradient: "from-[#9acb9f] via-[#e6f2d7] to-white",
  },
  {
    slug: "limpieza-colchones-tapices-pro",
    title: "Limpieza de colchones y tapices a domicilio",
    category: "Colchones",
    provider: "Tapicería Limpia Pro",
    commune: "Providencia",
    price: "$32.000",
    rating: "4,93",
    reviews: 76,
    badge: "Garantía 24h",
    experience: "6 años en sanitización, extracción y limpieza de colchones, sillones y tapices.",
    description:
      "Limpieza con máquina de extracción para colchones, sillones y tapices. Ayuda a remover manchas, ácaros, olores y suciedad acumulada.",
    includes: ["Aspirado profundo", "Aplicación de producto", "Extracción de suciedad", "Recomendaciones de secado"],
    availability: ["Hoy 19:00", "Mañana 13:00", "Viernes 17:00"],
    gradient: "from-[#c7a68f] via-[#f4ded0] to-white",
  },
  {
    slug: "paseo-perros-daniela-morales",
    title: "Paseo de perros para edificios y departamentos",
    category: "Mascotas",
    provider: "Daniela Morales",
    commune: "Ñuñoa",
    price: "$12.000",
    rating: "4,97",
    reviews: 63,
    badge: "Paseos diarios",
    experience: "Paseadora con experiencia en perros de departamento, rutinas y manejo responsable.",
    description:
      "Paseos programados para perros que viven en departamento. Servicio por bloques, con confirmación de salida y llegada.",
    includes: ["Paseo 45 minutos", "Agua durante ruta", "Reporte al dueño", "Retiro y entrega en conserjería"],
    availability: ["Hoy 16:00", "Mañana 07:30", "Mañana 18:30"],
    gradient: "from-[#eaa389] via-[#ffe0d0] to-white",
  },
  {
    slug: "lavado-autos-estacionamiento",
    title: "Limpieza de autos en estacionamiento de edificio",
    category: "Autos",
    provider: "AutoClean Domicilio",
    commune: "Providencia",
    price: "$22.000",
    rating: "4,89",
    reviews: 58,
    badge: "Sin mover tu auto",
    experience: "Lavado ecológico para estacionamientos subterráneos y comunidades residenciales.",
    description:
      "Limpieza exterior e interior de autos directamente en el estacionamiento del edificio, con bajo uso de agua y productos adecuados.",
    includes: ["Limpieza exterior", "Aspirado interior", "Tablero y detalles", "Vidrios interiores"],
    availability: ["Mañana 10:00", "Jueves 12:00", "Sábado 11:30"],
    gradient: "from-[#d3b89d] via-[#efe3d5] to-white",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
