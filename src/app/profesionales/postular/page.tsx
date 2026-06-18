import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const serviceOptions = [
  "Mantención general",
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
    title: "Conectar",
    description: "Datos reales, teléfono, comuna base y video de presentación.",
  },
  {
    title: "Gestionar",
    description: "Servicios, precios desde, zonas de cobertura y calendario semanal.",
  },
  {
    title: "Monitorear",
    description: "Documentos, reglas de plataforma, reputación y solicitudes recibidas.",
  },
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-black text-neutral-800">{children}</label>;
}

export default function ProfessionalApplicationPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-neutral-950">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[2rem] bg-neutral-950 text-white shadow-xl">
              <div className="bg-[radial-gradient(circle_at_20%_20%,rgba(255,56,92,0.45),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.22),transparent_25%)] p-7 sm:p-9">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-200">
                  Alta de profesional
                </p>
                <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                  Ficha para ingresar al primer maestro.
                </h1>
                <p className="mt-5 leading-8 text-white/75">
                  Esta pantalla simula el formulario que usará una persona que ofrece servicios para postular, dejar sus datos, explicar experiencia y configurar su disponibilidad antes de aparecer publicada.
                </p>
              </div>

              <div className="space-y-4 p-6 sm:p-8">
                {onboardingSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 rounded-[1.4rem] bg-white/10 p-4 ring-1 ring-white/10">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-neutral-950">
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

            <div className="mt-5 rounded-[1.6rem] border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
              <p className="font-black">Nota para el piloto</p>
              <p className="mt-2">
                Para el primer maestro podemos completarlo manualmente con sus datos reales y después convertir esta ficha en formulario conectado a base de datos, video y aprobación interna.
              </p>
            </div>
          </aside>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-neutral-200 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 border-b border-neutral-200 pb-7 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Formulario tipo</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                  Postulación de prestador de servicios
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
                  Campos pensados para validar identidad, experiencia, cobertura, precios, disponibilidad y compromiso con las reglas de la plataforma.
                </p>
              </div>
              <Link className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-black transition hover:border-neutral-950" href="/profesionales">
                Volver
              </Link>
            </div>

            <form className="mt-8 space-y-10">
              <section>
                <h3 className="text-2xl font-black">1. Datos personales y contacto</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <FieldLabel>Nombre completo</FieldLabel>
                    <input className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: Juan Pérez Soto" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>RUT</FieldLabel>
                    <input className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: 12.345.678-9" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Teléfono / WhatsApp</FieldLabel>
                    <input className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: +56 9 1234 5678" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Correo electrónico</FieldLabel>
                    <input className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: maestro@email.com" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <FieldLabel>Comuna donde vive o desde donde sale a trabajar</FieldLabel>
                    <input className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Ej: Ñuñoa, Macul, Providencia, Santiago Centro" />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-black">2. Servicios que ofrece</h3>
                <p className="mt-2 leading-7 text-neutral-600">Seleccionar todos los servicios que realmente sabe hacer y puede respaldar con experiencia.</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-neutral-200 p-4 text-sm font-bold transition hover:border-neutral-950">
                      <input type="checkbox" className="h-4 w-4 accent-[#ff385c]" />
                      {service}
                    </label>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-black">3. Experiencia y forma de trabajo</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <FieldLabel>Años de experiencia</FieldLabel>
                    <select className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-neutral-950">
                      <option>Menos de 1 año</option>
                      <option>1 a 3 años</option>
                      <option>3 a 5 años</option>
                      <option>5 a 10 años</option>
                      <option>Más de 10 años</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Tipo de atención</FieldLabel>
                    <select className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-neutral-950">
                      <option>Trabajo solo</option>
                      <option>Trabajo con ayudante</option>
                      <option>Trabajo con equipo</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <FieldLabel>Presentación breve para clientes</FieldLabel>
                    <textarea className="min-h-32 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="Cuéntanos qué haces, qué experiencia tienes, cómo trabajas y por qué un cliente debería confiar en ti." />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-black">4. Precios y condiciones</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <FieldLabel>Precio visita desde</FieldLabel>
                    <input className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="$25.000" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Precio hora desde</FieldLabel>
                    <input className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-950" placeholder="$18.000" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel>Costo de materiales</FieldLabel>
                    <select className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-neutral-950">
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
                  <div className="rounded-[1.4rem] border border-neutral-200 p-5">
                    <FieldLabel>Comunas que acepta atender</FieldLabel>
                    <div className="mt-4 space-y-3">
                      {["Ñuñoa", "Providencia", "Las Condes", "Santiago Centro", "La Reina"].map((commune) => (
                        <label key={commune} className="flex items-center gap-3 font-bold text-neutral-700">
                          <input type="checkbox" className="h-4 w-4 accent-[#ff385c]" />
                          {commune}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.4rem] border border-neutral-200 p-5">
                    <FieldLabel>Disponibilidad inicial</FieldLabel>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {availabilityBlocks.map((block) => (
                        <label key={block} className="flex items-center gap-2 rounded-xl bg-neutral-50 px-3 py-2 text-sm font-bold text-neutral-700">
                          <input type="checkbox" className="h-4 w-4 accent-[#ff385c]" />
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
                  <div className="rounded-[1.4rem] border border-dashed border-neutral-300 bg-neutral-50 p-6">
                    <p className="font-black">Video de presentación obligatorio</p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      Debe durar más de 1 minuto. Debe decir quién es, qué servicios realiza, experiencia, comunas y forma de trabajo.
                    </p>
                    <button type="button" className="mt-5 rounded-full bg-neutral-950 px-5 py-3 text-sm font-black text-white">
                      Subir video
                    </button>
                  </div>
                  <div className="rounded-[1.4rem] border border-dashed border-neutral-300 bg-neutral-50 p-6">
                    <p className="font-black">Documentos sugeridos</p>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-neutral-600">
                      <li>• Foto de cédula o verificación de identidad.</li>
                      <li>• Fotos de trabajos anteriores.</li>
                      <li>• Certificaciones, recomendaciones o antecedentes.</li>
                    </ul>
                    <button type="button" className="mt-5 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-black">
                      Adjuntar archivos
                    </button>
                  </div>
                </div>
              </section>

              <section className="rounded-[1.7rem] bg-rose-50 p-5 ring-1 ring-rose-100 sm:p-6">
                <h3 className="text-2xl font-black text-[#d70466]">7. Reglas de plataforma</h3>
                <div className="mt-4 space-y-3 text-sm font-bold text-neutral-700">
                  <label className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 accent-[#ff385c]" />
                    Acepto que las solicitudes, reservas y coordinación inicial deben quedar dentro de la plataforma.
                  </label>
                  <label className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 accent-[#ff385c]" />
                    Acepto mantener precios y disponibilidad actualizados.
                  </label>
                  <label className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 accent-[#ff385c]" />
                    Acepto que el perfil será revisado antes de ser publicado.
                  </label>
                </div>
              </section>

              <div className="flex flex-col gap-3 border-t border-neutral-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-neutral-500">
                  En esta versión prototipo el formulario es visual. La siguiente etapa será guardar estos datos en base de datos y crear flujo de aprobación.
                </p>
                <button type="button" className="rounded-full bg-[#ff385c] px-7 py-4 font-black text-white transition hover:bg-[#e31c5f]">
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
