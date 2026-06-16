const categories = [
  "Electricidad",
  "Gasfitería",
  "Aseo profundo",
  "Vidrios",
  "Alfombras",
  "Colchones",
  "Autos",
  "Mascotas",
];

const services = [
  {
    title: "Electricista certificado para departamentos",
    provider: "Mario Fuentes",
    commune: "Ñuñoa",
    price: "$35.000",
    rating: "4,96",
    reviews: "128",
    badge: "Video verificado",
    gradient: "from-amber-200 via-orange-100 to-white",
  },
  {
    title: "Limpieza premium de vidrios en altura baja",
    provider: "Claudia Rojas",
    commune: "Providencia",
    price: "$28.000",
    rating: "4,91",
    reviews: "94",
    badge: "Disponible hoy",
    gradient: "from-sky-200 via-cyan-100 to-white",
  },
  {
    title: "Aseo completo post arriendo o mudanza",
    provider: "Equipo CasaLista",
    commune: "Ñuñoa",
    price: "$49.000",
    rating: "4,88",
    reviews: "211",
    badge: "Más contratado",
    gradient: "from-emerald-200 via-lime-100 to-white",
  },
  {
    title: "Limpieza de colchones y tapices a domicilio",
    provider: "Tapicería Limpia Pro",
    commune: "Providencia",
    price: "$32.000",
    rating: "4,93",
    reviews: "76",
    badge: "Garantía 24h",
    gradient: "from-violet-200 via-fuchsia-100 to-white",
  },
];

const steps = [
  "Elige servicio, comuna y horario disponible.",
  "Revisa el video de presentación del profesional.",
  "Reserva en la plataforma y paga cuando llega a tu domicilio.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-neutral-950">
      <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a className="flex items-center gap-2" href="#inicio" aria-label="Ir al inicio">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff385c] text-lg font-black text-white shadow-sm">
              s
            </span>
            <span className="text-xl font-black tracking-tight">servicios.cl</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-neutral-700 md:flex">
            <a className="hover:text-neutral-950" href="#servicios">Servicios</a>
            <a className="hover:text-neutral-950" href="#funciona">Cómo funciona</a>
            <a className="hover:text-neutral-950" href="#profesionales">Soy profesional</a>
          </nav>

          <a
            className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-bold shadow-sm transition hover:shadow-md"
            href="#profesionales"
          >
            Ofrecer servicio
          </a>
        </div>
      </header>

      <section id="inicio" className="mx-auto max-w-7xl px-5 pb-12 pt-8 lg:px-8 lg:pb-16 lg:pt-12">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.10)] ring-1 ring-neutral-200">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-10 lg:p-14">
              <p className="mb-5 inline-flex rounded-full bg-rose-50 px-4 py-2 text-sm font-bold text-[#d70466]">
                Partimos en Ñuñoa y Providencia
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Servicios para tu departamento, con profesionales en video.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Encuentra maestros, aseo, limpieza de vidrios, colchones, autos y paseo de perros. Compara perfiles, revisa disponibilidad y reserva desde una sola plataforma.
              </p>

              <div className="mt-8 rounded-full border border-neutral-200 bg-white p-2 shadow-xl shadow-neutral-200/70 lg:max-w-4xl">
                <div className="grid gap-2 md:grid-cols-[1.1fr_0.8fr_0.7fr_auto]">
                  <div className="rounded-full px-5 py-3 hover:bg-neutral-50">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-neutral-500">Servicio</p>
                    <p className="mt-1 font-bold">¿Qué necesitas?</p>
                  </div>
                  <div className="rounded-full px-5 py-3 hover:bg-neutral-50">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-neutral-500">Comuna</p>
                    <p className="mt-1 font-bold">Ñuñoa o Providencia</p>
                  </div>
                  <div className="rounded-full px-5 py-3 hover:bg-neutral-50">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-neutral-500">Fecha</p>
                    <p className="mt-1 font-bold">Esta semana</p>
                  </div>
                  <a
                    className="flex items-center justify-center rounded-full bg-[#ff385c] px-8 py-4 text-base font-black text-white transition hover:bg-[#e31c5f]"
                    href="#servicios"
                  >
                    Buscar
                  </a>
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] bg-neutral-950 p-6 text-white lg:min-h-full lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,56,92,0.45),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.22),transparent_24%)]" />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="ml-auto w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                  Pago al llegar el profesional
                </div>
                <div className="rounded-[1.7rem] bg-white p-4 text-neutral-950 shadow-2xl">
                  <div className="h-56 rounded-[1.2rem] bg-gradient-to-br from-rose-100 via-orange-100 to-yellow-50 p-5">
                    <div className="flex h-full flex-col justify-between rounded-[1rem] border border-white/70 bg-white/55 p-4 backdrop-blur-sm">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff385c]">Video obligatorio +1 minuto</p>
                        <h2 className="mt-3 text-2xl font-black">“Hola, soy Claudia. Llevo 8 años haciendo aseo profundo...”</h2>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-bold text-white">▶ Ver presentación</span>
                        <span className="text-sm font-bold">4,91 ★</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between px-2 py-4">
                    <div>
                      <p className="font-black">Aseo profundo departamento</p>
                      <p className="text-sm text-neutral-600">Providencia · Disponible mañana</p>
                    </div>
                    <p className="text-right text-sm text-neutral-600"><span className="text-lg font-black text-neutral-950">$49.000</span><br />desde</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-sm font-bold">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">Agenda</div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">Reserva</div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">Confianza</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4 lg:px-8" aria-label="Categorías">
        <div className="flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <a
              key={category}
              className="whitespace-nowrap rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-bold text-neutral-700 shadow-sm transition hover:border-neutral-950 hover:text-neutral-950"
              href="#servicios"
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Servicios destacados</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Profesionales listos para departamentos</h2>
          </div>
          <p className="max-w-xl text-neutral-600">Cada profesional define su precio y debe presentarse en video antes de aparecer publicado.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="group cursor-pointer overflow-hidden rounded-[1.7rem] bg-white shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:shadow-xl">
              <div className={`h-56 bg-gradient-to-br ${service.gradient} p-4`}>
                <div className="flex h-full flex-col justify-between rounded-[1.2rem] bg-white/45 p-4 backdrop-blur-sm">
                  <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-black text-neutral-800 shadow-sm">{service.badge}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white shadow-lg transition group-hover:scale-110">▶</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-black">{service.commune}</p>
                  <p className="text-sm font-bold">★ {service.rating}</p>
                </div>
                <h3 className="mt-2 line-clamp-2 min-h-12 font-bold leading-6">{service.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{service.provider} · {service.reviews} reseñas</p>
                <p className="mt-4 text-sm"><span className="text-lg font-black">{service.price}</span> desde</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="funciona" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="rounded-[2rem] bg-neutral-950 p-6 text-white sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-300">Cómo funciona</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Reserva simple, pago presencial y todo registrado.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step} className="rounded-[1.4rem] bg-white/10 p-5 ring-1 ring-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-neutral-950">{index + 1}</span>
                  <p className="mt-6 font-bold leading-7">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="profesionales" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-neutral-200 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Para profesionales</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Muestra tu experiencia y recibe reservas.</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">Sube un video de más de 1 minuto, define tus precios, marca si atiendes Ñuñoa, Providencia o ambas, y administra tu agenda desde el panel.</p>
            <a className="mt-8 inline-flex rounded-full bg-neutral-950 px-6 py-4 font-black text-white transition hover:bg-neutral-800" href="mailto:hola@servicios.cl">
              Quiero ser profesional
            </a>
          </div>
          <div className="rounded-[2rem] bg-[#ff385c] p-8 text-white shadow-sm sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">Reglas de confianza</p>
            <ul className="mt-6 space-y-5 text-lg font-bold leading-8">
              <li>✓ Video de presentación obligatorio.</li>
              <li>✓ Agenda y disponibilidad visibles.</li>
              <li>✓ Precios publicados por cada profesional.</li>
              <li>✓ Todas las reservas quedan dentro de servicios.cl.</li>
              <li>✓ Pago cuando el profesional llega al domicilio.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-bold text-neutral-950">servicios.cl</p>
          <p>Prototipo inicial · Ñuñoa y Providencia · Marketplace independiente.</p>
        </div>
      </footer>
    </main>
  );
}
