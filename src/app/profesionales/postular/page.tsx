import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const whatsappVideoHref =
  "https://wa.me/?text=" +
  encodeURIComponent(
    "Hola Burro, quiero enviar mi video de presentación para postular como profesional. Mi nombre es: "
  );


const serviceOptions = [
  "Maestro multifunción / mantención general",
  "Electricidad menor",
  "Gasfitería menor",
  "Cerrajería",
  "Pintura y terminaciones",
  "Instalación de lámparas/cortinas",
  "Armado de muebles",
  "Aseo profundo",
  "Limpieza de alfombras/colchones",
  "Limpieza de vidrios",
  "Paseo de perros",
  "Lavado de autos a domicilio",
  "Otros servicios a domicilio",
];

const availabilityBlocks = [
  "Lunes AM",
  "Lunes PM",
  "Martes AM",
  "Martes PM",
  "Miércoles AM",
  "Miércoles PM",
  "Jueves AM",
  "Jueves PM",
  "Viernes AM",
  "Viernes PM",
  "Sábado AM",
  "Sábado PM",
];

const onboardingSteps = [
  {
    title: "Identificar",
    description: "Nombre, RUT, contacto, comuna base y datos para validación interna.",
  },
  {
    title: "Presentar",
    description: "Video de más de 1 minuto, experiencia, fotos de trabajos y especialidades.",
  },
  {
    title: "Configurar",
    description: "Servicios, precios desde, cobertura, disponibilidad semanal y reglas de reserva.",
  },
  {
    title: "Aprobar",
    description: "Revisión interna, perfil público, match protegido y seguimiento de reputación.",
  },
];

const pilotChecklist = [
  "Confirmar identidad y teléfono del maestro.",
  "Grabar video vertical de presentación, ideal 60 a 90 segundos.",
  "Definir 3 a 6 servicios principales que realmente pueda ejecutar.",
  "Acordar precios desde y cuándo requiere cotización previa.",
  "Cargar fotos reales de trabajos anteriores si tiene disponibles.",
  "Definir comunas piloto: Ñuñoa y Providencia primero.",
  "Acordar reglas: no sacar al cliente de la plataforma antes del match.",
];

const videoScript = [
  "Primeros 10 segundos: Hola, soy [nombre y apellido], vivo/trabajo en [comuna] y soy [oficio].",
  "Tengo [años] de experiencia haciendo trabajos en casas, departamentos o edificios.",
  "Hago trabajos como: cambiar enchufes, revisar luces, reparar filtraciones, instalar repisas, pintar detalles o arreglar muebles.",
  "Si tengo certificados, cursos o experiencia especial, lo digo de forma simple.",
  "Trabajo principalmente en [comunas] y mi disponibilidad habitual es [días/horarios].",
  "Cierro diciendo: trabajo con burro.cl, coordino por la plataforma y me gusta dejar claro el valor antes de comenzar.",
];

const serviceDetailGroups = [
  {
    title: "Electricidad",
    helper: "Trabajos eléctricos chicos y medianos para departamentos.",
    items: [
      "Cambio de enchufes",
      "Enchufes macho/hembra",
      "Interruptores",
      "Automáticos",
      "Diferenciales",
      "Revisión de tablero",
      "Instalación de lámparas",
      "Cambio de soquetes",
      "Citófono/timbre",
      "Cortocircuitos simples",
      "Luces LED",
      "Canaletas eléctricas",
    ],
  },
  {
    title: "Gasfitería",
    helper: "Arreglos de agua, baño y cocina.",
    items: [
      "Llave que gotea",
      "WC corriendo",
      "Cambio de sifón",
      "Destape simple",
      "Filtraciones de baño",
      "Filtraciones bajo lavaplatos",
      "Cambio de flexibles",
      "Cambio de grifería",
      "Sellos de tina/ducha",
      "Revisión de calefón",
      "Presión de agua",
      "Instalación lavadora",
    ],
  },
  {
    title: "Maestro / mantención",
    helper: "Instalaciones y arreglos generales dentro del departamento.",
    items: [
      "Instalar repisas",
      "Soporte de TV",
      "Cortinas",
      "Persianas",
      "Armado de muebles",
      "Arreglo de puertas",
      "Bisagras",
      "Chapitas/manillas",
      "Silicona y sellos",
      "Pintura menor",
      "Tapar hoyos",
      "Preparar depto para arriendo",
    ],
  },
  {
    title: "Aseo profundo",
    helper: "Limpieza para vivir, entregar o arrendar un departamento.",
    items: [
      "Aseo cocina",
      "Aseo baños",
      "Limpieza post arriendo",
      "Limpieza post mudanza",
      "Limpieza de grasa",
      "Horno/campana",
      "Refrigerador",
      "Closets",
      "Balcón/terraza",
      "Pisos flotantes",
      "Junturas de cerámica",
      "Desinfección general",
    ],
  },
  {
    title: "Vidrios",
    helper: "Limpieza de ventanas, espejos y mamparas.",
    items: [
      "Ventanas interiores",
      "Ventanas exteriores accesibles",
      "Ventanas de balcón",
      "Mamparas de baño",
      "Espejos",
      "Rieles de ventana",
      "Marcos de aluminio",
      "Mallas de seguridad",
      "Ventanal grande",
      "Vidrios en altura baja",
    ],
  },
  {
    title: "Alfombras / colchones / tapices",
    helper: "Lavado y sanitizado de textiles del hogar.",
    items: [
      "Colchón 1 plaza",
      "Colchón 2 plazas",
      "King / super king",
      "Sofá 2 cuerpos",
      "Sofá 3 cuerpos",
      "Sitiales",
      "Alfombra chica",
      "Alfombra grande",
      "Manchas",
      "Olores",
      "Ácaros",
      "Secado rápido",
    ],
  },
  {
    title: "Paseo de perros",
    helper: "Opciones claras para mascotas chicas, medianas y grandes.",
    items: [
      "Perro chico",
      "Perro mediano",
      "Perro grande",
      "Paseo solo",
      "Paseo compartido",
      "30 minutos",
      "60 minutos",
      "Recojo caca",
      "Agua y cuidado básico",
      "Foto/reporte del paseo",
      "Perros nerviosos",
      "Paseo recurrente",
    ],
  },
  {
    title: "Lavado de autos",
    helper: "Servicios móviles para estacionamientos de edificios.",
    items: [
      "Lavado exterior",
      "Aspirado interior",
      "Limpieza de tablero",
      "Vidrios interiores",
      "Maletero",
      "Auto chico",
      "SUV/camioneta",
      "Lavado sin agua",
      "Encerado simple",
      "Eliminación de olores",
      "Limpieza de tapiz",
    ],
  },
  {
    title: "Cerrajería",
    helper: "Aperturas y cambios simples de seguridad.",
    items: [
      "Cambio de chapa",
      "Apertura simple",
      "Copia/ajuste de llave",
      "Cerradura digital",
      "Seguro adicional",
      "Puerta trabada",
      "Manilla suelta",
      "Cilindro",
    ],
  },
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-black text-neutral-800">{children}</label>;
}

export default function ProfessionalApplicationPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#14123D]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[2rem] bg-[#14123D] text-white shadow-xl">
              <div className="bg-[radial-gradient(circle_at_20%_20%,rgba(255,56,92,0.45),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.22),transparent_25%)] p-7 sm:p-9">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C8C5FF]">
                  Alta de profesional
                </p>
                <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                  Ficha completa para ingresar al primer maestro.
                </h1>
                <p className="mt-5 leading-8 text-white/75">
                  Esta es la ficha guiada para registrar al primer prestador real: datos, video, experiencia, servicios, precios, comunas, agenda y aprobación interna antes de publicarlo.
                </p>
              </div>

              <div className="space-y-4 p-6 sm:p-8">
                {onboardingSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 rounded-[1.4rem] bg-white/10 p-4 ring-1 ring-white/10">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-[#14123D]">
                      {index + 1}
                    </span>
                    <div>
                      <h2 className="font-black">{step.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-white/65">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[1.6rem] border border-amber-200 bg-[#FFF8DD] p-5 text-sm leading-6 text-[#4A3A00]">
              <p className="font-black">Nota para el piloto</p>
              <p className="mt-2">
                Para el primer maestro podemos completarlo manualmente con sus datos reales y después convertir esta ficha en formulario conectado a base de datos, video y aprobación interna.
              </p>
            </div>
          </aside>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-neutral-200 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 border-b border-[#E7E5FF] pb-7 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#3F35F2]">Formulario del prestador</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                  Alta de maestro / profesional de servicios
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-[#5E5A8F]">
                  Formulario pensado para cargar a la primera persona que ofrecerá servicios, dejar su perfil listo y después conectarlo a base de datos, video y agenda real.
                </p>
              </div>
              <Link className="rounded-full border border-[#D8D6FF] px-5 py-3 text-sm font-black transition hover:border-[#3F35F2]" href="/profesionales">
                Volver
              </Link>
            </div>

            <form className="mt-8 space-y-10">
              <section className="rounded-[1.7rem] border border-[#E7E5FF] bg-neutral-50 p-5 sm:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3F35F2]">Tipo de alta recomendada</p>
                    <h3 className="mt-2 text-2xl font-black">Ficha guiada + aprobación manual</h3>
                    <p className="mt-2 max-w-2xl leading-7 text-[#5E5A8F]">
                      Para el primer maestro conviene que el formulario lo completemos nosotros con él, por teléfono o presencial, y luego dejemos su perfil publicado como caso piloto.
                    </p>
                  </div>
                  <span className="rounded-full bg-[#14123D] px-4 py-2 text-sm font-black text-white">Piloto v1</span>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {pilotChecklist.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-[#27235F] ring-1 ring-neutral-200">
                      <span className="text-[#3F35F2]">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-black">1. Datos personales y contacto</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <FieldLabel>Nombre completo</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: Juan Pérez Soto" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>RUT</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: 12.345.678-9" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Teléfono / WhatsApp</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: +56 9 1234 5678" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Correo electrónico</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: maestro@email.com" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Comuna donde vive o desde donde sale a trabajar</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: Ñuñoa, Macul, Providencia, Santiago Centro" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Medio preferido para contactarlo</FieldLabel>
                    <select className="w-full rounded-2xl border border-[#E7E5FF] bg-white px-4 py-3 outline-none transition focus:border-neutral-950">
                      <option>WhatsApp</option>
                      <option>Llamada telefónica</option>
                      <option>Correo electrónico</option>
                      <option>Indiferente</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <FieldLabel>Observación interna</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: referido por Tomás, primer maestro piloto, disponible para grabar video esta semana" />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-black">2. Servicios que ofrece</h3>
                <p className="mt-2 leading-7 text-[#5E5A8F]">Seleccionar todos los servicios que realmente sabe hacer y puede respaldar con experiencia.</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#E7E5FF] p-4 text-sm font-bold transition hover:border-[#3F35F2]">
                      <input type="checkbox" className="h-4 w-4 accent-[#3F35F2]" />
                      {service}
                    </label>
                  ))}
                </div>
                <div className="mt-6 rounded-[1.7rem] bg-neutral-50 p-5 ring-1 ring-neutral-200">
                  <p className="font-black">Globos específicos por rubro</p>
                  <p className="mt-2 text-sm leading-6 text-[#5E5A8F]">
                    Cada rubro tiene sus propios globos. La persona marca lo que realmente hace y después puede escribir detalles que no aparezcan.
                  </p>
                  <div className="mt-5 space-y-5">
                    {serviceDetailGroups.map((group) => (
                      <section key={group.title} className="rounded-[1.4rem] bg-white p-4 ring-1 ring-[#E7E5FF]">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                          <div>
                            <h4 className="text-lg font-black text-[#14123D]">{group.title}</h4>
                            <p className="text-sm leading-6 text-[#5E5A8F]">{group.helper}</p>
                          </div>
                          <span className="text-xs font-black uppercase tracking-[0.16em] text-[#3F35F2]">
                            {group.items.length} opciones
                          </span>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {group.items.map((example) => (
                            <label key={`${group.title}-${example}`} className="cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-black text-[#27235F] ring-1 ring-neutral-200 transition has-[:checked]:bg-[#3F35F2] has-[:checked]:text-white has-[:checked]:ring-[#3F35F2] hover:ring-[#3F35F2]">
                              <input type="checkbox" className="sr-only" />
                              {example}
                            </label>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                  <div className="mt-5 space-y-2">
                    <FieldLabel>Detalle exacto de trabajos que realiza</FieldLabel>
                    <textarea className="min-h-28 w-full rounded-2xl border border-[#E7E5FF] bg-white px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: cambio enchufes macho/hembra, reviso diferenciales y tablero; o paseo perros chicos/medianos, recojo caca y envío foto del paseo." />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-black">3. Experiencia y forma de trabajo</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <FieldLabel>Años de experiencia</FieldLabel>
                    <select className="w-full rounded-2xl border border-[#E7E5FF] bg-white px-4 py-3 outline-none transition focus:border-neutral-950">
                      <option>Menos de 1 año</option>
                      <option>1 a 3 años</option>
                      <option>3 a 5 años</option>
                      <option>5 a 10 años</option>
                      <option>Más de 10 años</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Tipo de atención</FieldLabel>
                    <select className="w-full rounded-2xl border border-[#E7E5FF] bg-white px-4 py-3 outline-none transition focus:border-neutral-950">
                      <option>Trabajo solo</option>
                      <option>Trabajo con ayudante</option>
                      <option>Trabajo con equipo</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <FieldLabel>Presentación breve para clientes</FieldLabel>
                    <textarea className="min-h-32 w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Cuéntanos qué haces, qué experiencia tienes, cómo trabajas y por qué un cliente debería confiar en ti." />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <FieldLabel>Trabajos que NO realiza o límites del servicio</FieldLabel>
                    <textarea className="min-h-24 w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: no hace trabajos con gas certificado, no realiza obras mayores, no trabaja domingos, no compra materiales sin abono." />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-black">4. Precios y condiciones</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <FieldLabel>Precio visita desde</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="$25.000" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Precio hora desde</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="$18.000" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Precio diagnóstico desde</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="$15.000" />
                  </div>
                  <div className="space-y-2 md:col-span-3">
                    <FieldLabel>Servicios con precio fijo sugerido</FieldLabel>
                    <textarea className="min-h-24 w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: instalar lámpara desde $20.000, cambiar enchufe desde $18.000, reparar bisagra desde $15.000." />
                  </div>
                  <div className="space-y-2 md:col-span-3">
                    <FieldLabel>Costo de materiales</FieldLabel>
                    <select className="w-full rounded-2xl border border-[#E7E5FF] bg-white px-4 py-3 outline-none transition focus:border-neutral-950">
                      <option>Cliente compra materiales</option>
                      <option>Profesional cotiza materiales</option>
                      <option>Depende del servicio</option>
                    </select>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-black">5. Cobertura y disponibilidad</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-[#E7E5FF] p-5">
                    <FieldLabel>Comunas que acepta atender</FieldLabel>
                    <div className="mt-4 space-y-3">
                      {["Ñuñoa", "Providencia", "Las Condes", "Santiago Centro", "La Reina"].map((commune) => (
                        <label key={commune} className="flex items-center gap-3 font-bold text-[#27235F]">
                          <input type="checkbox" className="h-4 w-4 accent-[#3F35F2]" />
                          {commune}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.4rem] border border-[#E7E5FF] p-5">
                    <FieldLabel>Disponibilidad inicial</FieldLabel>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {availabilityBlocks.map((block) => (
                        <label key={block} className="flex items-center gap-2 rounded-xl bg-neutral-50 px-3 py-2 text-sm font-bold text-[#27235F]">
                          <input type="checkbox" className="h-4 w-4 accent-[#3F35F2]" />
                          {block}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-black">6. Video, fotos y documentos</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-dashed border-[#D8D6FF] bg-neutral-50 p-6">
                    <p className="font-black">Video de presentación obligatorio</p>
                    <p className="mt-2 text-sm leading-6 text-[#5E5A8F]">
                      Debe durar más de 1 minuto. Puede grabarse con celular, en vertical, y enviarse por WhatsApp. No buscamos un video perfecto: buscamos que el cliente entienda quién es, qué hace y por qué puede confiar.
                    </p>
                    <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
                      <p className="text-sm font-black text-neutral-800">Guion sugerido</p>
                      <ul className="mt-2 space-y-2 text-sm leading-6 text-[#5E5A8F]">
                        {videoScript.map((line) => (
                          <li key={line}>• {line}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <label className="cursor-pointer rounded-full bg-[#14123D] px-5 py-3 text-center text-sm font-black text-white transition hover:bg-[#27235F]">
                        <input className="sr-only" type="file" accept="video/*" />
                        Subir video
                      </label>
                      <a
                        href={whatsappVideoHref}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[#D8D6FF] bg-white px-5 py-3 text-center text-sm font-black text-neutral-900 transition hover:border-[#3F35F2]"
                      >
                        Enviar video por WhatsApp
                      </a>
                    </div>
                    <p className="mt-3 text-xs leading-5 text-[#7773A8]">
                      En iPhone o Android, “Subir video” abre la galería/cámara. WhatsApp abre un mensaje listo para adjuntar el video.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-dashed border-[#D8D6FF] bg-neutral-50 p-6">
                    <p className="font-black">Documentos sugeridos</p>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-[#5E5A8F]">
                      <li>• Foto de cédula o verificación de identidad.</li>
                      <li>• Fotos de trabajos anteriores.</li>
                      <li>• Certificaciones, recomendaciones o antecedentes.</li>
                    </ul>
                    <label className="mt-5 inline-flex cursor-pointer rounded-full border border-[#D8D6FF] bg-white px-5 py-3 text-sm font-black transition hover:border-[#3F35F2]">
                      <input className="sr-only" type="file" multiple accept="image/*,.pdf" />
                      Adjuntar archivos
                    </label>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-black">7. Datos bancarios y forma de pago</h3>
                <p className="mt-2 leading-7 text-[#5E5A8F]">
                  El prestador no cobra directamente al cliente. La plataforma cobra con tarjeta cuando el profesional confirma llegada a la propiedad y luego paga al prestador por transferencia bancaria, normalmente 24 a 48 horas después de realizado el trabajo.
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <FieldLabel>Banco</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: Banco de Chile, Santander, Estado" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Tipo de cuenta</FieldLabel>
                    <select className="w-full rounded-2xl border border-[#E7E5FF] bg-white px-4 py-3 outline-none transition focus:border-neutral-950">
                      <option>Cuenta corriente</option>
                      <option>Cuenta vista</option>
                      <option>Cuenta RUT</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Número de cuenta</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Número de cuenta para transferencia" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Nombre titular de la cuenta</FieldLabel>
                    <input className="w-full rounded-2xl border border-[#E7E5FF] px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Debe coincidir idealmente con el prestador" />
                  </div>
                </div>
                <div className="mt-5 rounded-2xl bg-[#14123D] p-5 text-sm leading-6 text-white">
                  <p className="font-black">Regla económica para el prestador</p>
                  <p className="mt-2 text-white/70">El cliente paga con tarjeta dentro de burro.cl; no se permite recibir pagos externos, efectivo, transferencia directa ni WhatsApp para cerrar por fuera. El pago al prestador se libera por transferencia bancaria luego de cumplir el servicio.</p>
                </div>
              </section>

              <section className="rounded-[1.7rem] bg-[#F1EFFF] p-5 ring-1 ring-rose-100 sm:p-6">
                <h3 className="text-2xl font-black text-[#3F35F2]">8. Reglas de plataforma</h3>
                <div className="mt-4 space-y-3 text-sm font-bold text-[#27235F]">
                  <label className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 accent-[#3F35F2]" />
                    Acepto que las solicitudes, reservas, pagos y coordinación inicial deben quedar dentro de la plataforma.
                  </label>
                  <label className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 accent-[#3F35F2]" />
                    Acepto mantener precios y disponibilidad actualizados.
                  </label>
                  <label className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 accent-[#3F35F2]" />
                    Acepto que el perfil será revisado antes de ser publicado y que recibiré pagos por transferencia 24–48 horas después de realizado el trabajo.
                  </label>
                </div>
              </section>

              <div className="flex flex-col gap-3 border-t border-[#E7E5FF] pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-[#7773A8]">
                  En esta versión prototipo el formulario es visual. La siguiente etapa será guardar estos datos en base de datos y crear flujo de aprobación.
                </p>
                <button type="button" className="rounded-full bg-[#3F35F2] px-7 py-4 font-black text-white transition hover:bg-[#2F1FEA]">
                  Enviar postulación
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
