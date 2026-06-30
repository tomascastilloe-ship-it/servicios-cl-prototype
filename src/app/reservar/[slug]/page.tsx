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
    <main className="min-h-screen bg-[#f7f7f7] text-[#14123D]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <Link href={`/servicios/${service.slug}`} className="text-sm font-bold text-[#5E5A8F] hover:text-[#14123D]">
          ← Volver al profesional
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_420px]">
          <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#3F35F2]">
              Solicitud de match
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Cuéntale al profesional qué necesitas.
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5E5A8F]">
              Esta ficha permite coordinar disponibilidad, honorarios y pago sin compartir teléfonos antes de confirmar el match. El cliente deja su tarjeta autorizada de forma segura; el cobro se captura cuando cliente y profesional confirman la llegada a la propiedad.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black">Nombre del cliente</span>
                <input className="mt-2 w-full rounded-2xl border border-[#E7E5FF] px-4 py-4 outline-none focus:border-[#3F35F2]" placeholder="Ej: Tomás Castillo" />
              </label>
              <label className="block">
                <span className="text-sm font-black">Comuna</span>
                <select className="mt-2 w-full rounded-2xl border border-[#E7E5FF] px-4 py-4 outline-none focus:border-[#3F35F2]">
                  <option>Ñuñoa</option>
                  <option>Providencia</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-black">Dirección o referencia del edificio</span>
                <input className="mt-2 w-full rounded-2xl border border-[#E7E5FF] px-4 py-4 outline-none focus:border-[#3F35F2]" placeholder="Ej: Cerca de metro Chile España" />
              </label>
            </div>

            <div className="mt-8 rounded-[1.7rem] border border-[#E7E5FF] p-5">
              <h2 className="text-xl font-black">Tu calendario disponible</h2>
              <p className="mt-2 text-[#5E5A8F]">Selecciona horarios donde puedes recibir al profesional.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {clientSlots.map((slot) => (
                  <label key={slot} className="flex items-center gap-3 rounded-2xl border border-[#E7E5FF] p-4 font-bold transition hover:border-[#3F35F2] hover:bg-[#F1EFFF]">
                    <input type="checkbox" className="h-4 w-4 accent-[#3F35F2]" />
                    {slot}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.7rem] border border-[#E7E5FF] p-5">
              <h2 className="text-xl font-black">Detalle para el profesional</h2>
              <textarea
                className="mt-4 min-h-36 w-full rounded-2xl border border-[#E7E5FF] px-4 py-4 outline-none focus:border-[#3F35F2]"
                placeholder="Describe el problema o servicio. Ej: necesito revisar enchufes del living y cambiar una luminaria. No escribas teléfono ni correo; el sistema los bloqueará antes del match."
              />
              <div className="mt-4 rounded-2xl bg-[#FFF8DD] p-4 text-sm leading-6 text-amber-900">
                <strong>Filtro activo:</strong> antes del match no se permiten teléfonos, correos, WhatsApp, Instagram ni datos para cerrar por fuera. Si el mensaje trae datos de contacto, no se envía y aparece una tarjeta amarilla.
              </div>
              <div className="mt-3 rounded-2xl bg-[#F2F1FF] p-4 text-sm leading-6 text-[#27235F]">
                <strong>Mensaje de voz:</strong> si no quieres escribir, puedes grabar un audio. La app lo convierte a texto, revisa que no tenga teléfonos/datos externos y recién ahí lo publica en el chat.
              </div>
            </div>

            <div className="mt-8 rounded-[1.7rem] bg-[#FFF8DD] p-5 text-[#4A3A00] ring-1 ring-[#FFE68A]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">Chat protegido</p>
              <h2 className="mt-2 text-2xl font-black">No está permitido compartir teléfonos ni cerrar por fuera.</h2>
              <p className="mt-3 text-sm leading-6">
                Si necesitas preguntar detalles del trabajo, escríbelo en el chat interno. Si prefieres hablar, usa el botón de audio: la plataforma transforma tu voz a texto y revisa automáticamente que no se compartan datos externos. Si se intenta enviar teléfono, WhatsApp, correo o Instagram, el mensaje se bloquea y se genera una advertencia.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl bg-white/70 p-4 text-sm font-bold">⚠️ Tarjeta amarilla por pedir contacto externo</div>
                <div className="rounded-2xl bg-white/70 p-4 text-sm font-bold">🚫 Mensaje cancelado si trae teléfono o correo</div>
                <div className="rounded-2xl bg-white/70 p-4 text-sm font-bold">🎙️ Audio a texto para revisar seguridad</div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.7rem] bg-white p-5 ring-1 ring-neutral-200">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3F35F2]">Evaluación después de la visita</p>
              <h2 className="mt-2 text-2xl font-black">Ambos lados califican la experiencia</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {["Puntualidad", "Calidad del trabajo/visita", "Orden y limpieza", "Cordialidad y comunicación"].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#E7E5FF] p-4 text-sm font-black">{item} <span className="text-[#4F46FF]">★★★★★</span></div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.7rem] bg-[#14123D] p-5 text-white">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ADA7FF]">Pago seguro de la reserva</p>
              <h2 className="mt-2 text-2xl font-black">No se paga en efectivo ni por fuera.</h2>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-white/75 md:grid-cols-3">
                <p><strong className="text-white">1.</strong> La tarjeta queda autorizada como medio de pago de la plataforma.</p>
                <p><strong className="text-white">2.</strong> App/WhatsApp pide doble confirmación: maestro llegó + cliente confirma presentación.</p>
                <p><strong className="text-white">3.</strong> Con ambos “sí”, se captura el cobro y luego el profesional recibe transferencia 24–48 horas después.</p>
              </div>
            </div>

            <button className="mt-8 w-full rounded-full bg-[#3F35F2] px-6 py-4 font-black text-white transition hover:bg-[#2F1FEA]">
              Enviar solicitud de match y continuar a pago con tarjeta
            </button>
          </section>

          <aside className="space-y-5">
            <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-neutral-200">
              <p className="text-sm text-[#7773A8]">Estás solicitando</p>
              <h2 className="mt-2 text-2xl font-black">{service.title}</h2>
              <p className="mt-2 text-[#5E5A8F]">{service.provider} · {service.commune}</p>
              <p className="mt-5 text-3xl font-black">{service.price}</p>
              <p className="text-sm text-[#5E5A8F]">desde · pago cuando llega</p>
            </div>

            <div className="rounded-[2rem] bg-[#14123D] p-6 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ADA7FF]">Chat interno</p>
              <h3 className="mt-2 text-2xl font-black">Vista previa de conversación protegida</h3>
              <div className="mt-5 space-y-3 text-sm">
                <div className="max-w-[85%] rounded-2xl bg-white/10 p-3">
                  Cliente: Necesito revisar el tablero y dos enchufes del living.
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl bg-[#3F35F2] p-3">
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
              <ol className="mt-4 space-y-3 text-sm leading-6 text-[#27235F]">
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
