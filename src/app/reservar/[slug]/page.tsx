import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { getService, services } from "@/lib/services";

const clientSlots = ["Lunes 19:00", "Martes 08:30", "Miércoles 18:30", "Sábado 10:00"];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function BookingPage({
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
    <main className="min-h-screen bg-[#f7f7f7] text-neutral-950">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <Link href={`/servicios/${service.slug}`} className="text-sm font-bold text-neutral-600 hover:text-neutral-950">
          ← Volver al profesional
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_420px]">
          <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">
              Solicitud de match
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Cuéntale al profesional qué necesitas.
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
              Esta ficha permite coordinar disponibilidad, honorarios y pago sin compartir teléfonos antes de confirmar el match. El cliente deja su tarjeta autorizada de forma segura; el cobro se captura cuando cliente y profesional confirman la llegada a la propiedad.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black">Nombre del cliente</span>
                <input className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-4 outline-none focus:border-[#ff385c]" placeholder="Ej: Tomás Castillo" />
              </label>
              <label className="block">
                <span className="text-sm font-black">Comuna</span>
                <select className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-4 outline-none focus:border-[#ff385c]">
                  <option>Ñuñoa</option>
                  <option>Providencia</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-black">Dirección o referencia del edificio</span>
                <input className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-4 outline-none focus:border-[#ff385c]" placeholder="Ej: Cerca de metro Chile España" />
              </label>
            </div>

            <div className="mt-8 rounded-[1.7rem] border border-neutral-200 p-5">
              <h2 className="text-xl font-black">Tu calendario disponible</h2>
              <p className="mt-2 text-neutral-600">Selecciona horarios donde puedes recibir al profesional.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {clientSlots.map((slot) => (
                  <label key={slot} className="flex items-center gap-3 rounded-2xl border border-neutral-200 p-4 font-bold transition hover:border-[#ff385c] hover:bg-rose-50">
                    <input type="checkbox" className="h-4 w-4 accent-[#ff385c]" />
                    {slot}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.7rem] border border-neutral-200 p-5">
              <h2 className="text-xl font-black">Detalle para el profesional</h2>
              <textarea
                className="mt-4 min-h-36 w-full rounded-2xl border border-neutral-200 px-4 py-4 outline-none focus:border-[#ff385c]"
                placeholder="Describe el problema o servicio. Ej: necesito revisar enchufes del living y cambiar una luminaria. No escribas teléfono ni correo; el sistema los bloqueará antes del match."
              />
              <div className="mt-4 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                <strong>Filtro activo:</strong> antes del match no se permiten teléfonos, correos, WhatsApp, Instagram ni datos para cerrar por fuera. Si el mensaje trae datos de contacto, no se envía y aparece una tarjeta amarilla.
              </div>
              <div className="mt-3 rounded-2xl bg-neutral-100 p-4 text-sm leading-6 text-neutral-700">
                <strong>Mensaje de voz:</strong> si no quieres escribir, puedes grabar un audio. La app lo convierte a texto, revisa que no tenga teléfonos/datos externos y recién ahí lo publica en el chat.
              </div>
            </div>

            <div className="mt-8 rounded-[1.7rem] bg-neutral-950 p-5 text-white">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-rose-300">Pago seguro de la reserva</p>
              <h2 className="mt-2 text-2xl font-black">No se paga en efectivo ni por fuera.</h2>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-white/75 md:grid-cols-3">
                <p><strong className="text-white">1.</strong> La tarjeta queda autorizada como medio de pago de la plataforma.</p>
                <p><strong className="text-white">2.</strong> App/WhatsApp pide doble confirmación: maestro llegó + cliente confirma presentación.</p>
                <p><strong className="text-white">3.</strong> Con ambos “sí”, se captura el cobro y luego el profesional recibe transferencia 24–48 horas después.</p>
              </div>
            </div>

            <button className="mt-8 w-full rounded-full bg-[#ff385c] px-6 py-4 font-black text-white transition hover:bg-[#e31c5f]">
              Enviar solicitud de match y continuar a pago con tarjeta
            </button>
          </section>

          <aside className="space-y-5">
            <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-neutral-200">
              <p className="text-sm text-neutral-500">Estás solicitando</p>
              <h2 className="mt-2 text-2xl font-black">{service.title}</h2>
              <p className="mt-2 text-neutral-600">{service.provider} · {service.commune}</p>
              <p className="mt-5 text-3xl font-black">{service.price}</p>
              <p className="text-sm text-neutral-600">desde · pago cuando llega</p>
            </div>

            <div className="rounded-[2rem] bg-neutral-950 p-6 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-rose-300">Chat interno</p>
              <h3 className="mt-2 text-2xl font-black">Vista previa de conversación protegida</h3>
              <div className="mt-5 space-y-3 text-sm">
                <div className="max-w-[85%] rounded-2xl bg-white/10 p-3">
                  Cliente: Necesito revisar el tablero y dos enchufes del living.
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl bg-[#ff385c] p-3">
                  Profesional: Puedo mañana 09:30. El valor estimado parte en {service.price}.
                </div>
                <div className="rounded-2xl bg-amber-400/15 p-3 text-amber-100 ring-1 ring-amber-300/20">
                  Sistema: ⚠️ Tarjeta amarilla. No se permite pedir ni enviar teléfonos, WhatsApp, correos o datos para cerrar por fuera antes del match. Escribe tus dudas aquí o envía audio; lo convertiremos a texto.
                </div>
                <div className="rounded-2xl bg-red-500/15 p-3 text-red-100 ring-1 ring-red-300/20">
                  Reincidencia: si el usuario insiste en sacar el negocio de la plataforma, la cuenta puede quedar suspendida o expulsada.
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200">
              <h3 className="text-xl font-black">Cuándo se habilita el contacto</h3>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-neutral-700">
                <li><strong>1.</strong> Cliente envía ficha y calendario.</li>
                <li><strong>2.</strong> Profesional confirma disponibilidad y honorario.</li>
                <li><strong>3.</strong> Ambas partes aceptan el match.</li>
                <li><strong>4.</strong> Se mantiene mensajería interna para detalles finales.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
