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

export default function AppPrototypePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-neutral-950">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">App conectada a la web</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              burro.cl funcionará como web y app en línea.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
              La página web y la app deben compartir los mismos datos: perfiles, videos, agenda, reservas, chat, confirmaciones, pagos y estado del servicio. Lo que ocurra en un canal debe verse actualizado en el otro.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/profesionales/piloto-maestro" className="rounded-full bg-[#ff385c] px-6 py-4 text-center font-black text-white transition hover:bg-[#e31c5f]">
                Ver ficha piloto del maestro
              </Link>
              <Link href="/reservar/electricista-mario-fuentes" className="rounded-full border border-neutral-300 bg-white px-6 py-4 text-center font-black transition hover:border-neutral-950">
                Ver reserva cliente
              </Link>
              <Link href="https://www.corredoradepropiedadescastillo.cl" target="_blank" className="rounded-full bg-white px-6 py-4 text-center font-black text-neutral-950 shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md">
                Corredora Castillo
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[3rem] bg-neutral-950 p-4 shadow-2xl ring-8 ring-neutral-200">
            <div className="overflow-hidden rounded-[2.4rem] bg-white">
              <div className="bg-neutral-950 px-5 py-5 text-white">
                <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-white/25" />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-200">burro.cl app</p>
                <h2 className="mt-2 text-2xl font-black">Reserva activa</h2>
              </div>
              <div className="space-y-4 p-5">
                <div className="rounded-3xl bg-rose-50 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d70466]">Maestro asignado</p>
                  <p className="mt-1 text-xl font-black">Mantención general</p>
                  <p className="mt-1 text-sm text-neutral-600">Ñuñoa · Hoy 15:00</p>
                </div>
                <div className="rounded-3xl border border-neutral-200 p-4">
                  <p className="font-black">Chat antes del match</p>
                  <div className="mt-4 space-y-3 text-sm font-bold text-neutral-700">
                    <p className="rounded-2xl bg-neutral-100 p-3">Cliente: ¿Puedes revisar si haces enchufes y lámparas?</p>
                    <p className="rounded-2xl bg-neutral-950 p-3 text-white">Maestro: Sí, hago enchufes, interruptores y lámparas.</p>
                    <p className="rounded-2xl bg-amber-100 p-3 text-amber-950">⚠️ Tarjeta amarilla: no se permite pedir ni enviar teléfonos antes del match.</p>
                    <p className="rounded-2xl bg-rose-50 p-3 text-[#d70466]">🎙️ Audio recibido → convertido a texto antes de enviarse.</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-neutral-200 p-4">
                  <p className="font-black">Estado del servicio</p>
                  <div className="mt-4 space-y-3 text-sm font-bold text-neutral-700">
                    <p>✓ Match confirmado</p>
                    <p>✓ Tarjeta autorizada</p>
                    <p>⌛ Esperando llegada del maestro</p>
                    <p>□ Doble confirmación cliente/maestro</p>
                    <p>□ Captura de pago</p>
                  </div>
                </div>
                <div className="rounded-3xl bg-amber-50 p-4 text-amber-950 ring-1 ring-amber-200">
                  <p className="text-sm font-black">⚠️ Chat protegido</p>
                  <p className="mt-2 text-xs leading-5">No se permiten teléfonos, correos ni pagos por fuera. Los audios se convierten a texto antes de enviarse.</p>
                </div>
                <button className="w-full rounded-full bg-neutral-950 px-5 py-4 font-black text-white">
                  Confirmar llegada
                </button>
                <div className="rounded-3xl bg-neutral-100 p-4">
                  <p className="text-sm font-black">Evaluación posterior</p>
                  <p className="mt-2 text-xs leading-5 text-neutral-600">Puntualidad · Calidad · Limpieza · Cordialidad · Cliente colaborativo</p>
                </div>
                <p className="text-center text-xs leading-5 text-neutral-500">
                  La confirmación también podrá enviarse por WhatsApp automático para cliente y prestador.
                </p>
              </div>
            </div>
          </div>
        </div>



        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-neutral-950 p-6 text-white shadow-xl sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-200">Chat protegido tipo Airbnb</p>
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Evaluación doble</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Cliente y maestro se evalúan</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Después de la visita, ambos lados califican la experiencia. Esto ayuda a proteger la calidad de la red y detectar clientes o prestadores problemáticos.
            </p>
            <div className="mt-6 grid gap-3">
              {reviewItems.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-neutral-200 p-4">
                  <span className="font-black">{item}</span>
                  <span className="text-lg text-amber-500">★★★★★</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Flujo operacional</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Mismo proceso para web y app</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-6">
            {flow.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-sm font-black text-white">{index + 1}</span>
                <h3 className="mt-4 font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] bg-neutral-950 p-6 text-white shadow-xl sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-200">Reglas del chat interno</p>
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
