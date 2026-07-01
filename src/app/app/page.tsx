import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const flow = [
  {
    title: "Explorar servicios",
    text: "El cliente revisa profesionales, video, precio, comuna y disponibilidad desde web o app.",
  },
  {
    title: "Chat protegido",
    text: "Antes del match, cliente y maestro solo conversan por mensajería interna; teléfonos y datos externos se bloquean.",
  },
  {
    title: "Solicitar match",
    text: "Cliente y prestador acuerdan horario dentro de la plataforma, con tarjeta autorizada y reglas claras.",
  },
  {
    title: "Confirmar llegada",
    text: "Al llegar, se envía confirmación por app/WhatsApp al maestro y al cliente para validar presencia.",
  },
  {
    title: "Cobro seguro",
    text: "Con doble confirmación, se captura/cobra la tarjeta autorizada por la visita o servicio pactado.",
  },
  {
    title: "Pago al prestador",
    text: "El maestro recibe transferencia bancaria 24 a 48 horas después de realizado el trabajo.",
  },
];

const moderationRules = [
  "No se pueden enviar teléfonos, WhatsApp, correos, Instagram, direcciones externas ni datos para cerrar por fuera antes del match.",
  "Si el sistema detecta un número o dato externo, el mensaje no se envía y aparece una tarjeta amarilla/warning.",
  "Si el usuario insiste, el caso pasa a revisión y puede ser suspendido o expulsado de la plataforma.",
  "Si la persona no quiere escribir, puede enviar audio; la app lo convierte a texto y revisa el texto antes de publicarlo en el chat.",
];

const reviewItems = [
  "Puntualidad",
  "Calidad del trabajo o visita",
  "Orden y limpieza del lugar",
  "Cordialidad y comunicación",
];

const bottomNav = [
  { label: "Hoy", icon: "⌂", active: true },
  { label: "Calendario", icon: "□", active: false },
  { label: "Anuncios", icon: "▢", active: false },
  { label: "Mensajes", icon: "▱", active: false },
  { label: "Menú", icon: "☰", active: false },
];

export default function AppPrototypePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#14123D]">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#3F35F2]">App conectada a la web</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              burro.cl funcionará como web y app en línea.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E5A8F]">
              La página web y la app deben compartir los mismos datos: perfiles, videos, agenda, reservas, chat, confirmaciones, pagos y estado del servicio. Lo que ocurra en un canal debe verse actualizado en el otro.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/profesionales/piloto-maestro" className="rounded-full bg-[#3F35F2] px-6 py-4 text-center font-black text-white transition hover:bg-[#2F1FEA]">
                Ver ficha piloto del maestro
              </Link>
              <Link href="/reservar/electricista-mario-fuentes" className="rounded-full border border-[#D8D6FF] bg-white px-6 py-4 text-center font-black transition hover:border-[#3F35F2]">
                Ver reserva cliente
              </Link>
              <Link href="https://www.corredoradepropiedadescastillo.cl" target="_blank" className="rounded-full bg-white px-6 py-4 text-center font-black text-[#14123D] shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md">
                Corredora Castillo
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[3rem] bg-[#14123D] p-4 shadow-2xl ring-8 ring-neutral-200">
            <div className="flex min-h-[720px] flex-col overflow-hidden rounded-[2.4rem] bg-white">
              <div className="px-5 pb-4 pt-5">
                <div className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-neutral-200" />
                <div className="flex gap-3">
                  <button className="rounded-full bg-[#14123D] px-9 py-4 text-sm font-black text-white shadow-xl shadow-[#14123D]/20">
                    Hoy
                  </button>
                  <button className="rounded-full bg-[#F4F3FF] px-7 py-4 text-sm font-black text-[#C8C5FF]">
                    Reservaciones programadas
                  </button>
                </div>
              </div>

              <div className="relative flex flex-1 items-center justify-center px-8">
                <Link
                  href="/"
                  aria-label="Ir a burro.cl"
                  className="group flex flex-col items-center opacity-25 transition hover:opacity-55"
                >
                  <Image
                    src="/brand/burro-icon.svg"
                    alt="burro.cl"
                    width={132}
                    height={132}
                    className="h-28 w-28 grayscale"
                    priority
                  />
                  <span className="-mt-2 text-sm font-black tracking-tight text-[#14123D]">burro.cl</span>
                </Link>
              </div>

              <div className="border-t border-neutral-100 bg-white px-4 pb-5 pt-3">
                <div className="grid grid-cols-5 gap-1">
                  {bottomNav.map((item) => (
                    <button
                      key={item.label}
                      className={`flex flex-col items-center gap-1 rounded-2xl py-2 text-[11px] font-bold ${
                        item.active ? "text-[#3F35F2]" : "text-neutral-400"
                      }`}
                    >
                      <span className="text-2xl leading-none">{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
                <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-neutral-950" />
              </div>
            </div>
          </div>
        </div>



        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#14123D] p-6 text-white shadow-xl sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C8C5FF]">Chat protegido tipo Airbnb</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">La comunicación queda dentro de la plataforma</h2>
            <p className="mt-3 leading-7 text-white/70">
              Antes del match no se pueden compartir teléfonos ni datos externos. Si el cliente o el maestro intenta saltarse la plataforma, el sistema bloquea el mensaje y muestra una advertencia.
            </p>
            <div className="mt-6 space-y-3">
              {moderationRules.map((rule) => (
                <div key={rule} className="rounded-2xl bg-white/10 p-4 text-sm font-bold text-white/80 ring-1 ring-white/10">✓ {rule}</div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#3F35F2]">Evaluación doble</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Cliente y maestro se evalúan</h2>
            <p className="mt-3 leading-7 text-[#5E5A8F]">
              Después de la visita, ambos lados califican la experiencia. Esto ayuda a proteger la calidad de la red y detectar clientes o prestadores problemáticos.
            </p>
            <div className="mt-6 grid gap-3">
              {reviewItems.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-[#E7E5FF] p-4">
                  <span className="font-black">{item}</span>
                  <span className="text-lg text-[#4F46FF]">★★★★★</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#3F35F2]">Flujo operacional</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Mismo proceso para web y app</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-6">
            {flow.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-[#E7E5FF] p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14123D] text-sm font-black text-white">{index + 1}</span>
                <h3 className="mt-4 font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5E5A8F]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] bg-[#14123D] p-6 text-white shadow-xl sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C8C5FF]">Reglas del chat interno</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Todo se conversa dentro de burro.cl.</h2>
          <p className="mt-3 max-w-4xl leading-7 text-white/70">
            Igual que en plataformas tipo Airbnb, la comunicación previa debe quedar dentro de la app/web. El sistema revisa mensajes escritos y audios transcritos para evitar teléfonos, WhatsApp, correos o intentos de cerrar por fuera.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {moderationRules.map((rule) => (
              <div key={rule} className="rounded-2xl bg-white/10 p-4 text-sm font-bold leading-6 text-white/75 ring-1 ring-white/10">
                {rule}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
