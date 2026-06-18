import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const services = [
  "Mantención general de departamentos",
  "Electricidad menor: enchufes, interruptores, lámparas",
  "Gasfitería menor: filtraciones simples, llaves, sifones",
  "Instalación de repisas, cortinas y accesorios",
  "Armado y ajuste de muebles",
  "Pintura y terminaciones menores",
  "Reparaciones rápidas para entrega o publicación de propiedad",
];

const jobExamples = [
  {
    title: "Electricidad menor",
    examples: ["Cambio de enchufes", "Interruptores", "Lámparas", "Revisión de tablero", "Cortocircuitos simples", "Timbres y citófonos"],
  },
  {
    title: "Gasfitería / baños",
    examples: ["Filtraciones", "Llaves que gotean", "Sifones", "WC corriendo", "Duchas", "Lavamanos y lavaplatos"],
  },
  {
    title: "Instalaciones",
    examples: ["Repisas", "Cortinas", "Soportes TV", "Espejos", "Cuadros", "Accesorios de baño"],
  },
  {
    title: "Mantención general",
    examples: ["Puertas", "Bisagras", "Muebles", "Sellos", "Pintura menor", "Preparar depto para arriendo/venta"],
  },
];

const videoSteps = [
  "Graba con tu celular en vertical, con buena luz y sin ruido.",
  "Mira a la cámara y habla simple, como si le explicaras a un vecino.",
  "Primeros 10 segundos: di tu nombre, apellido, comuna y oficio.",
  "Cuenta hace cuántos años trabajas en esto.",
  "Explica qué trabajos haces con ejemplos concretos: enchufes, filtraciones, repisas, pintura, etc.",
  "Di si tienes certificados, cursos, herramientas o experiencia en edificios/departamentos.",
  "Cierra diciendo tus comunas, disponibilidad y que trabajas por servicios.cl.",
  "Envíanos el video por WhatsApp. No tiene que ser perfecto; tiene que ser claro y honesto.",
];

const availability = [
  { day: "Lunes", blocks: ["09:00–13:00", "15:00–18:00"] },
  { day: "Martes", blocks: ["10:00–14:00"] },
  { day: "Miércoles", blocks: ["09:00–13:00", "15:00–19:00"] },
  { day: "Jueves", blocks: ["10:00–16:00"] },
  { day: "Viernes", blocks: ["09:00–13:00"] },
];

const profileFields = [
  ["Nombre público", "Maestro multifunción piloto"],
  ["Categoría principal", "Mantención general para departamentos"],
  ["Comunas piloto", "Ñuñoa y Providencia"],
  ["Experiencia", "Más de 8 años en reparaciones y mantención domiciliaria"],
  ["Precio visita desde", "$25.000"],
  ["Precio hora desde", "$18.000"],
  ["Pago al maestro", "Transferencia bancaria 24–48 horas después del trabajo"],
  ["Estado", "Pendiente de validación final y video"],
];

const internalChecklist = [
  "Confirmar nombre completo y RUT.",
  "Solicitar video vertical de presentación, mínimo 1 minuto.",
  "Validar teléfono, correo y comuna base.",
  "Definir precios finales por tipo de trabajo.",
  "Cargar 3 a 6 fotos reales de trabajos anteriores.",
  "Aceptar reglas de plataforma y coordinación interna.",
];

export default function PilotProfessionalPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-neutral-950">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Ficha piloto interna</p>
            <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Primer maestro de servicios
            </h1>
          </div>
          <Link href="/profesionales/postular" className="w-fit rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-black shadow-sm transition hover:border-neutral-950">
            Ver formulario completo
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <aside className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-neutral-200">
            <div className="relative min-h-[360px] bg-neutral-950 p-6 text-white sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,56,92,0.45),transparent_32%),radial-gradient(circle_at_75%_0%,rgba(255,255,255,0.18),transparent_24%)]" />
              <div className="relative flex min-h-[310px] flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-black backdrop-blur">Piloto v1</span>
                  <span className="rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-neutral-950">Pendiente video</span>
                </div>

                <div className="rounded-[1.6rem] bg-white p-5 text-neutral-950 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-100 to-orange-100 text-3xl font-black text-[#ff385c]">
                      M
                    </div>
                    <div>
                      <h2 className="text-2xl font-black">Maestro multifunción</h2>
                      <p className="mt-1 text-sm font-bold text-neutral-500">Ñuñoa · Providencia · Departamentos</p>
                    </div>
                  </div>
                  <div className="mt-5 rounded-[1.2rem] bg-neutral-100 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff385c]">Video de presentación</p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      Aquí irá el video real de más de 1 minuto: presentación, experiencia, servicios, comunas y forma de trabajo.
                    </p>
                    <button className="mt-4 rounded-full bg-neutral-950 px-5 py-3 text-sm font-black text-white">▶ Vista previa video</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-black">Resumen público</h3>
              <p className="mt-3 leading-7 text-neutral-600">
                Profesional orientado a resolver mantenciones rápidas en departamentos: reparaciones menores, instalaciones, ajustes y trabajos previos a publicar, arrendar o entregar una propiedad.
              </p>

              <div className="mt-6 grid gap-3">
                {profileFields.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500">{label}</p>
                    <p className="mt-1 font-black text-neutral-950">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Servicios ofrecidos</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Qué podrá contratar el cliente</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {services.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-neutral-200 p-4 font-bold text-neutral-700">
                    <span className="text-[#ff385c]">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Especialidades con ejemplos</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Que el maestro diga exactamente qué trabajos hace</h2>
              <p className="mt-3 leading-7 text-neutral-600">
                La ficha debe ayudar a personas que no saben venderse bien. Por eso mostramos ejemplos simples, tipo “globitos”, para que el prestador elija o copie los trabajos que realmente realiza.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {jobExamples.map((group) => (
                  <div key={group.title} className="rounded-3xl border border-neutral-200 p-5">
                    <h3 className="text-xl font-black">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.examples.map((example) => (
                        <span key={example} className="rounded-full bg-rose-50 px-4 py-2 text-sm font-black text-[#d70466] ring-1 ring-rose-100">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Video por WhatsApp</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Guía simple para grabar el video con celular</h2>
              <p className="mt-3 leading-7 text-neutral-600">
                El maestro no necesita cámara profesional. Puede grabarse con su celular y enviar el video por WhatsApp. La idea es que hable claro, muestre confianza y explique qué sabe hacer.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {videoSteps.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm font-bold text-neutral-700">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-black text-white">{index + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl bg-neutral-950 p-5 text-white">
                <p className="font-black">Mensaje tipo para enviarle al maestro por WhatsApp</p>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  “Hola, graba un video vertical de mínimo 1 minuto. Parte diciendo tu nombre, oficio, comuna y años de experiencia. Después cuenta con ejemplos qué trabajos haces: enchufes, filtraciones, repisas, pintura, baños, etc. Si tienes certificados o experiencia en edificios, menciónalo. No tiene que quedar perfecto; solo claro, honesto y con buena luz.”
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Agenda piloto</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Disponibilidad inicial</h2>
              <p className="mt-3 leading-7 text-neutral-600">
                Esta agenda es de ejemplo. La idea es que el maestro confirme bloques reales y el cliente pueda solicitar horario compatible.
              </p>
              <div className="mt-6 grid gap-3">
                {availability.map((day) => (
                  <div key={day.day} className="rounded-2xl border border-neutral-200 p-4">
                    <p className="font-black">{day.day}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {day.blocks.map((block) => (
                        <span key={block} className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-bold text-neutral-700">
                          {block}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-neutral-950 p-6 text-white shadow-xl sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-200">Flujo tipo app</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Conectar · Gestionar · Monitorear</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.4rem] bg-white/10 p-5 ring-1 ring-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-neutral-950">1</span>
                  <h3 className="mt-5 font-black">Conectar</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">El maestro sube datos, video y servicios.</p>
                </div>
                <div className="rounded-[1.4rem] bg-white/10 p-5 ring-1 ring-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-neutral-950">2</span>
                  <h3 className="mt-5 font-black">Gestionar</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">Define precios, comunas y agenda disponible.</p>
                </div>
                <div className="rounded-[1.4rem] bg-white/10 p-5 ring-1 ring-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-neutral-950">3</span>
                  <h3 className="mt-5 font-black">Monitorear</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">La plataforma revisa solicitudes, match y reputación.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-neutral-950 p-6 text-white shadow-xl sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-200">Chat interno protegido</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">El cliente no puede pedir el teléfono del maestro antes del match.</h2>
              <p className="mt-3 leading-7 text-white/70">
                Todas las preguntas sobre trabajos, precios, horarios y experiencia se hacen dentro del chat de servicios.cl. Si el cliente o el maestro intenta enviar teléfono, WhatsApp, correo o datos para cerrar por fuera, el mensaje se bloquea y aparece una tarjeta amarilla. Si insiste, la cuenta puede ser suspendida o expulsada.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.4rem] bg-white/10 p-5 ring-1 ring-white/10">
                  <h3 className="font-black">Mensaje escrito</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">Se revisa antes de enviarse. Si trae teléfono o datos externos, no llega al otro usuario.</p>
                </div>
                <div className="rounded-[1.4rem] bg-white/10 p-5 ring-1 ring-white/10">
                  <h3 className="font-black">Mensaje de voz</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">El audio se transforma a texto y ese texto pasa por el mismo filtro anti-contacto.</p>
                </div>
                <div className="rounded-[1.4rem] bg-amber-300 p-5 text-neutral-950">
                  <h3 className="font-black">Tarjeta amarilla</h3>
                  <p className="mt-2 text-sm leading-6">Warning inmediato: “No está permitido cerrar por fuera. Todo debe hacerse por la plataforma”.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Modelo económico</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Autorización, doble confirmación y cobro</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-4">
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <p className="text-2xl font-black">1</p>
                  <h3 className="mt-3 font-black">Tarjeta autorizada</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">Al reservar, el cliente deja su tarjeta como medio de pago seguro dentro de la plataforma.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <p className="text-2xl font-black">2</p>
                  <h3 className="mt-3 font-black">Doble “sí”</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">Al llegar, app/WhatsApp pregunta al maestro y al cliente si el profesional se presentó.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <p className="text-2xl font-black">3</p>
                  <h3 className="mt-3 font-black">Captura del pago</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">Con ambas confirmaciones, se cobra la tarjeta por la visita o servicio pactado.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <p className="text-2xl font-black">4</p>
                  <h3 className="mt-3 font-black">Transferencia 24–48h</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">El prestador recibe transferencia bancaria después del trabajo, por orden contable.</p>
                </div>
              </div>
              <Link href="/app" className="mt-6 inline-flex rounded-full bg-neutral-950 px-6 py-4 font-black text-white transition hover:bg-neutral-800">
                Ver vista app conectada
              </Link>
            </div>

            <div className="rounded-[2rem] bg-amber-50 p-6 text-amber-950 ring-1 ring-amber-200 sm:p-8">
              <h2 className="text-2xl font-black">Checklist interno antes de publicarlo</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {internalChecklist.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-white/70 p-4 text-sm font-bold">
                    <span>□</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
