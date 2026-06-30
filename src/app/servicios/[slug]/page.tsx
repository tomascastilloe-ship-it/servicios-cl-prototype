import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#14123D]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <Link href="/servicios" className="text-sm font-bold text-[#5E5A8F] hover:text-[#14123D]">
          ← Volver a servicios
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_390px]">
          <section>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-neutral-200">
              <div className={`min-h-[360px] bg-gradient-to-br ${service.gradient} p-6 sm:p-10`}>
                <div className="flex min-h-[300px] flex-col justify-between rounded-[1.6rem] bg-white/55 p-6 backdrop-blur-md ring-1 ring-white/60">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
                      {service.badge}
                    </span>
                    <span className="rounded-full bg-[#14123D] px-4 py-2 text-sm font-black text-white">
                      Video +1 minuto verificado
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3F35F2]">
                      Presentación del profesional
                    </p>
                    <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                      {service.title}
                    </h1>
                    <button className="mt-6 rounded-full bg-[#14123D] px-6 py-4 font-black text-white shadow-xl transition hover:bg-[#27235F]">
                      ▶ Ver video de {service.provider}
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <div className="flex flex-col justify-between gap-5 border-b border-[#E7E5FF] pb-8 md:flex-row md:items-start">
                  <div>
                    <p className="text-sm font-bold text-[#7773A8]">{service.category} · {service.commune}</p>
                    <h2 className="mt-2 text-3xl font-black">{service.provider}</h2>
                    <p className="mt-3 max-w-3xl text-lg leading-8 text-[#5E5A8F]">{service.experience}</p>
                  </div>
                  <div className="rounded-2xl bg-neutral-50 p-5 text-right">
                    <p className="text-sm text-[#7773A8]">Evaluación</p>
                    <p className="text-2xl font-black">★ {service.rating}</p>
                    <p className="text-sm text-[#5E5A8F]">{service.reviews} reseñas</p>
                  </div>
                </div>

                <div className="grid gap-8 py-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-black">Descripción</h3>
                    <p className="mt-3 leading-8 text-[#5E5A8F]">{service.description}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black">Incluye</h3>
                    <ul className="mt-3 space-y-3 text-[#27235F]">
                      {service.includes.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="font-black text-[#3F35F2]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-[1.7rem] bg-[#14123D] p-6 text-white">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ADA7FF]">
                        Chat interno protegido + pago seguro
                      </p>
                      <h3 className="mt-2 text-2xl font-black">Antes del match no se comparten teléfonos.</h3>
                      <p className="mt-3 max-w-3xl leading-7 text-white/70">
                        Como en plataformas tipo Airbnb, cliente y profesional conversan solo dentro de burro.cl. Si alguien intenta enviar teléfono, WhatsApp, correo o cerrar por fuera, el mensaje se bloquea y aparece una tarjeta amarilla. La reserva y el pago se mantienen dentro de la plataforma.
                      </p>
                    </div>
                    <span className="rounded-full bg-white/10 px-5 py-3 text-sm font-black ring-1 ring-white/15">
                      Chat interno · warning anti-contacto
                    </span>
                  </div>
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {["1. Preguntas por chat o audio transcrito", "2. Bloqueo de teléfonos/datos externos", "3. Match + tarjeta + doble confirmación"].map((step) => (
                      <div key={step} className="rounded-2xl bg-white/10 p-4 text-sm font-bold text-white/80 ring-1 ring-white/10">{step}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="h-fit rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-neutral-200 lg:sticky lg:top-24">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-[#7773A8]">Precio definido por profesional</p>
                <p className="text-3xl font-black">{service.price}</p>
                <p className="text-sm text-[#5E5A8F]">desde · pago con tarjeta al confirmar llegada</p>
              </div>
              <span className="rounded-full bg-[#F1EFFF] px-3 py-2 text-sm font-black text-[#3F35F2]">
                {service.commune}
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-[#E7E5FF] p-4">
              <p className="font-black">Calendario del profesional</p>
              <p className="mt-1 text-sm text-[#5E5A8F]">Horarios visibles antes de solicitar match.</p>
              <div className="mt-4 grid gap-2">
                {service.availability.map((slot) => (
                  <button key={slot} className="rounded-xl border border-[#E7E5FF] px-4 py-3 text-left text-sm font-bold transition hover:border-[#3F35F2] hover:bg-[#F1EFFF]">
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-neutral-50 p-4">
              <p className="font-black">Cómo funciona el pago</p>
              <div className="mt-3 space-y-2 text-sm text-[#5E5A8F]">
                <p>1. Cliente solicita match y agenda.</p>
                <p>2. Profesional acepta horario y valor estimado.</p>
                <p>3. Al llegar a la propiedad, se activa el pago con tarjeta.</p>
                <p>4. Profesional recibe transferencia 24–48 horas después del trabajo.</p>
              </div>
            </div>

            <Link
              href={`/reservar/${service.slug}`}
              className="mt-6 flex w-full justify-center rounded-full bg-[#3F35F2] px-6 py-4 text-center font-black text-white transition hover:bg-[#2F1FEA]"
            >
              Solicitar match y reservar
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
